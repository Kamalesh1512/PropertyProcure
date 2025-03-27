"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Header from "./header";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full py-6 md:py-24 bg-muted rounded-2xl">
      <div className="container px-4 md:px-6">
        <Header />
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                Discover your ideal{" "}
                <span className="text-premium"> Property </span> for
                a secure future.
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-muted-foreground md:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                Discover verified property listings across Bangalore, Mandya, Mysore and
                Coorg. Connect with us, we'll help you find and own your dream
                property and with investment opportunities. Explore the
                exclusive listing of farmland, residential, or commercial
                property.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <Link href="/properties">
                <Button
                  variant={"default"}
                  className="bg-premium-gradient text-black font-bold"
                >
                  Browse Properties
                </Button>
              </Link>
              {/* <Link
                href="#contact"
              >
                <Button variant={"outline"} > List Your Property</Button>
                
              </Link> */}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
          >
            <Image
              src="/hero-preview.jpg?height=750&width=750"
              width={550}
              height={550}
              alt="Luxury real estate property"
              className="mx-auto h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
