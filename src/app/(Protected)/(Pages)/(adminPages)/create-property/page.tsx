"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { motion } from "framer-motion";
import ImageUpload from "./_components/ImageUpload";
import { useImageStore } from "@/store/imagStore";

const propertySchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().optional(),
  price: z.coerce.number().positive("Price must be a positive number"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  country: z.string().min(2, "Country is required"),
  zipCode: z.string().optional(),
  bedrooms: z.coerce.number().int().optional(),
  bathrooms: z.coerce.number().int().optional(),
  areaSqFt: z.string().optional(),
  propertyType: z.enum(["Apartment", "House", "Commercial", "Land", "Villa"]),
  brokerId: z.string().min(3, "Broker ID is required"),
});

type PropertyFormData = z.infer<typeof propertySchema>;

export default function CreatePropertyPage() {
  const { images } = useImageStore();
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<PropertyFormData>({
    resolver: zodResolver(propertySchema),
    mode: "onChange",
  });

  const onSubmit = async (data: PropertyFormData) => {
    const payload = { ...data, images };
    console.log("Submitting:", payload);
    // TODO: Send payload to backend
  };

  return (
    <motion.div 
      className="max-w-3xl mx-auto p-8 bg-primary-10 shadow-lg rounded-lg"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Property</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.2 }}
        >
          <div>
            <label className="block text-gray-600 font-medium">Title</label>
            <input {...register("title")} placeholder="Enter property title" className="input" />
            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Price ($)</label>
            <input {...register("price", { valueAsNumber: true })} placeholder="Price" className="input" />
            {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
          </div>
        </motion.div>

        <div>
          <label className="block text-gray-600 font-medium">Description</label>
          <textarea {...register("description")} placeholder="Describe the property..." className="input h-24" />
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 font-medium">Address</label>
            <input {...register("address")} placeholder="Address" className="input" />
            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
          </div>

          <div>
            <label className="block text-gray-600 font-medium">City</label>
            <input {...register("city")} placeholder="City" className="input" />
            {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
          </div>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 font-medium">State</label>
            <input {...register("state")} placeholder="State" className="input" />
            {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Country</label>
            <input {...register("country")} placeholder="Country" className="input" />
            {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
          </div>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-gray-600 font-medium">Bedrooms</label>
            <input {...register("bedrooms", { valueAsNumber: true })} placeholder="Bedrooms" className="input" />
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Bathrooms</label>
            <input {...register("bathrooms", { valueAsNumber: true })} placeholder="Bathrooms" className="input" />
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Area (sq ft)</label>
            <input {...register("areaSqFt")} placeholder="Area" className="input" />
          </div>
        </motion.div>

        {/* ✅ Property Type Dropdown */}
        <div>
          <label className="block text-gray-600 font-medium">Property Type</label>
          <select {...register("propertyType")} className="input">
            <option value="">Select Property Type</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Commercial">Commercial</option>
            <option value="Land">Farm Land</option>
            <option value="Land">Land</option>
            <option value="Villa">Villa</option>
          </select>
          {errors.propertyType && <p className="text-red-500 text-sm">{errors.propertyType.message}</p>}
        </div>

        <div>
          <label className="block text-gray-600 font-medium">Broker ID</label>
          <input {...register("brokerId")} placeholder="Broker ID" className="input" />
          {errors.brokerId && <p className="text-red-500 text-sm">{errors.brokerId.message}</p>}
        </div>

        <ImageUpload />

        <motion.button
          type="submit"
          className={`w-full text-primary p-3 rounded-md transition ${
            isValid ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
          }`}
          whileHover={{ scale: isValid ? 1.02 : 1 }}
          disabled={!isValid}
        >
          Submit Property
        </motion.button>
      </form>
    </motion.div>
  );
}
