import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CircleAlertIcon, RotateCcwIcon, XCircle } from "lucide-react";
import { cities } from "@/lib/constants";
import { Button } from "@/components/ui/button";

interface FilterProps {
  filters: {
    price: string;
    city: string;
    propertyType: string;
  };
  onFilterChange: (newFilters: any) => void;
}

export const FilterComponent: React.FC<FilterProps> = ({
  filters,
  onFilterChange,
}) => {
  const searchTerms = ["mys", "bangalore", "hunsur", "mandya"]; // Lowercase search terms
  const availableCities = cities.filter((city) =>
    searchTerms.some((term) => city.name.toLowerCase().startsWith(term))
  );

  // Function to reset all filters
  const resetFilters = () => {
    onFilterChange({ price: "", city: "", propertyType: "" });
  };

  return (
    <div className="flex gap-4 items-center">
      {/* Price Range Dropdown */}
      <Select
        value={filters.price}
        onValueChange={(value) => onFilterChange({ price: value })}
      >
        <SelectTrigger className="w-40">
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

      {/* Location Input */}
      <Select
        value={filters.city}
        onValueChange={(value) => onFilterChange({ city: value })}
      >
        <SelectTrigger className="w-40">
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

      {/* Property Type Dropdown */}
      <Select
        value={filters.propertyType}
        onValueChange={(value) => onFilterChange({ propertyType: value })}
      >
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Property Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Apartment">Apartment</SelectItem>
          <SelectItem value="Argicultural Land">Argicultural Land</SelectItem>
          <SelectItem value="Dry Land">Dry Land</SelectItem>
          <SelectItem value="House">House</SelectItem>
          <SelectItem value="Plot">Plot</SelectItem>
          <SelectItem value="Villa">Villa</SelectItem>
        </SelectContent>
      </Select>

      {/* Reset Icon */}
      <Button
        variant={"destructive"}
        onClick={resetFilters}
        size={"sm"}
        aria-label="Reset cards"
      >
        <RotateCcwIcon className="h-5 w-4" />
        Reset All
      </Button>
    </div>
  );
};
