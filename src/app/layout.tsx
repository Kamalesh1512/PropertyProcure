import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/provider/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'


export const metadata: Metadata = {
  title: "PropertyProcure",
  description: "Where lands meet opportunity",
  icons: {
   icon: [
      {
        url: "/logo.png",
        type: "image/png",
        sizes: "128x128",
      },
    ]
  }
  
};
const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("bg-transparent", outfit.className)}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        <Toaster/>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
