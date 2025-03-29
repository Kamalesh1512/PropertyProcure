"use client";
import { useForm, useWatch } from "react-hook-form";
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
  FormDescription,
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
import { createProperty, editProperty } from "@/actions/properties";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import ImageUpload from "./ImageUpload";
import { InferSelectModel } from "drizzle-orm";
import { properties } from "@/db/schema";

// Enhanced property schema with conditional fields
const propertySchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().optional(),
  price: z.coerce.number().positive("Price must be a positive number"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(2, "State is required"),
  country: z.string().min(2, "Country is required"),
  zipCode: z.string().optional(),
  areaSqFt: z.string().min(1, "Area is required"),
  propertyType: z.enum([
    "Argicultural Land",
    "Plantations",
    "Residential Plots",
    "Commercial",
  ]),
  brokerId: z.string().min(3, "Broker ID is required"),
  propertyDetails: z.string().min(3, "Property details is required"),
});

export type PropertyFormData = z.infer<typeof propertySchema>;

type PropertyType = InferSelectModel<typeof properties>;

interface EditPropertyFormProps {
  property: PropertyType[];
  Images: string[];
}

export default function EditPropertyForm({
  property,
  Images,
}: EditPropertyFormProps) {
  const { toast } = useToast();
  const router = useRouter();
  const { images, addImage, clearImages } = useImageStore();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const searchTerms = ["mys", "bangalore", "coorg", "mandya",'ooty','wayanad'];
  const availableCities = cities.filter((city) =>
    searchTerms.some((term) => city.name.toLowerCase().startsWith(term))
  );

  //   console.log("images availale",Images)

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
      zipCode: "",
      areaSqFt: "",
      propertyType: "Argicultural Land",
      brokerId: "",
      propertyDetails: "",
    },
  });

  const fetchPropertyData = async (data: PropertyType[]) => {
    try {
      const property = data[0];
      if (property) {
        form.reset({
          title: property.title,
          price: property.price,
          description: property.description || "",
          address: property.address,
          country: property.country || "India",
          state: property.state || "Karnataka",
          city: property.city || "",
          zipCode: property.zipCode || "",
          areaSqFt: property.areaSqFt || "",
          propertyType:
            property.propertyType as PropertyFormData["propertyType"],
          brokerId: property.brokerId,
          propertyDetails: property.propertyDetails || "",
        });
      }
    } catch (error) {
      console.log("Error Fecthing the property", error);
      toast({
        variant: "destructive",
        description: "⚠️ Failed to fetch property details",
      });
    }
  };

  useEffect(() => {
    if (property[0]?.id) {
      fetchPropertyData(property);
    }
    if (images.length === 0) {
      Images.forEach((image) => addImage(image));
    }

    return () => {
      clearImages();
    };
  }, [property[0]?.id]);

  const onSubmit = async (data: PropertyFormData) => {
    setIsLoading(true);
    const payload = { ...data, images };
    console.log("Submitting:", payload);

    try {
      const response = await editProperty(property[0]?.id, data, images);

      if (response.status === 200) {
        toast({
          variant: "default",
          description: "✅ Property updated successfully",
        });
        router.push("/admin");
      } else {
        throw new Error("Failed to update property");
      }
    } catch (error) {
      console.error("Failed to update property");
      toast({
        variant: "default",
        description: "⚠️ Failed to update Property",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("⚠️ Validation Errors:", form.formState.errors);
  }, [form.formState.errors]);

  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 md:p-8 bg-primary-foreground shadow-lg rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        Create Property
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Image Upload */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Property Images</h3>
              <ImageUpload />
            </CardContent>
          </Card>

          {/* Basic Information */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
              <div className="space-y-6">
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
                        <Input
                          type="number"
                          placeholder="Enter price"
                          {...field}
                          onChange={(e) =>
                            field.onChange(
                              e.target.value ? Number(e.target.value) : 0
                            )
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                          {/* <SelectItem value="Apartment">Apartment</SelectItem> */}
                          <SelectItem value="Argicultural Land">
                            Argicultural Land
                          </SelectItem>
                          <SelectItem value="Plantations">
                            Plantations
                          </SelectItem>
                          <SelectItem value="Residential Plots">
                            Residential Plots
                          </SelectItem>
                          <SelectItem value="Commercial">Commercial</SelectItem>
                          {/* <SelectItem value="Villa">Villa</SelectItem> */}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Area */}
                <FormField
                  control={form.control}
                  name="areaSqFt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Area (sq ft)</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter area" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* Location Information */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Location</h3>
              <div className="space-y-6">
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
                        <Popover open={open} onOpenChange={setOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-between"
                            >
                              {field.value
                                ? field.value
                                : "Search & Select City"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-full p-0">
                            <Command>
                              <CommandInput placeholder="Search city..." />
                              <CommandList>
                                {availableCities.length > 0 ? (
                                  availableCities.map((city) => (
                                    <CommandItem
                                      key={city.id}
                                      onSelect={() => {
                                        field.onChange(city.name);
                                        form.trigger("city");
                                        setOpen(false);
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

                {/* Zip Code */}
                <FormField
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Zip Code</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter zip code" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* Property Details - Conditional based on property type */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Property Details</h3>
              <FormField
                control={form.control}
                name="propertyDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specific details about property</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter the property details..."
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Broker Information */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Broker Information</h3>
              <FormField
                control={form.control}
                name="brokerId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Broker ID</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Broker ID" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Description */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">
                Additional Information
              </h3>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter the additional details..."
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Update Property"}
          </Button>
        </form>
      </Form>
    </motion.div>
  );
}
