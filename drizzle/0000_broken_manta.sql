CREATE TABLE "properties" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text,
	"price" real NOT NULL,
	"address" text NOT NULL,
	"city/place" varchar(100) NOT NULL,
	"state" varchar(100) NOT NULL,
	"country" varchar(100) NOT NULL,
	"zip_code" varchar(20),
	"bedrooms" integer,
	"bathrooms" integer,
	"area_sq_ft" varchar,
	"property_type" varchar(100) NOT NULL,
	"is_deleted" boolean DEFAULT true,
	"brokerId" varchar NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
