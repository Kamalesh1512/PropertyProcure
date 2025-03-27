// "use client";
// import { useForm,useWatch } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";

// import { motion } from "framer-motion";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { useImageStore } from "@/store/imageStore";
// import { useEffect, useState } from "react";
// import {
//   Command,
//   CommandEmpty,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import { cities } from "@/lib/constants";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { createProperty } from "@/actions/properties";
// import { useToast } from "@/hooks/use-toast";
// import { useRouter } from "next/navigation";
// import { PropertyFormDataProps } from "@/lib/types";
// import ImageUpload from "./ImageUpload";

// const propertySchema = z.object({
//   title: z.string().min(3, "Title must be at least 3 characters"),
//   description: z.string().optional(),
//   price: z.coerce.number().positive("Price must be a positive number"),
//   address: z.string().min(5, "Address is required"),
//   city: z.string().min(1, "City is required"),
//   state: z.string().min(2, "State is required"),
//   country: z.string().min(2, "Country is required"),
//   zipCode: z.string().optional(),
//   bedrooms: z.coerce.number().int().optional(),
//   bathrooms: z.coerce.number().int().optional(),
//   areaSqFt: z.string().optional(),
//   propertyType: z.enum([
//     "Apartment",
//     "House",
//     "Commercial",
//     "Land",
//     "Villa",
//     "Argicultural Land",
//     "Dry Land",
//     "Plot",
//   ]),
//   brokerId: z.string().min(3, "Broker ID is required"),
// });

// export type PropertyFormData = z.infer<typeof propertySchema>;

// export default function PropertyForm() {
//   const [propertyType, setPropertyType] = useState<string>("");
//   const [isLoading, setIsLoading] = useState(false);

//   const { toast } = useToast();
//   const router = useRouter();

//   const { images } = useImageStore();
//   const form = useForm<PropertyFormData>({
//     resolver: zodResolver(propertySchema),
//     mode: "onChange",
//     defaultValues: {
//       title: "",
//       price: 0,
//       description: "",
//       address: "",
//       country: "India",
//       state: "Karnataka",
//       city: "",
//       bedrooms: 0,
//       bathrooms: 0,
//       areaSqFt: "",
//       propertyType: "Land",
//       brokerId: "",
//     },
//   });

//   const onSubmit = async (data: PropertyFormData) => {
//     setIsLoading(true);
//     const payload = { ...data, images };
//     console.log("Submitting:", payload);

//     try {
//       const response = await createProperty(data, images);

//       if (response.status === 200) {
//         toast({
//           variant: "default",
//           description: "✅ Property created successfully",
//         });
//         router.push("/admin");
//       } else {
//         throw new Error("Failed to create property");
//       }
//     } catch (error) {
//       console.error("Failed to create property");
//       toast({
//         variant: "default",
//         description: "⚠️ Failed to create Property created",
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     console.log("⚠️ Validation Errors:", form.formState.errors);
//   }, [form.formState.errors]);
//   return (
//     <motion.div
//       className="max-w-3xl mx-auto p-8 bg-primary-foreground shadow-lg rounded-lg"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2 className="text-3xl font-bold mb-6 text-center text-primary">
//         Create Property
//       </h2>

//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//           {/* Image Upload */}
//           <ImageUpload />

//           {/* Title */}
//           <FormField
//             control={form.control}
//             name="title"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Title</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Enter property title" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Price */}
//           <FormField
//             control={form.control}
//             name="price"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Price (₹)</FormLabel>
//                 <FormControl>
//                   <Input
//                     type="number"
//                     placeholder="Enter price"
//                     {...field}
//                     onChange={(e) =>
//                       field.onChange(
//                         e.target.value ? Number(e.target.value) : 0
//                       )
//                     }
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Address */}
//           <FormField
//             control={form.control}
//             name="address"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Address</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Enter address" {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Country, State, City */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* Country (Fixed to India) */}
//             <FormField
//               control={form.control}
//               name="country"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Country</FormLabel>
//                   <Input
//                     value="India"
//                     disabled
//                     className="cursor-not-allowed"
//                   />
//                 </FormItem>
//               )}
//             />

