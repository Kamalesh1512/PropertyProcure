import { db } from "@/db/index";
import { and, desc, eq, inArray } from "drizzle-orm";
import { properties } from "./schema";

//query to get user by ID
export async function getProperties(
  isDeleted: boolean,
) {
  
  try {
      //get all properties
      const projects = await db
        .select()
        .from(properties)
        .where(eq(properties.isDeleted, isDeleted))
        .orderBy(desc(properties.updatedAt));

      return projects;
  } catch (error) {
    console.error("Database query error [PROJECT_TABLE]:", error);
    throw new Error("Failed to fetch projects");
  }
}

// query to update the project
export async function updateProperty(
  propertyId: number,
  updates: Record<string, string | number | boolean | JSON>
) {
  try {
    const property = await db
      .update(properties)
      .set(updates)
      .where(eq(properties.id, propertyId));

    return property;
  } catch (error) {
    console.error("Database query error [PROJECT_TABLE]:", error);
    throw new Error("Failed to Update project Table");
  }
}