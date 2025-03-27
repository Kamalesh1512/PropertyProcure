"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import ThemeSwitcher from "@/components/global/mode-toggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center">
            {/* {theme == "light" ? "/logo-light.png" : "/logo-dark.png"} */}
              <img
                src= '/logo-dark-green.png'
                alt="logo"
                className="w-[100px] h-[100px]"
              />
              <span className=" flex flex-col items-start font-bold text-xl md:text-xl sm:text-lg">
                <span>
                  {" "}
                  Property <span className="text-premium text">Procure</span>
                </span>

                <span className="text-sm text-muted-foreground">
                  procure your dream land with trust
                </span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex items-center gap-8"
            initial="hidden"
            animate="visible"
            variants={navVariants}
          >
            <motion.div variants={itemVariants}>
              <Link
                href="#features"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Features
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                href="#how-it-works"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                How It Works
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                href="/contact"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Contact us
              </Link>
            </motion.div>
            {/* <motion.div variants={itemVariants}>
              <Link href={"/sign-in"}>
                <Button variant="outline" className="mr-2">
                  Log in
                </Button>
              </Link>
            </motion.div> */}

            <motion.div variants={itemVariants}>
              <Link href={"/properties"}>
                <Button variant={"default"} className="bg-premium-gradient text-black">
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </motion.nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 py-4 bg-background/95 backdrop-blur-sm rounded-lg"
          >
            <div className="flex flex-col gap-4">
              <Link
                href="#features"
                className="px-4 py-2 text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="px-4 py-2 text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact us
              </Link>
              <div className="flex flex-col gap-2 px-4 pt-2">
                {/* <Link href={"/sign-in"}>
                  <Button variant="outline" className="w-full">
                    Log in
                  </Button>
                </Link> */}

                <Link href={"/properties"}>
                  <Button
                    variant={"default"}
                    className="w-full bg-premium-gradient text-black"
                  >
                    See Properties
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
