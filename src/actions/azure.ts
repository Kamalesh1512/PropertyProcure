"use server";

import { BlobServiceClient } from "@azure/storage-blob";
import { v4 as uuidv4 } from "uuid";
import { onAuthenticateAdmin } from "./admin";
import { error } from "console";

const AZURE_STORAGE_CONNECTION_STRING =
  process.env.AZURE_STORAGE_CONNECTION_STRING!;
const CONTAINER_NAME = "property-images";

export async function uploadImageToAzure(file: File) {
  try {
    const checkUser = await onAuthenticateAdmin();
    if (checkUser.status !== 200 || !checkUser.user) {
      return { status: 403, error: "⚠️ User is Not Authenticated as Admin" };
    }
    const blobServiceClient = BlobServiceClient.fromConnectionString(
      AZURE_STORAGE_CONNECTION_STRING
    );
    const containerClient =
      blobServiceClient.getContainerClient(CONTAINER_NAME);

    const blobName = `${uuidv4()}-${file.name}`;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    await blockBlobClient.uploadData(await file.arrayBuffer(), {
      blobHTTPHeaders: { blobContentType: file.type },
    });

    // if (blobServiceClient.url === undefined) {
    //   return { status: 401, error: "Failed to upload image to Azure" };
    // }

    return { status: 200, data: blobServiceClient.url};
  } catch (error) {
    console.log("⚠️ ERROR ", error);
    return { status: 500, error: "Internal Server Error" };
  }
}
