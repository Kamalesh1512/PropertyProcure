"use server";

import { 
  BlobServiceClient, 
  StorageSharedKeyCredential, 
  BlobSASPermissions, 
  generateBlobSASQueryParameters 
} from "@azure/storage-blob";
import { v4 as uuidv4 } from "uuid";

export async function generateSasUrl(fileName: string, fileType: string) {
  try {
    // Ensure environment variables exist
    const accountName = process.env.NEXT_AZURE_STORAGE_ACCOUNT_NAME!;
    const accountKey = process.env.NEXT_AZURE_STORAGE_ACCOUNT_KEY!;
    const containerName = process.env.NEXT_AZURE_STORAGE_CONTAINER_NAME!;

    if (!fileName || !fileType) {
      return { status: 400, error: "⚠️ Missing file name or type" };
    }

    // Generate a unique file name to avoid conflicts
    const uniqueFileName = `${uuidv4()}-${fileName}`;

    // Create Blob Service Client
    const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);
    const blobServiceClient = new BlobServiceClient(
      `https://${accountName}.blob.core.windows.net`,
      sharedKeyCredential
    );
    const containerClient = blobServiceClient.getContainerClient(containerName);

    // SAS Token Permissions (Write + Create)
    const expiresOn = new Date(new Date().valueOf() + 10 * 60 * 1000); // Expires in 10 minutes
    const sasOptions = {
      containerName: containerClient.containerName,
      blobName: uniqueFileName,
      permissions: BlobSASPermissions.parse("rw"), // read & Write Access
      expiresOn,
    };

    // Generate SAS Token
    const sasToken = generateBlobSASQueryParameters(sasOptions, sharedKeyCredential).toString();
    const sasUrl = `https://${accountName}.blob.core.windows.net/${containerName}/${uniqueFileName}?${sasToken}`;
    const blobUrl = `https://${accountName}.blob.core.windows.net/${containerName}/${uniqueFileName}`;

    return { status: 200, sasUrl,blobUrl };
  } catch (error) {
    console.error("⚠️ Error generating SAS URL:", error);
    return { status: 500, error: "⚠️ Failed to generate SAS URL" };
  }
}
