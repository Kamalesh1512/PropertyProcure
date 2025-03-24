// "use client";
// import { redirect, useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { useToast } from "@/hooks/use-toast";
// import type { InferSelectModel } from "drizzle-orm";
// import type { properties } from "@/db/schema";
// import { MapPin, Bed, Bath, Square, Building, ArrowLeft } from "lucide-react";
// import PropertyImagesDisplay from "./PropertyImagesDisplay";

// type PropertyType = InferSelectModel<typeof properties>;

// interface PropertyPageProps {
//   property: PropertyType[];
//   imageUrls: string[];
// }

// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6 },
//   },
// };

// const stagger = {
//   visible: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const PropertyPage = ({ property, imageUrls }: PropertyPageProps) => {
//   const { toast } = useToast();

//   const router = useRouter()

//   if (property?.length === 0 || !property) {
//     toast({
//       variant: "destructive",
//       description: "⚠️ Oops! Failed to open property. Try again later...",
//     });
//     redirect("/properties");
//   }

//   const propertyData = property[0];

//   return (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       variants={stagger}
//       className="max-w-4xl mx-auto py-8 px-4 sm:px-6"
//     >
//       {/* Back Button */}
//       <motion.button
//         variants={fadeIn}
//         onClick={() => router.push('/properties')}
//         className="flex items-center mb-6 text-muted-foreground hover:text-primary transition-colors group"
//       >
//         <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
//         <span>Back to properties</span>
//       </motion.button>
//       {/* Header Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//         <motion.div variants={fadeIn}>
//           <h1 className="text-3xl font-bold text-primary">
//             {propertyData?.title}
//           </h1>
//           <div className="flex items-center mt-2 text-muted-foreground">
//             <MapPin className="h-4 w-4 mr-1" />
//             <p className="text-sm">
//               {propertyData?.address}, {propertyData?.city},{" "}
//               {propertyData?.state}, {propertyData?.country}
//             </p>
//           </div>
//         </motion.div>
//         <motion.div
//           variants={fadeIn}
//           className="flex justify-start md:justify-end items-center"
//         >
//           <div className="bg-primary/10 px-6 py-3 rounded-lg">
//             <p className="text-sm text-muted-foreground">Price</p>
//             <p className="text-3xl font-bold text-primary">
//               ₹{propertyData?.price.toLocaleString()}
//             </p>
//           </div>
//         </motion.div>
//       </div>

//       {/* Image Gallery */}
//       <motion.div
//         variants={fadeIn}
//         className="mb-8 overflow-hidden rounded-xl border shadow-sm"
//       >
//         <PropertyImagesDisplay images={imageUrls} />
//       </motion.div>

//       {/* Property Details */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Left Column - Description */}
//         <motion.div variants={fadeIn} className="md:col-span-2">
//           <h2 className="text-xl font-semibold mb-4">About this property</h2>
//           <p className="text-muted-foreground leading-relaxed">
//             {propertyData?.description}
//           </p>
//         </motion.div>

//         {/* Right Column - Key Details */}
//         <motion.div variants={fadeIn} className="bg-muted/30 p-6 rounded-xl">
//           <h2 className="text-xl font-semibold mb-4">Property Details</h2>

//           <div className="space-y-4">
//             <div className="flex items-center">
//               <div className="bg-primary/10 p-2 rounded-full mr-3">
//                 <Bed className="h-5 w-5 text-primary" />
//               </div>
//               <div>
//                 <p className="text-sm text-muted-foreground">Bedrooms</p>
//                 <p className="font-medium">{propertyData?.bedrooms}</p>
//               </div>
//             </div>

//             <div className="flex items-center">
//               <div className="bg-primary/10 p-2 rounded-full mr-3">
//                 <Bath className="h-5 w-5 text-primary" />
//               </div>
//               <div>
//                 <p className="text-sm text-muted-foreground">Bathrooms</p>
//                 <p className="font-medium">{propertyData?.bathrooms}</p>
//               </div>
//             </div>

//             <div className="flex items-center">
//               <div className="bg-primary/10 p-2 rounded-full mr-3">
//                 <Square className="h-5 w-5 text-primary" />
//               </div>
//               <div>
//                 <p className="text-sm text-muted-foreground">Area</p>
//                 <p className="font-medium">{propertyData?.areaSqFt} sq ft</p>
//               </div>
//             </div>

