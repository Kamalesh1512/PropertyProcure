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
  areaSqFt: varchar("area_sq_ft"),
  propertyType: varchar("property_type", { length: 100 }).notNull(), // e.g., "Apartment", "House", "Commercial"
  isDeleted: boolean("is_deleted").default(true).notNull(),
  brokerId: varchar('brokerId').notNull(),
  thumbnail:varchar("thumbnail", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),

    // Residential specific fields
    bedrooms: integer("bedrooms"),
    bathrooms: integer("bathrooms"),
    furnishingStatus: varchar("furnishing_status", { length: 50 }),
    constructionYear: varchar("construction_year", { length: 20 }),
    totalFloors: integer("total_floors"),
    floorNumber: integer("floor_number"),
    hasLift: boolean("has_lift"),
    hasPowerBackup: boolean("has_power_backup"),
    hasParking: boolean("has_parking"),
    hasBalcony: boolean("has_balcony"),
  
    // Agricultural specific fields
    soilType: varchar("soil_type", { length: 50 }),
    irrigationSource: varchar("irrigation_source", { length: 50 }),
    cropSuitability: text("crop_suitability"),
    hasFencing: boolean("has_fencing"),
    waterSource: varchar("water_source", { length: 50 }),
    waterQuality: varchar("water_quality", { length: 20 }),
    cultivationStatus: varchar("cultivation_status", { length: 50 }),
  
    // Plot specific fields
    plotShape: varchar("plot_shape", { length: 30 }),
    isCornerPlot: boolean("is_corner_plot"),
    facing: varchar("facing", { length: 30 }),
    hasBoundary: boolean("has_boundary"),
    roadWidth: varchar("road_width", { length: 30 }),
    distanceFromHighway: varchar("distance_from_highway", { length: 30 }),
    hasPublicTransport: boolean("has_public_transport"),
    nearbyLandmarks: text("nearby_landmarks"),
    dimensions: varchar("dimensions", { length: 50 }),
    approvalStatus: varchar("approval_status", { length: 100 }),
});

export const propertyImages = pgTable("property_images", {
  id: serial("id").primaryKey(),
  propertyId: integer("property_id").references(() => properties.id, { onDelete: "cascade" }).notNull(),
  imageUrl: varchar("image_url", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});