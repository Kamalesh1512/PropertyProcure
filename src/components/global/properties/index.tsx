'use client'
import React from "react";
import { motion } from "framer-motion";
import { InferSelectModel } from "drizzle-orm";
import { containerVariants } from "@/lib/constants";
import { properties } from "@/db/schema";
import PropertyCard from "../property-card";

type PropertyType = InferSelectModel<typeof properties>;

interface ProjectsProps {
  properties: PropertyType[];
  isAdmin:Promise<boolean> | boolean,
}

const Properties = ({ properties,isAdmin }: ProjectsProps) => {

  
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {properties.map((property, id) => (
        <PropertyCard
          key={id}
          propertyId={property?.id}
          price={property.price}
          title={property?.title}
          createdAt={property?.createdAt}
          isDelete={property?.isDeleted}
          image={property?.thumbnail}
          isAdmin = {isAdmin}
        />
      ))}
    </motion.div>
  );
};

export default Properties;
