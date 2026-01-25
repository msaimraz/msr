import type { Metadata, Viewport } from "next";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { NoiseOverlay } from "@/components/ui/noise-overlay";
import { CustomCursor } from "@/components/ui/custom-cursor";
import ScrollToTop from "@/components/ui/scroll-to-top";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://msr.bydansam.com/"),
  title: {
    default: "Muhammad Saim Raza | Frontend Developer",
    template: "%s | Muhammad Saim Raza"
  },
  description: "Portfolio of Muhammad Saim Raza, a creative Frontend Developer specializing in React, Next.js, and motion-driven user experiences.",
  keywords: ["Frontend Developer", "React Developer", "Next.js", "UI Engineer", "Web Developer", "Pakistan"],
  authors: [{ name: "Muhammad Saim Raza" }],
  creator: "Muhammad Saim Raza",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://msr.bydansam.com/",
    title: "Muhammad Saim Raza | Frontend Developer",
    description: "Building production-ready web applications for international clients.",
    siteName: "Muhammad Saim Raza Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Saim Raza | Frontend Developer",
    description: "Building production-ready web applications for international clients.",
    creator: "@msaimraz"
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          "font-sans font-display bg-background text-foreground antialiased selection:bg-white/20 selection:text-white"
        )}
      >
        <SmoothScroll>
          <NoiseOverlay />
          <CustomCursor />
          <ScrollToTop />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
