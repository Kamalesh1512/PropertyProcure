"use client";
import { motion } from "framer-motion";
import { Upload, Search, Phone, CheckCircle, TimerIcon } from "lucide-react";
import Image from "next/image";

export default function HowItWorks() {
  const stepsForAgents = [
    {
      icon: <Upload className="h-8 w-8" />,
      title: "Upload Property",
      description:
        "Register and upload your property details including high-quality images and specifications.",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Get Verified",
      description:
        "Our team verifies your listing to ensure accuracy and quality standards.",
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Connect with Buyers",
      description:
        "Receive inquiries from interested buyers and schedule viewings.",
    },
  ];

  const stepsForBuyers = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Search Properties",
      description:
        "Browse through our extensive collection of verified properties.",
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Contact Us",
      description:
        "Contact us, and we’ll help you find the perfect Property that meets your requirements",
    },
    {
      icon: <TimerIcon className="h-8 w-8" />,
      title: "Schedule a Visit",
      description:
        "Talk to us and schedule a property visit at your convenience to move forward if you find it suitable.",
    },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section
      className="w-full py-12 md:py-24"
      id="how-it-works"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
              Simple Process
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              How It Works
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform connects property owners/Agents with potential buyers
              through a simple, streamlined process.
            </p>
          </div>
        </motion.div>
          {/* For Buyers */}
            <div className="space-y-6">
              <motion.div
                className="mx-auto grid max-w-5xl items-center gap-6 md:grid-cols-2 lg:grid-cols-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {stepsForBuyers.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center space-y-2 rounded-2xl p-6 shadow-sm transition-all hover:shadow-md bg-muted"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="text-primary">{feature.icon}</div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-center text-muted-foreground">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

      </div>
    </section>
  );
}