//             {/* State (Fixed to Karnataka) */}
//             <FormField
//               control={form.control}
//               name="state"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>State</FormLabel>
//                   <Input
//                     value="Karnataka"
//                     disabled
//                     className="cursor-not-allowed"
//                   />
//                 </FormItem>
//               )}
//             />

//             {/* City (Dropdown) */}
//             <FormField
//               control={form.control}
//               name="city"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>City</FormLabel>
//                   <Popover>
//                     <PopoverTrigger asChild>
//                       <Button
//                         variant="outline"
//                         className="w-full justify-between"
//                       >
//                         {field.value ? field.value : "Search & Select City"}
//                       </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-full p-0">
//                       <Command>
//                         <CommandInput placeholder="Search city..." />
//                         <CommandList>
//                           {cities.length > 0 ? (
//                             cities.map((city) => (
//                               <CommandItem
//                                 key={city.id}
//                                 onSelect={() => {
//                                   field.onChange(city.name); // Set selected city name
//                                   form.trigger("city"); // Trigger validation
//                                 }}
//                               >
//                                 {city.name}
//                               </CommandItem>
//                             ))
//                           ) : (
//                             <CommandEmpty>No cities found</CommandEmpty>
//                           )}
//                         </CommandList>
//                       </Command>
//                     </PopoverContent>
//                   </Popover>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>

//           {/* Property Details */}
//           {/* Property Type Dropdown */}
//           <FormField
//             control={form.control}
//             name="propertyType"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Property Type</FormLabel>
//                 <Select
//                   onValueChange={field.onChange}
//                   defaultValue={field.value}
//                 >
//                   <FormControl>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select Property Type" />
//                     </SelectTrigger>
//                   </FormControl>
//                   <SelectContent>
//                     <SelectItem value="Apartment">Apartment</SelectItem>
//                     <SelectItem value="Argicultural Land">
//                       Argicultural Land
//                     </SelectItem>
//                     <SelectItem value="Dry Land">Dry Land</SelectItem>
//                     <SelectItem value="House">House</SelectItem>
//                     <SelectItem value="Plot">Plot</SelectItem>
//                     <SelectItem value="Villa">Villa</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <FormField
//               control={form.control}
//               name="bedrooms"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Bedrooms</FormLabel>
//                   <FormControl>
//                     <Input type="number" placeholder="Bedrooms" {...field} />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="bathrooms"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Bathrooms</FormLabel>
//                   <FormControl>
//                     <Input type="number" placeholder="Bathrooms" {...field} />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="areaSqFt"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Area (sq ft)</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Enter area" {...field} />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="brokerId"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Broker ID</FormLabel>
//                   <FormControl>
//                     <Input placeholder="Enter Broker Id" {...field} />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />
//           </div>
//           {/* Description */}
//           <FormField
//             control={form.control}
//             name="description"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Description (Remaining Details)</FormLabel>
//                 <FormControl>
//                   <Textarea placeholder="Describe the property..." {...field} />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <Button type="submit" className="w-full" disabled={isLoading}>
//             {isLoading ? "Submitting..." : "Submit Property"}
//           </Button>
//         </form>
//       </Form>
//     </motion.div>
//   );
// }

