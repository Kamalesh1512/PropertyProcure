"use client";
import { redirect, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import type { InferSelectModel } from "drizzle-orm";
import type { properties } from "@/db/schema";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Building,
  ArrowLeft,
  MessageCircle,
  Home,
  Ruler,
  Calendar,
  Droplets,
  Mountain,
  RouteIcon as Road,
  Landmark,
  Sprout,
  Tractor,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PropertyImagesDisplay from "@/app/(public)/(pages)/(propertyListingPages)/property/[propertyId]/_components/PropertyImagesDisplay";
import { formatPriceToString } from "@/lib/utils";
import AlertDialogBox from "@/components/global/alert-dialog";
import { useState } from "react";
import { deleteProject } from "@/actions/properties";

type PropertyType = InferSelectModel<typeof properties>;

interface PropertyPageProps {
  property: PropertyType[];
  imageUrls: string[];
  isAdmin: Promise<boolean> | boolean;
  whatsappNumber?: string;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const AdminPropertyPage = ({
  property,
  imageUrls,
  isAdmin,
  whatsappNumber = "918310666162",
}: PropertyPageProps) => {
  const { toast } = useToast();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  
  if (property?.length === 0 || !property) {
    toast({
      variant: "destructive",
      description: "⚠️ Oops! Failed to open property. Try again later...",
    });
    redirect("/properties");
  }

  const propertyData = property[0];



  const priceString = formatPriceToString(propertyData.price);

  const [brokerName, brokerLoc, brokerContact] =
    propertyData?.brokerId.split("-");

  const handleWhatsAppInquiry = () => {
    const message = `Hello! I'm interested in the property: "${
      propertyData?.title
    }" (₹${propertyData?.price.toLocaleString()}) located in ${
      propertyData?.city
    }. Can you provide more information?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  // Helper function to format large numbers with commas
  const formatNumber = (num: number | undefined) => {
    if (!num) return "N/A";
    return num.toLocaleString();
  };

  const handleDelete = async () => {
    setLoading(true);
    if (!propertyData.id) {
      setLoading(false);
      toast({
        variant: "destructive",
        description: "Error Project not found",
      });
    }
    try {
      const response = await deleteProject(propertyData.id);
      if (response.status !== 200) {
        toast({
          variant: "destructive",
          description: "Failed to delete project",
        });
      }
      setOpen(false);
      router.refresh();
      toast({
        variant: "default",
        description: "Project deleted sucessfully",
      });
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        description: "Failed to delete project",
      });
    }
  };

  const handleEdit = () => {
    if (!isAdmin) {
      redirect("/");
    }
    setEditDialogOpen(false);
    router.push(`/create-property/${propertyData.id}`);
  };


  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="max-w-4xl mx-auto py-8 px-4 sm:px-6"
    >
      {/* Back Button */}
      <motion.button
        variants={fadeIn}
        onClick={() => router.back()}
        className="flex items-center mb-6 text-muted-foreground hover:text-primary transition-colors group"
      >
        <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        <span>Back to properties</span>
      </motion.button>

      {/* /* Property Type Badge */}
      <motion.div
        variants={fadeIn}
        className="mb-4 flex flex-row items-center justify-between gap-3"
      >
        <div>
        <Badge
          variant="outline"
          className="text-sm font-semibold px-2 py-0.5 bg-premium-gradient text-black"
        >
          Property Code: #{propertyData?.id}
        </Badge>
        <Badge variant="outline" className="text-xs font-medium px-2 py-0.5">
          {propertyData?.propertyType}
        </Badge>
        </div>

        <div>
          {isAdmin ? (
            <>
              <AlertDialogBox
                description="Continue to edit your property details"
                className="bg-blue-500 text-white dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700"
                loading={loading}
                open={editDialogOpen}
                onClick={handleEdit}
                handleOpen={() => setEditDialogOpen(!editDialogOpen)}
              >
                <Button variant={"outline"} size={"sm"} className="mr-3">
                  Edit
                </Button>
              </AlertDialogBox>
              <AlertDialogBox
                description="This will delete your project and sent to trash."
                className="bg-red-500 text-white dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-700"
                loading={loading}
                open={open}
                onClick={handleDelete}
                handleOpen={() => setOpen(!open)}
              >
                <Button
                  size={"sm"}
                  className="bg-background/15 dark:hover:bg-background/90 bg-red-500 text-white hover:bg-red-600"
                  disabled={loading}
                >
                  Delete
                </Button>
              </AlertDialogBox>
            </>
          ) : (
            <></>
          )}
        </div>
      </motion.div>

      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <motion.div variants={fadeIn}>
          <h1 className="text-3xl font-bold text-primary">
            {propertyData?.title}
          </h1>
          <div className="flex items-center mt-2 text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            <p className="text-sm">
              {propertyData?.address}, {propertyData?.city},{" "}
              {propertyData?.state}, {propertyData?.country}
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn}
          className="flex justify-start md:justify-end items-center"
        >
          <div className="bg-primary/10 px-6 py-3 rounded-lg">
            <p className="text-sm text-muted-foreground">Price</p>
            <p className="text-3xl font-bold text-primary">₹{priceString}</p>
          </div>
        </motion.div>
      </div>

      {/* Image Gallery */}
      <motion.div
        variants={fadeIn}
        className="mb-8 overflow-hidden rounded-xl border shadow-sm"
      >
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
            <h2 className="text-xl font-semibold text-primary mb-2">
              Property is Refered by
            </h2>
            <p className="text-muted-foreground">
              {brokerName} from {brokerLoc} the Contact Number is :{" "}
              {brokerContact}
            </p>
          </div>
          {/* <Button size="lg" className="bg-premium-gradient text-black w-full md:w-auto" onClick={handleWhatsAppInquiry}>
            <MessageCircle className="mr-2 h-5 w-5" />
            I'm Interested
          </Button> */}
        </div>
      </motion.div>

      {/* Property Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Description */}
        <motion.div variants={fadeIn} className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">About this property</h2>
          <p className="text-muted-foreground leading-relaxed">
            {propertyData?.description}
          </p>
        </motion.div>

        {/* Right Column - Key Details */}
        <motion.div variants={fadeIn} className="bg-muted/30 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Property Details</h2>
          <p className="text-muted-foreground leading-relaxed">
            {" "}
            {propertyData?.propertyDetails}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AdminPropertyPage;
