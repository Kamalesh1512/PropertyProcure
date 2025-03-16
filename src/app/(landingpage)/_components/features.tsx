"use client"

import { motion } from "framer-motion"
import { Home, Users, Search, Shield, Clock, BarChart, MapPin } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Home className="h-10 w-10" />,
      title: "Exclusive Listings",
      description:
        "Access properties not available on other platforms, giving you more options to find your perfect match.",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Curated Listings",
      description: "All properties are handpicked and listed by our team after verification with agents.",
    },
    {
      icon: <Search className="h-10 w-10" />,
      title: "Advanced Search",
      description: "Find exactly what you're looking for with our powerful search filters and tools.",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Secure Transactions",
      description: "Your information and transactions are protected with industry-leading security measures.",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Real-time Updates",
      description: "Get instant notifications about new properties that match your criteria.",
    },
    {
      icon: <MapPin className="h-10 w-10" />,
      title: "Diverse Properties",
      description: "Find a variety of properties, including farmland, residential, and commercial sites.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section className="w-full py-12 md:py-24" id="features">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Why Choose Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features that make us stand out</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform offers unique features designed to make property transactions seamless and efficient.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-2 rounded-2xl p-6 shadow-sm transition-all hover:shadow-md bg-muted"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-primary">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