"use client"
import { useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { motion } from "framer-motion"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useImageStore } from "@/store/imageStore"
import { useEffect, useState } from "react"
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { cities } from "@/lib/constants"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { createProperty } from "@/actions/properties"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import ImageUpload from "./ImageUpload"

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
  propertyType: z.enum(["Apartment", "House", "Villa", "Argicultural Land", "Dry Land", "Plot"]),
  brokerId: z.string().min(3, "Broker ID is required"),

  // Residential specific fields (conditional)
  bedrooms: z.coerce.number().int().optional(),
  bathrooms: z.coerce.number().int().optional(),
  furnishingStatus: z.enum(["Unfurnished", "Semi-furnished", "Fully-furnished"]).optional(),
  constructionYear: z.string().optional(),
  totalFloors: z.coerce.number().int().optional(),
  floorNumber: z.coerce.number().int().optional(),
  hasLift: z.boolean().optional(),
  hasPowerBackup: z.boolean().optional(),
  hasParking: z.boolean().optional(),
  hasBalcony: z.boolean().optional(),

  // Agricultural specific fields (conditional)
  soilType: z.enum(["Red Soil", "Black Soil", "Sandy Soil", "Loamy Soil", "Clay Soil", "Other"]).optional(),
  irrigationSource: z.enum(["Borewell", "Canal", "River", "Rain-fed", "None", "Other"]).optional(),
  cropSuitability: z.string().optional(),
  hasFencing: z.boolean().optional(),
  waterSource: z.enum(["Borewell", "Well", "Canal", "River", "None", "Other"]).optional(),
  waterQuality: z.enum(["Excellent", "Good", "Average", "Poor"]).optional(),
  cultivationStatus: z.enum(["Currently Cultivated", "Ready for Cultivation", "Fallow", "Other"]).optional(),

  // Plot specific fields (conditional)
  plotShape: z.enum(["Rectangular", "Square", "Irregular", "Other"]).optional(),
  isCornerPlot: z.boolean().optional(),
  facing: z.enum(["North", "South", "East", "West", "North-East", "North-West", "South-East", "South-West"]).optional(),
  hasBoundary: z.boolean().optional(),
  roadWidth: z.string().optional(),
  distanceFromHighway: z.string().optional(),
  hasPublicTransport: z.boolean().optional(),
  nearbyLandmarks: z.string().optional(),
  dimensions: z.string().optional(),
  approvalStatus: z.string().optional(),
})

export type PropertyFormData = z.infer<typeof propertySchema>

