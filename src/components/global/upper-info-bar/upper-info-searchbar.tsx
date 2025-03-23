// "use client"
// import { Search } from 'lucide-react'
// import qs from "query-string";
// import React, { ChangeEventHandler, useEffect, useState } from 'react'
// import { useRouter, useSearchParams } from 'next/navigation'
// import { Input } from '@/components/ui/input';
// import useDebounce from '@/hooks/use-debounce';

// const SearchBar = () => {

//     const router =useRouter();
//     const searchParams=useSearchParams();

//     const categoryId =searchParams.get("categoryId");
//     const name =searchParams.get('name')

//     const [value,setValue] =useState(name || '')
//     const debouncedValue = useDebounce<string>(value,300);

//     const onChange: ChangeEventHandler<HTMLInputElement> = (e)=>{
//         setValue(e.target.value)
//     }

//    useEffect(()=>{

//         const query ={
//             name:debouncedValue,
//         };
//         const url = qs.stringifyUrl({
//             url:window.location.href,
//             query,
//         },{skipEmptyString:true , skipNull:true});

//         router.push(url);
//     },[debouncedValue,router]);

//   return (
//     <div className='min-w-[60%] relative flex items-center border rounded-full bg-primary-foreground'>
//         <Search className='absolute h-4 w-4 top-3 left-4
//         text-muted-foreground'/>
//         <Input
//         onChange={onChange}
//         value={value}
//         placeholder='Search...'
//         className='flex-grow border-0 pl-10 focus:ring-0 focus:ring-offset-0'/>
//     </div>
//   )
// }

// export default SearchBar

"use client";
import { Search } from "lucide-react";
import qs from "query-string";
import React, { ChangeEventHandler, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import useDebounce from "@/hooks/use-debounce";
import { FilterComponent } from "./filter";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");
  const name = searchParams.get("name");
  const price = searchParams.get("price");
  const city = searchParams.get("city");
  const propertyType = searchParams.get("propertyType");

  const [value, setValue] = useState(name || "");
  const debouncedValue = useDebounce<string>(value, 300);

  const [filters, setFilters] = useState({
    price: price || "",
    city: city || "",
    propertyType: propertyType || "",
  });

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  useEffect(() => {
    const query = {
      name: debouncedValue,
      ...filters,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.origin + window.location.pathname,
        query,
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [debouncedValue, filters, router]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="min-w-fit relative flex items-center border rounded-full bg-primary-foreground">
        <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" />
        <Input
          onChange={onChange}
          value={value}
          placeholder="Search..."
          className="flex-grow border-0 pl-10 focus:ring-0 focus:ring-offset-0"
        />
      </div>
      {/* Filter Component */}
      <FilterComponent filters={filters} onFilterChange={handleFilterChange} />
    </div>
  );
};

export default SearchBar;
