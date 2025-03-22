"use server";
import { error } from "console";
import { addProperty, deleteAllPropertiesById, getProperties, updateProperty } from "@/db/queries";
import { onAuthenticateAdmin } from "./admin";
import { PropertyFormData } from "@/app/(protected)/(pages)/(adminPages)/create-property/_components/PropertyForm";

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

export const createProperty = async (data:PropertyFormData,images:string[]) => {
  try {
    const checkUser = await onAuthenticateAdmin();
    if (checkUser.status !== 200 || !checkUser.user) {
      return { status: 403, error: "⚠️ User Not Authenticated" };
    }
    const updatedProperty = await addProperty(data,images);

    if (!updatedProperty) {
      return { status: 500, error: "Failed to create property" };
    }
    console.log("inside create property action")
    return { status: 200, data: updatedProperty};
  } catch (error) {
    console.log("⚠️ ERROR ", error);
    return { status: 500, error: "Internal Server Error" };
  }
};


export const deleteAllProperties = async (projectIds: number[]) => {
  try {
    if (!Array.isArray(projectIds) || projectIds.length === 0) {
      return { status: 400, error: "No Project IDs are Provided" };
    }

    const checkUser = await onAuthenticateAdmin();
    if (checkUser.status !== 200 || !checkUser.user) {
      return { status: 403, error: "⚠️ User Not Authenticated as Admin" };
    }

    const deletedProjects = await deleteAllPropertiesById(projectIds);

    return { status: 200, data: deletedProjects.length };
  } catch (error) {
    console.log("⚠️ ERROR ", error);
    return { status: 500, error: "Internal Server Error" };
  }
};

export const getDeletedProperties = async () => {
  try {
    const checkUser = await onAuthenticateAdmin();
    if (checkUser.status !== 200 || !checkUser.user) {
      return { status: 403, error: "⚠️ User Not Authenticated" };
    }
    //get deleted projects
    const properties = await getProperties(true);

    if (!properties) {
      return { status: 400, message: "No deleted projects found", data: [] };
    }
    return { status: 200, data: properties };
  } catch (error) {
    console.log("⚠️ ERROR ", error);
    return { status: 500, error: "Internal Server Error" };
  }
};