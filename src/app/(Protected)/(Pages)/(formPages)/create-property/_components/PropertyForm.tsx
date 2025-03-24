"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { motion } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useImageStore } from "@/store/imageStore";
import { useEffect, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cities } from "@/lib/constants";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { createProperty } from "@/actions/properties";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { PropertyFormDataProps } from "@/lib/types";
import ImageUpload from "./ImageUpload";

const propertySchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().optional(),
  price: z.coerce.number().positive("Price must be a positive number"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(2, "State is required"),
  country: z.string().min(2, "Country is required"),
  zipCode: z.string().optional(),
  bedrooms: z.coerce.number().int().optional(),
  bathrooms: z.coerce.number().int().optional(),
  areaSqFt: z.string().optional(),
  propertyType: z.enum([
    "Apartment",
    "House",
    "Commercial",
    "Land",
    "Villa",
    "Argicultural Land",
    "Dry Land",
    "Plot",
  ]),
  brokerId: z.string().min(3, "Broker ID is required"),
});

export type PropertyFormData = z.infer<typeof propertySchema>;

export default function PropertyForm() {
  const [propertyType, setPropertyType] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();
  const router = useRouter()

  const { images } = useImageStore();
  const form = useForm<PropertyFormData>({
    resolver: zodResolver(propertySchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      price: 0,
      description: "",
      address: "",
      country: "India",
      state: "Karnataka",
      city: "",
      bedrooms: 0,
      bathrooms: 0,
      areaSqFt: "",
      propertyType: "Land",
      brokerId: "",
    },
  });

  const onSubmit = async (data: PropertyFormData) => {
    setIsLoading(true);
    const payload = { ...data, images };
    console.log("Submitting:", payload);

    try {
      const response = await createProperty(data, images);

      if (response.status === 200) {
        toast({
          variant: "default",
          description: "✅ Property created successfully",
        });
        router.push('/admin')
      } else {
        throw new Error("Failed to create property");
      }
    } catch (error) {
      console.error("Failed to create property");
      toast({
        variant: "default",
        description: "⚠️ Failed to create Property created",
      });
    }finally{
        setIsLoading(false)
    }
  };

  useEffect(() => {
    console.log("⚠️ Validation Errors:", form.formState.errors);
  }, [form.formState.errors]);
  return (
    <motion.div
      className="max-w-3xl mx-auto p-8 bg-primary-foreground shadow-lg rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        Create Property
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Image Upload */}
          <ImageUpload />

          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter property title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Price */}
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price (₹)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter price" {...field} 
                  onChange={(e)=>field.onChange(e.target.value ? Number(e.target.value) : 0)}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Address */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Country, State, City */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Country (Fixed to India) */}
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <Input
                    value="India"
                    disabled
                    className="cursor-not-allowed"
                  />
                </FormItem>
              )}
            />

            {/* State (Fixed to Karnataka) */}
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <Input
                    value="Karnataka"
                    disabled
                    className="cursor-not-allowed"
                  />
                </FormItem>
              )}
            />

            {/* City (Dropdown) */}
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-between"
                      >
                        {field.value ? field.value : "Search & Select City"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput placeholder="Search city..." />
                        <CommandList>
                          {cities.length > 0 ? (
                            cities.map((city) => (
                              <CommandItem
                                key={city.id}
                                onSelect={() => {
                                  field.onChange(city.name); // Set selected city name
                                  form.trigger("city"); // Trigger validation
                                }}
                              >
                                {city.name}
                              </CommandItem>
                            ))
                          ) : (
                            <CommandEmpty>No cities found</CommandEmpty>
                          )}
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Property Details */}
          {/* Property Type Dropdown */}
          <FormField
            control={form.control}
            name="propertyType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Property Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Property Type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Apartment">Apartment</SelectItem>
                    <SelectItem value="House">House</SelectItem>
                    <SelectItem value="Villa">Villa</SelectItem>
                    <SelectItem value="Argicultural Land">
                      Argicultural Land
                    </SelectItem>
                    <SelectItem value="Dry Land">Dry Land</SelectItem>
                    <SelectItem value="Plot">Plot</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FormField
              control={form.control}
              name="bedrooms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bedrooms</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Bedrooms" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bathrooms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bathrooms</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Bathrooms" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="areaSqFt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Area (sq ft)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter area" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
                        <FormField
              control={form.control}
              name="brokerId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Broker ID</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Broker Id" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description (Remaining Details)</FormLabel>
                <FormControl>
                  <Textarea placeholder="Describe the property..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit Property"}
          </Button>
        </form>
      </Form>
    </motion.div>
  );
}
