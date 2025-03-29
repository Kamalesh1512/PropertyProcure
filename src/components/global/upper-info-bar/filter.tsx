// 'use client'
// import React from "react";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { CircleAlertIcon, RotateCcwIcon, XCircle } from "lucide-react";
// import { cities } from "@/lib/constants";
// import { Button } from "@/components/ui/button";

// interface FilterProps {
//   filters: {
//     price: string;
//     city: string;
//     propertyType: string;
//   };
//   onFilterChange: (newFilters: any) => void;
// }

// export const FilterComponent: React.FC<FilterProps> = ({
//   filters,
//   onFilterChange,
// }) => {
//   const searchTerms = ["mys", "bangalore", "hunsur", "mandya"]; // Lowercase search terms
//   const availableCities = cities.filter((city) =>
//     searchTerms.some((term) => city.name.toLowerCase().startsWith(term))
//   );

//   // Function to reset all filters
//   const resetFilters = () => {
//     onFilterChange({ price: "", city: "", propertyType: "" });
//   };

//   return (
//     <div className="flex gap-4 items-center">
//       {/* Price Range Dropdown */}
//       <Select
//         value={filters.price}
//         onValueChange={(value) => onFilterChange({ price: value })}
//       >
//         <SelectTrigger className="w-40">
//           <SelectValue placeholder="Select Price" />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectItem value="0-1000000">Under ₹10L</SelectItem>
//           <SelectItem value="1000000-2000000">₹10L - ₹20L</SelectItem>
//           <SelectItem value="2000000-3000000">₹20L - ₹30L</SelectItem>
//           <SelectItem value="3000000-5000000">₹30L - ₹50L</SelectItem>
//           <SelectItem value="5000000-7500000">₹50L - ₹75L</SelectItem>
//           <SelectItem value="7500000-10000000">₹75L - ₹1 Crore</SelectItem>
//           <SelectItem value="10000000+">Above ₹1 Crore</SelectItem>
//         </SelectContent>
//       </Select>

//       {/* Location Input */}
//       <Select
//         value={filters.city}
//         onValueChange={(value) => onFilterChange({ city: value })}
//       >
//         <SelectTrigger className="w-40">
//           <SelectValue placeholder="Select City" />
//         </SelectTrigger>
//         <SelectContent>
//           {availableCities.map((city) => (
//             <SelectItem key={city.id} value={city.name}>
//               {city.name}
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>

//       {/* Property Type Dropdown */}
//       <Select
//         value={filters.propertyType}
//         onValueChange={(value) => onFilterChange({ propertyType: value })}
//       >
//         <SelectTrigger className="w-40">
//           <SelectValue placeholder="Property Type" />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectItem value="Apartment">Apartment</SelectItem>
//           <SelectItem value="Argicultural Land">Argicultural Land</SelectItem>
//           <SelectItem value="Dry Land">Dry Land</SelectItem>
//           <SelectItem value="House">House</SelectItem>
//           <SelectItem value="Plot">Plot</SelectItem>
//           <SelectItem value="Villa">Villa</SelectItem>
//         </SelectContent>
//       </Select>

//       {/* Reset Icon */}
//       <Button
//         variant={"destructive"}
//         onClick={resetFilters}
//         size={"sm"}
//         aria-label="Reset cards"
//       >
//         <RotateCcwIcon className="h-5 w-4" />
//         Reset All
//       </Button>
//     </div>
//   );
// };

"use client"
import type React from "react"
import { useState } from "react"
import { Filter, RotateCcw, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cities } from "@/lib/constants"
import { Badge } from "@/components/ui/badge"

interface FilterProps {
  filters: {
    price: string
    city: string
    propertyType: string
  }
  onFilterChange: (newFilters: any) => void
}

