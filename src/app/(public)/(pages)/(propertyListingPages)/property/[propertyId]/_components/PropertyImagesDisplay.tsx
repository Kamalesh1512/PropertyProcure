// "use client";

// import * as React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";

// interface PropertyImagesCarouselProps {
//   images: string[];
// }

// const PropertyImagesDisplay: React.FC<PropertyImagesCarouselProps> = ({
//   images,
// }) => {
//   return (
//       <Carousel className="w-full">
//         <CarouselContent>
//           {images.map((image, index) => (
//             <CarouselItem
//               key={index}
//             >
//               <div className="p-1">
//                 <Card>
//                   <CardContent className="flex aspect-square items-center justify-center p-6">
//                     <Image
//                       src={image}
//                       alt={`Property Image ${index + 1}`}
//                       className="rounded-lg object-cover"
//                     />

//                   </CardContent>
//                 </Card>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//   );
// };

// export default PropertyImagesDisplay;

"use client"
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface PropertyImagesDisplayProps {
  images: string[]
}

const PropertyImagesDisplay = ({ images }: PropertyImagesDisplayProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const handlePrevious = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const handleThumbnailClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-[400px] bg-muted flex items-center justify-center">
        <p>No images available</p>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="relative w-full h-[400px] overflow-hidden bg-black">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full h-full"
          >
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`Property image ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex overflow-x-auto gap-2 mt-4 pb-2 scrollbar-thin">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "relative flex-shrink-0 w-20 h-20 cursor-pointer rounded-md overflow-hidden border-2",
              currentIndex === index ? "border-primary" : "border-transparent",
            )}
            onClick={() => handleThumbnailClick(index)}
          >
            <Image src={image || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PropertyImagesDisplay

