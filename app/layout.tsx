import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://levbuilt-website.vercel.app"),
  title: "LevBuilt Constructions | Bathroom Remodeling in Lakewood, NJ",
  description:
    "Expert bathroom remodeling in Lakewood, NJ. From concept to completion, every detail matters. 5-star rated. Free consultations. Built with Heart.",
  keywords: [
    "bathroom remodeling",
    "Lakewood NJ",
    "bathroom renovation",
    "shower installation",
    "tile work",
    "bathroom design",
    "LevBuilt",
    "Ocean County",
  ],
  openGraph: {
    title: "LevBuilt Constructions | Bathrooms Built with Heart",
    description:
      "Expert bathroom remodeling in Lakewood, NJ. 5-star rated. Free consultations.",
    url: "https://levbuilt-website.vercel.app",
    siteName: "LevBuilt Constructions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "LevBuilt Constructions — Luxury Bathroom Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LevBuilt Constructions | Bathrooms Built with Heart",
    description:
      "Expert bathroom remodeling in Lakewood, NJ. 5-star rated. Free consultations.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "LevBuilt Constructions",
    description:
      "Expert bathroom remodeling in Lakewood, NJ. From concept to completion, every detail matters.",
    telephone: "(201) 691-8341",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 40.0979,
        longitude: -74.2177,
      },
      geoRadius: "30",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lakewood",
      addressRegion: "NJ",
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "12",
    },
    sameAs: ["https://www.instagram.com/levbuilt"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
    priceRange: "$$",
    image: "/images/hero.jpg",
  };

  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
