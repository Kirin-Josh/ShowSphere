// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/seo.config";

// Font configuration
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },

  // Basic SEO
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.creator,

  icons: {
    icon: "/sax-logo.jpg",
    shortcut: "/sax-logo.jpg",
    apple: "/sax-logo.jpg",
  },

  manifest: "/site.webmanifest",

  // Robots & Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Search Engine Verification (add after setting up)
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data (Schema.org) for Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteConfig.businessInfo),
          }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
