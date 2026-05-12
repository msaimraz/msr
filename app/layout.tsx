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
  metadataBase: new URL("https://msaimraza.vercel.app/"),
  title: {
    default: "Muhammad Saim Raza | Frontend Engineer | React & Next.js Specialist",
    template: "%s | Muhammad Saim Raza"
  },
  description: "Frontend Engineer with 3+ years of experience building scalable, production-ready web applications for startups and international clients using React, Next.js, and TypeScript.",
  keywords: ["Frontend Engineer", "React Developer", "Next.js Specialist", "TypeScript Developer", "SaaS UI Engineer", "Remote Developer"],
  authors: [{ name: "Muhammad Saim Raza" }],
  creator: "Muhammad Saim Raza",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://msaimraza.vercel.app/",
    title: "Muhammad Saim Raza | Frontend Engineer | React & Next.js Specialist",
    description: "Building scalable, high-performance web applications for international clients.",
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
  verification: {
    google: "x_zpNU3JGLgwKdPrGAnyaa7eXTPYxs7zjK-zcfJzddU",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhammad Saim Raza",
    "jobTitle": "Frontend Engineer",
    "url": "https://msaimraza.vercel.app/",
    "sameAs": [
      "https://github.com/msaimraz",
      "https://linkedin.com/in/m-saim-raza",
      "https://upwork.com/freelancers/msaimraz"
    ],
    "description": "Frontend Engineer specializing in React, Next.js, and TypeScript, building scalable web applications for startups and international clients.",
    "knowsAbout": ["React", "Next.js", "TypeScript", "Frontend Engineering", "SaaS Development"]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
