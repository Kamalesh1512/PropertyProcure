"use server";
import { error } from "console";
import { getProperties, updateProperty } from "@/db/queries";
import { onAuthenticateAdmin } from "./admin";

export const getAllProperties= async () => {
  try {
    const properties = await getProperties(false);

    if (properties.length === 0) {
      return { status: 404, error: "No Properties Found" };
    }
    return { status: 200, data: properties };
  } catch (error) {
    console.log("⚠️ ERROR ", error);
    return { status: 500, error: "Internal Server Error" };
  }
};

export const recoverProperty = async (propertyId: number) => {
  try {
    const checkUser = await onAuthenticateAdmin();
    if (checkUser.status !== 200 || !checkUser.user) {
      return { status: 403, error: "⚠️ User is Not Authenticated as Admin" };
    }
    const updatedProperty = await updateProperty(propertyId, {
      isDeleted: false,
    });

    if (!updatedProperty) {
      return { status: 500, error: " Failed to recover property" };
    }
    return { status: 200, data: updatedProperty.rowCount };
  } catch (error) {
    console.log("⚠️ ERROR ", error);
    return { status: 500, error: "Internal Server Error" };
  }
};

export const deleteProject = async (propertyId: number) => {
  try {
    const checkUser = await onAuthenticateAdmin();
    if (checkUser.status !== 200 || !checkUser.user) {
      return { status: 403, error: "⚠️ User Not Authenticated" };
    }
    const updatedProperty = await updateProperty(propertyId, {
      isDeleted: true,
    });

    if (!updatedProperty) {
      return { status: 500, error: "Failed to delete property" };
    }
    return { status: 200, data: updatedProperty.rowCount };
  } catch (error) {
    console.log("⚠️ ERROR ", error);
    return { status: 500, error: "Internal Server Error" };
  }
};
