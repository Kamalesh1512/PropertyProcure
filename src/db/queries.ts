import { db } from "@/db/index";
import { and, desc, eq, gte, ilike, inArray, lte, or } from "drizzle-orm";
import { properties, propertyImages } from "./schema";
import { PropertyFormDataProps } from "@/lib/types";
import { PropertyFormData } from "@/app/(Protected)/(Pages)/(adminPages)/create-property/_components/PropertyForm";

//query to get user by ID
export async function getProperties(
  name: string,
  city: string,
  minPrice: number,
  maxPrice:number,
  propertyType: string,
  isDeleted: boolean
) {
  try {
    const projects = await db
      .select()
      .from(properties)
      .where(
        and(
          eq(properties.isDeleted, isDeleted),
          and(
            name ? ilike(properties.title, `%${name}%`) : undefined,
            city ? ilike(properties.city, `%${city}%`) : undefined,
            propertyType
              ? ilike(properties.propertyType, `%${propertyType}%`)
              : undefined,
              minPrice && maxPrice
              ? and(
                  gte(properties.price, minPrice), 
                  lte(properties.price, maxPrice),
                )
              : undefined
          )
          )
      )
      .orderBy(desc(properties.updatedAt));

    return projects;
  } catch (error) {
    console.error("Database query error [PROPERTY_TABLE]:", error);
    throw new Error("Failed to fetch properties");
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
    console.error("Database query error [PROPERTY_TABLE]:", error);
    throw new Error("Failed to Update property Table");
  }
}

export async function addProperty(data: PropertyFormData, images: string[]) {
  try {
    const newProperty = await db
      .insert(properties)
      .values({
        title: data.title,
        description: data.description,
        price: data.price,
        address: data.address,
        city: data.city,
        state: data.state,
        country: data.country,
        bedrooms: data.bedrooms,
        bathrooms: data.bathrooms,
        areaSqFt: data.areaSqFt,
        propertyType: data.propertyType,
        isDeleted: false,
        brokerId: data.brokerId,
        thumbnail: images[0],
      })
      .returning({ id: properties.id });

    // If property was inserted, insert images
    if (newProperty) {
      await db.insert(propertyImages).values(
        images.map((image) => ({
          propertyId: newProperty[0].id,
          imageUrl: image,
        }))
      );
    }
    return newProperty[0];
  } catch (error) {
    console.error("Database query error [PROPERTY_TABLE]:", error);
    throw new Error("Failed to insert to property Table");
  }
}

export async function deleteAllPropertiesById(propertyIds: number[]) {
  try {
    const result = await db
      .delete(properties)
      .where(inArray(properties.id, propertyIds))
      .returning();
    return result;
  } catch (error) {
    console.error("Database query error [PROPERTY_TABLE]:", error);
    throw new Error("Failed to delete properties");
  }
}



export async function getPropertiesDeleted(isDeleted:boolean) {
  try {
    const result = await db
      .select()
      .from(properties)
      .where(eq(properties.isDeleted, isDeleted))
      .orderBy(desc(properties.updatedAt))
    return result;
  } catch (error) {
    console.error("Database query error [PROPERTY_TABLE]:", error);
    throw new Error("Failed to delete properties");
  }
}