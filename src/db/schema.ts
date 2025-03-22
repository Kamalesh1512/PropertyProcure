import { relations, sql } from "drizzle-orm";
import {
  pgTable,
  uuid,
  varchar,
  serial,
  text,
  timestamp,
  json,
  boolean,
  integer,
  real,
} from "drizzle-orm/pg-core";


export const properties = pgTable("properties", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  price: real("price").notNull(),
  address: text("address").notNull(),
  city: varchar("city/place", { length: 100 }).notNull(),
  state: varchar("state", { length: 100 }).notNull(),
  country: varchar("country", { length: 100 }).notNull(),
  zipCode: varchar("zip_code", { length: 20 }),
  bedrooms: integer("bedrooms"),
  bathrooms: integer("bathrooms"),
  areaSqFt: varchar("area_sq_ft"),
  propertyType: varchar("property_type", { length: 100 }).notNull(), // e.g., "Apartment", "House", "Commercial"
  isDeleted: boolean("is_deleted").default(true).notNull(),
  brokerId: varchar('brokerId').notNull(),
  thumbnail:varchar("thumbnail", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const propertyImages = pgTable("property_images", {
  id: serial("id").primaryKey(),
  propertyId: integer("property_id").references(() => properties.id, { onDelete: "cascade" }).notNull(),
  imageUrl: varchar("image_url", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});