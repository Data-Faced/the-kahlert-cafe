import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://staging.thekahlertcafe.com"),
  title: {
    default: "The Kahlert Café | Inclusive Farm-to-Able Café in Sparks, MD",
    template: "%s | The Kahlert Café",
  },
  description:
    "Inclusive farm-to-able community café in Sparks, Maryland. Fresh, locally sourced food and specialty coffee while providing meaningful employment and culinary training for adults with intellectual and developmental disabilities.",
  keywords: [
    "Kahlert Cafe",
    "Kahlert Café Sparks MD",
    "inclusive cafe Maryland",
    "farm-to-able cafe",
    "cafe employing adults with disabilities",
    "specialty coffee Sparks MD",
    "community cafe Baltimore County",
    "Richcroft",
    "job training cafe Maryland",
    "Sparks Maryland cafe",
  ],
  authors: [{ name: "The Kahlert Café" }],
  creator: "Sandish Web Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "The Kahlert Café | Inclusive Farm-to-Able Café in Sparks, MD",
    description:
      "Inclusive farm-to-able community café in Sparks, Maryland. Fresh, locally sourced food and specialty coffee with purpose.",
    url: "https://staging.thekahlertcafe.com",
    siteName: "The Kahlert Café",
    images: [
      {
        url: "/tkc-web-preview.png",
        width: 1200,
        height: 630,
        alt: "The Kahlert Café – Inclusive Farm-to-Able Café in Sparks, MD",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Kahlert Café | Inclusive Farm-to-Able Café in Sparks, MD",
    description:
      "Inclusive farm-to-able community café in Sparks, Maryland providing employment and culinary training for adults with disabilities.",
    images: ["/tkc-web-preview.png"],
  },
  alternates: {
    canonical: "https://staging.thekahlertcafe.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