export default function PropertyForm() {
  const { toast } = useToast()
  const router = useRouter()
  const { images } = useImageStore()
  const [isLoading, setIsLoading] = useState(false)
  const [open,setOpen] =useState(false);

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
      zipCode:undefined,
      areaSqFt: "",
      propertyType: "House",
      brokerId: "",
      hasLift: false,
      hasPowerBackup: false,
      hasParking: false,
      hasBalcony: false,
      hasFencing: false,
      isCornerPlot: false,
      hasBoundary: false,
      hasPublicTransport: false,
    },
  })

  // Watch property type to conditionally render fields
  const propertyType = useWatch({
    control: form.control,
    name: "propertyType",
  })

    const searchTerms = ["mys", "bangalore", "hunsur", "mandya"]
    const availableCities = cities.filter((city) => searchTerms.some((term) => city.name.toLowerCase().startsWith(term)))
  

  // Determine property category
  const isResidential = ["House", "Villa", "Apartment"].includes(propertyType || "")
  const isAgricultural = ["Argicultural Land", "Dry Land"].includes(propertyType || "")
  const isPlot = propertyType === "Plot"

  const onSubmit = async (data: PropertyFormData) => {
    setIsLoading(true)
    const payload = { ...data, images }
    console.log("Submitting:", payload)

    try {
      const response = await createProperty(data, images)

      if (response.status === 200) {
        toast({
          variant: "default",
          description: "✅ Property created successfully",
        })
        router.push("/admin")
      } else {
        throw new Error("Failed to create property")
      }
    } catch (error) {
      console.error("Failed to create property")
      toast({
        variant: "default",
        description: "⚠️ Failed to create Property",
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    console.log("⚠️ Validation Errors:", form.formState.errors)
  }, [form.formState.errors])

  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 md:p-8 bg-primary-foreground shadow-lg rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">Create Property</h2>

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
                          onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : 0)}
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
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Property Type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Apartment">Apartment</SelectItem>
                          <SelectItem value="Argicultural Land">Argicultural Land</SelectItem>
                          <SelectItem value="Dry Land">Dry Land</SelectItem>
                          <SelectItem value="House">House</SelectItem>
                          <SelectItem value="Plot">Plot</SelectItem>
                          <SelectItem value="Villa">Villa</SelectItem>
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
                        <Input value="India" disabled className="cursor-not-allowed" />
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
                        <Input value="Karnataka" disabled className="cursor-not-allowed" />
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
                        <Popover open = {open} onOpenChange={setOpen}>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-between">
                              {field.value ? field.value : "Search & Select City"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-full p-0" >
                            <Command>
                              <CommandInput placeholder="Search city..." />
                              <CommandList>
                                {availableCities.length > 0 ? (
                                  availableCities.map((city) => (
                                    <CommandItem
                                      key={city.id}
                                      onSelect={() => {
                                        field.onChange(city.name)
                                        form.trigger("city")
                                        setOpen(false)
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

              {/* Residential Property Fields */}
              {isResidential && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Bedrooms */}
                    <FormField
                      control={form.control}
                      name="bedrooms"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bedrooms</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Number of bedrooms"
                              {...field}
                              onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : 0)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Bathrooms */}
                    <FormField
                      control={form.control}
                      name="bathrooms"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bathrooms</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Number of bathrooms"
                              {...field}
                              onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : 0)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Furnishing Status */}
                    <FormField
                      control={form.control}
                      name="furnishingStatus"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Furnishing Status</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select furnishing status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Unfurnished">Unfurnished</SelectItem>
                              <SelectItem value="Semi-furnished">Semi-furnished</SelectItem>
                              <SelectItem value="Fully-furnished">Fully-furnished</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Construction Year */}
                    <FormField
                      control={form.control}
                      name="constructionYear"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Construction Year</FormLabel>
                          <FormControl>
                            <Input placeholder="Year of construction" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Total Floors */}
                    <FormField
                      control={form.control}
                      name="totalFloors"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Total Floors</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Total floors in building"
                              {...field}
                              onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : 0)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Floor Number */}
                    <FormField
                      control={form.control}
                      name="floorNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Floor Number</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Property on which floor"
                              {...field}
                              onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : 0)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      {/* Has Lift */}
                      <FormField
                        control={form.control}
                        name="hasLift"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Lift Available</FormLabel>
                              <FormDescription>Does the building have a lift?</FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />

                      {/* Has Power Backup */}
                      <FormField
                        control={form.control}
                        name="hasPowerBackup"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Power Backup</FormLabel>
                              <FormDescription>Is power backup available?</FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="space-y-4">
                      {/* Has Parking */}
                      <FormField
                        control={form.control}
                        name="hasParking"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Parking Available</FormLabel>
                              <FormDescription>Is parking space available?</FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />

                      {/* Has Balcony */}
                      <FormField
                        control={form.control}
                        name="hasBalcony"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Balcony</FormLabel>
                              <FormDescription>Does the property have a balcony?</FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Agricultural Land Fields */}
              {isAgricultural && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Soil Type */}
                    <FormField
                      control={form.control}
                      name="soilType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Soil Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select soil type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Red Soil">Red Soil</SelectItem>
                              <SelectItem value="Black Soil">Black Soil</SelectItem>
                              <SelectItem value="Sandy Soil">Sandy Soil</SelectItem>
                              <SelectItem value="Loamy Soil">Loamy Soil</SelectItem>
                              <SelectItem value="Clay Soil">Clay Soil</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Irrigation Source */}
                    <FormField
                      control={form.control}
                      name="irrigationSource"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Irrigation Source</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select irrigation source" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Borewell">Borewell</SelectItem>
                              <SelectItem value="Canal">Canal</SelectItem>
                              <SelectItem value="River">River</SelectItem>
                              <SelectItem value="Rain-fed">Rain-fed</SelectItem>
                              <SelectItem value="None">None</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Crop Suitability */}
                    <FormField
                      control={form.control}
                      name="cropSuitability"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Crop Suitability</FormLabel>
                          <FormControl>
                            <Input placeholder="Suitable crops (e.g., Rice, Wheat)" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Water Source */}
                    <FormField
                      control={form.control}
                      name="waterSource"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Water Source</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select water source" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Borewell">Borewell</SelectItem>
                              <SelectItem value="Well">Well</SelectItem>
                              <SelectItem value="Canal">Canal</SelectItem>
                              <SelectItem value="River">River</SelectItem>
                              <SelectItem value="None">None</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Water Quality */}
                    <FormField
                      control={form.control}
                      name="waterQuality"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Water Quality</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select water quality" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Excellent">Excellent</SelectItem>
                              <SelectItem value="Good">Good</SelectItem>
                              <SelectItem value="Average">Average</SelectItem>
                              <SelectItem value="Poor">Poor</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Cultivation Status */}
                    <FormField
                      control={form.control}
                      name="cultivationStatus"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cultivation Status</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select cultivation status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Currently Cultivated">Currently Cultivated</SelectItem>
                              <SelectItem value="Ready for Cultivation">Ready for Cultivation</SelectItem>
                              <SelectItem value="Fallow">Fallow</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Has Fencing */}
                  <FormField
                    control={form.control}
                    name="hasFencing"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Fencing</FormLabel>
                          <FormDescription>Does the land have fencing?</FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Plot Fields */}
              {isPlot && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Plot Shape */}
                    <FormField
                      control={form.control}
                      name="plotShape"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Plot Shape</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select plot shape" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Rectangular">Rectangular</SelectItem>
                              <SelectItem value="Square">Square</SelectItem>
                              <SelectItem value="Irregular">Irregular</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Facing */}
                    <FormField
                      control={form.control}
                      name="facing"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Facing</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select facing direction" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="North">North</SelectItem>
                              <SelectItem value="South">South</SelectItem>
                              <SelectItem value="East">East</SelectItem>
                              <SelectItem value="West">West</SelectItem>
                              <SelectItem value="North-East">North-East</SelectItem>
                              <SelectItem value="North-West">North-West</SelectItem>
                              <SelectItem value="South-East">South-East</SelectItem>
                              <SelectItem value="South-West">South-West</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Dimensions */}
                    <FormField
                      control={form.control}
                      name="dimensions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Dimensions</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 40 × 60 ft" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Approval Status */}
                    <FormField
                      control={form.control}
                      name="approvalStatus"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Approval Status</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., BBMP Approved" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Road Width */}
                    <FormField
                      control={form.control}
                      name="roadWidth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Road Width</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 30 feet" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Distance from Highway */}
                    <FormField
                      control={form.control}
                      name="distanceFromHighway"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Distance from Highway</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 2 km" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Nearby Landmarks */}
                    <FormField
                      control={form.control}
                      name="nearbyLandmarks"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nearby Landmarks</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., School, Hospital" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-4">
                      {/* Is Corner Plot */}
                      <FormField
                        control={form.control}
                        name="isCornerPlot"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Corner Plot</FormLabel>
                              <FormDescription>Is this a corner plot?</FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Has Boundary */}
                    <FormField
                      control={form.control}
                      name="hasBoundary"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Boundary Wall</FormLabel>
                            <FormDescription>Does the plot have a boundary wall?</FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />

                    {/* Has Public Transport */}
                    <FormField
                      control={form.control}
                      name="hasPublicTransport"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Public Transport</FormLabel>
                            <FormDescription>Is public transport available nearby?</FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}
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
              <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe the property in detail..." className="min-h-[150px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit Property"}
          </Button>
        </form>
      </Form>
    </motion.div>
  )
}




