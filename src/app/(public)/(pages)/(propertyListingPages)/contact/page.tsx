"use client";
import type React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Get form data
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone =
      (form.elements.namedItem("phone") as HTMLInputElement)?.value ||
      "Not provided";
    const subject = (form.elements.namedItem("subject") as HTMLInputElement)
      .value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    // WhatsApp details
    const whatsappNumber = "918310666162";
    const whatsappMessage = `*Property Enquiry*%0A%0A👤 *Name:* ${name}%0A📧 *Email:* ${email}%0A📞 *Phone:* ${phone}%0A📌 *Subject:* ${subject}%0A📝 *Message:* ${message}`;

    // Construct WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Open WhatsApp chat in a new tab
    window.open(whatsappUrl, "_blank");

    // Optional: Reset the form after submission
    form.reset();
  };

  const handleWhatsApp = () => {
    // Replace with your actual WhatsApp business number
    const whatsappNumber = "918310666162";
    const message = "Hello! I'm interested in your properties.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="container mx-auto py-8 md:py-12 px-4 sm:px-6"
    >
      <motion.div variants={fadeIn} className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
          Contact Us
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
          Have questions about our properties or services? We're here to help
          you find your dream property.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
        {/* Contact Information */}
        <motion.div
          variants={fadeIn}
          className="space-y-6 md:space-y-8 order-2 md:order-1"
        >
          <h2 className="text-xl md:text-2xl font-semibold">Get in Touch</h2>

          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="space-y-4 md:space-y-6">
                <motion.div
                  className="flex items-start gap-3 md:gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="bg-primary/10 p-2 md:p-3 rounded-full flex-shrink-0">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm md:text-base">Phone</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      +91 8310666162
                    </p>
                    {/* <p className="text-xs md:text-sm text-muted-foreground">
                      +91 98765 43211
                    </p> */}
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 md:gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="bg-primary/10 p-2 md:p-3 rounded-full flex-shrink-0">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm md:text-base">Email</h3>
                    <p className="text-xs md:text-sm text-muted-foreground break-words">
                      propertyprocure@gmail.com
                    </p>
                    {/* <p className="text-xs md:text-sm text-muted-foreground">
                      support@propertyprocure.com
                    </p> */}
                  </div>
                </motion.div>

                {/* <motion.div
                  className="flex items-start gap-3 md:gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="bg-primary/10 p-2 md:p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm md:text-base">
                      Address
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      123 Property Street, Bangalore,
                      <br />
                      Karnataka, India - 560001
                    </p>
                  </div>
                </motion.div> */}

                {/* <motion.div
                  className="flex items-start gap-3 md:gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="bg-primary/10 p-2 md:p-3 rounded-full flex-shrink-0">
                    <Clock className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm md:text-base">
                      Business Hours
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Saturday - Sunday: 10:00 AM - 4:00 PM
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Sunday: Closed
                    </p>
                  </div>
                </motion.div> */}
              </div>
            </CardContent>
          </Card>

          {/* <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Connect With Us
            </h2>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary/10 p-2 md:p-3 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-4 w-4 md:h-5 md:w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary/10 p-2 md:p-3 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary/10 p-2 md:p-3 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-4 w-4 md:h-5 md:w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary/10 p-2 md:p-3 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
              </motion.button>
            </div>
          </div> */}
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={fadeIn} className="order-1 md:order-2">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-xs md:text-sm font-medium"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  required
                  className="text-sm"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs md:text-sm font-medium"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-xs md:text-sm font-medium">
                Phone Number
              </label>
              <Input
                id="phone"
                placeholder="+91 98765 43210"
                className="text-sm"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-xs md:text-sm font-medium"
              >
                Subject
              </label>
              <Input
                id="subject"
                placeholder="Property Inquiry"
                className="text-sm"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-xs md:text-sm font-medium"
              >
                Your Message
              </label>
              <Textarea
                id="message"
                placeholder="I'm interested in your properties in Bangalore..."
                rows={4}
                required
                className="text-sm"
              />
            </div>

            <Button type="submit" className="w-full">
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>

      {/* Map Section */}
      {/* <motion.div
        variants={fadeIn}
        className="mt-10 md:mt-16 max-w-5xl mx-auto"
      >
        <Separator className="my-6 md:my-8" />
        <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center">
          Find Us
        </h2>
        <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden border">
          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm md:text-base">
            <p>Google Maps Embed would go here</p>
          </div>
        </div>
      </motion.div> */}
      
    </motion.div>
  );
}