//             <div className="flex items-center">
//               <div className="bg-primary/10 p-2 rounded-full mr-3">
//                 <Building className="h-5 w-5 text-primary" />
//               </div>
//               <div>
//                 <p className="text-sm text-muted-foreground">Property Type</p>
//                 <p className="font-medium">{propertyData?.propertyType}</p>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default PropertyPage;
"use client"
import { redirect, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useToast } from "@/hooks/use-toast"
import type { InferSelectModel } from "drizzle-orm"
import type { properties } from "@/db/schema"
import { MapPin, Bed, Bath, Square, Building, ArrowLeft, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import PropertyImagesDisplay from "./PropertyImagesDisplay"

type PropertyType = InferSelectModel<typeof properties>

interface PropertyPageProps {
  property: PropertyType[]
  imageUrls: string[]
  whatsappNumber?: string // Business WhatsApp number
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const PropertyPage = ({
  property,
  imageUrls,
  whatsappNumber = "919876543210", // Default number - replace with your business number
}: PropertyPageProps) => {
  const { toast } = useToast()
  const router = useRouter()

  if (property?.length === 0 || !property) {
    toast({
      variant: "destructive",
      description: "⚠️ Oops! Failed to open property. Try again later...",
    })
    redirect("/properties")
  }

  const propertyData = property[0]

  const handleWhatsAppInquiry = () => {
    // Create a formatted message with property details
    const message = `Hello! I'm interested in the property: "${propertyData?.title}" (₹${propertyData?.price.toLocaleString()}) located in ${propertyData?.city}. Can you provide more information?`

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message)

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${918310666162}?text=${encodedMessage}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")

    // // Show success toast
    // toast({
    //   title: "Inquiry Sent",
    //   description: "Opening WhatsApp to connect you with the property agent.",
    // })
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      {/* Back Button */}
      <motion.button
        variants={fadeIn}
        onClick={() => router.back()}
        className="flex items-center mb-6 text-muted-foreground hover:text-primary transition-colors group"
      >
        <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        <span>Back to properties</span>
      </motion.button>

      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <motion.div variants={fadeIn}>
          <h1 className="text-3xl font-bold text-primary">{propertyData?.title}</h1>
          <div className="flex items-center mt-2 text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            <p className="text-sm">
              {propertyData?.address}, {propertyData?.city}, {propertyData?.state}, {propertyData?.country}
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeIn} className="flex justify-start md:justify-end items-center">
          <div className="bg-primary/10 px-6 py-3 rounded-lg">
            <p className="text-sm text-muted-foreground">Price</p>
            <p className="text-3xl font-bold text-primary">₹{propertyData?.price.toLocaleString()}</p>
          </div>
        </motion.div>
      </div>

      {/* Image Gallery */}
      <motion.div variants={fadeIn} className="mb-8 overflow-hidden rounded-xl border shadow-sm">
        <PropertyImagesDisplay images={imageUrls} />
      </motion.div>

      {/* I'm Interested Section */}
      <motion.div
        variants={fadeIn}
        className="mb-8 p-6 border border-primary/20 bg-primary/5 rounded-xl shadow-sm"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-primary mb-2">Interested in this property?</h2>
            <p className="text-muted-foreground">
              Connect directly with our agent via WhatsApp for more details or to schedule a viewing.
            </p>
          </div>
          <Button size="lg" className="w-full md:w-auto" onClick={handleWhatsAppInquiry}>
            <MessageCircle className="mr-2 h-5 w-5" />
            I'm Interested
          </Button>
        </div>
      </motion.div>

      {/* Property Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Description */}
        <motion.div variants={fadeIn} className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">About this property</h2>
          <p className="text-muted-foreground leading-relaxed">{propertyData?.description}</p>
        </motion.div>

        {/* Right Column - Key Details */}
        <motion.div variants={fadeIn} className="bg-muted/30 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Property Details</h2>

          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <Bed className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Bedrooms</p>
                <p className="font-medium">{propertyData?.bedrooms}</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <Bath className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Bathrooms</p>
                <p className="font-medium">{propertyData?.bathrooms}</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <Square className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Area</p>
                <p className="font-medium">{propertyData?.areaSqFt} sq ft</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <Building className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Property Type</p>
                <p className="font-medium">{propertyData?.propertyType}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default PropertyPage

