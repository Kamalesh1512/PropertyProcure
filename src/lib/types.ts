export interface PropertyFormDataProps {
    title: string,
    description:string,
    price: number;
    address: string;
    city: string;
    state: string;
    country: string;
    propertyType: "Apartment" | "House" | "Commercial" | "Land" | "Villa" | "Argicultural Land" | "Dry Land" | "Plot",
    brokerId:string,
    areaSqFt?: string | undefined;
    zipcode?:string,
    bedrooms?:number,
    bathrooms?:number,

}