export const FilterPopup: React.FC<FilterProps> = ({ filters, onFilterChange }) => {
  const [open, setOpen] = useState(false)
  const [localFilters, setLocalFilters] = useState(filters)

  const searchTerms = ["mys", "bangalore", "coorg", "mandya" , 'ooty','wayanad']
  const availableCities = cities.filter((city) => searchTerms.some((term) => city.name.toLowerCase().startsWith(term)))
  // Function to reset all filters
  const resetFilters = () => {
    const resetValues = { price: "", city: "", propertyType: "" }
    setLocalFilters(resetValues)
    onFilterChange(resetValues)
  }

  // Apply filters and close dialog
  const applyFilters = () => {
    onFilterChange(localFilters)
    setOpen(false)
  }

  // Update local filters
  const updateLocalFilter = (key: string, value: string) => {
    setLocalFilters((prev) => ({ ...prev, [key]: value }))
  }

  // Count active filters
  const activeFilterCount = Object.values(filters).filter(Boolean).length

  return (
    <div className="relative">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="gap-2 relative">
            <Filter className="h-4 w-4" />
            <span className="hidden sm:inline">Filters</span>
            {activeFilterCount > 0 && (
              <Badge
                variant="secondary"
                className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center rounded-full"
              >
                {activeFilterCount}
              </Badge>
            )}
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex justify-between items-center">
              <span>Filter Properties</span>
              <Button variant="ghost" size="sm" onClick={resetFilters} className="h-8 px-2 text-xs gap-1">
                <RotateCcw className="h-3 w-3" />
                Reset All
              </Button>
            </DialogTitle>
          </DialogHeader>

          <motion.div
            className="space-y-6 py-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Price Range Dropdown */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Price Range</label>
              <Select value={localFilters.price} onValueChange={(value) => updateLocalFilter("price", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1000000">Under ₹10L</SelectItem>
                  <SelectItem value="1000000-2000000">₹10L - ₹20L</SelectItem>
                  <SelectItem value="2000000-3000000">₹20L - ₹30L</SelectItem>
                  <SelectItem value="3000000-5000000">₹30L - ₹50L</SelectItem>
                  <SelectItem value="5000000-7500000">₹50L - ₹75L</SelectItem>
                  <SelectItem value="7500000-10000000">₹75L - ₹1 Crore</SelectItem>
                  <SelectItem value="10000000+">Above ₹1 Crore</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Location Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium">City</label>
              <Select value={localFilters.city} onValueChange={(value) => updateLocalFilter("city", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  {availableCities.map((city) => (
                    <SelectItem key={city.id} value={city.name}>
                      {city.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Property Type Dropdown */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Property Type</label>
              <Select
                value={localFilters.propertyType}
                onValueChange={(value) => updateLocalFilter("propertyType", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  {/* <SelectItem value="Apartment">Apartment</SelectItem> */}
                  <SelectItem value="Argicultural Land">Argicultural Land</SelectItem>
                  <SelectItem value="Plantations">Plantations</SelectItem>
                  <SelectItem value="Residential Plots">Residential Plots</SelectItem>
                  <SelectItem value="Commercial">Commercial</SelectItem>
                  {/* <SelectItem value="Villa">Villa</SelectItem> */}
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          <div className="flex justify-end gap-2 mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={applyFilters}>Apply Filters</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Active Filters Display */}
      <AnimatePresence>
        {activeFilterCount > 0 && (
          <motion.div
            className="flex flex-wrap gap-2 mt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filters.price && (
              <FilterBadge
                label={
                  filters.price.includes("-")
                    ? `₹${Number.parseInt(filters.price.split("-")[0]) / 100000}L - ₹${Number.parseInt(filters.price.split("-")[1]) / 100000}L`
                    : `Above ₹1 Crore`
                }
                onRemove={() => onFilterChange({ price: "" })}
              />
            )}

            {filters.city && <FilterBadge label={filters.city} onRemove={() => onFilterChange({ city: "" })} />}

            {filters.propertyType && (
              <FilterBadge label={filters.propertyType} onRemove={() => onFilterChange({ propertyType: "" })} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Helper component for filter badges
const FilterBadge = ({ label, onRemove }: { label: string; onRemove: () => void }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center gap-1"
  >
    {label}
    <button onClick={onRemove} className="ml-1 text-muted-foreground hover:text-foreground">
      <X className="h-3 w-3" />
    </button>
  </motion.div>
)

