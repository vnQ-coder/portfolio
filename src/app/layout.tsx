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
  title: "Your Name - Founder & CEO | Technology Solutions & Innovation",
  description: "Founder and CEO delivering exceptional technology solutions to startups and enterprises. 5+ years experience, 200+ projects completed. Specializing in web development, mobile apps, cloud solutions, and digital transformation.",
  keywords: ["technology", "web development", "mobile apps", "cloud solutions", "CEO", "founder", "startup", "enterprise", "digital transformation"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Company",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourname.com",
    title: "Your Name - Founder & CEO | Technology Solutions",
    description: "Founder and CEO delivering exceptional technology solutions to startups and enterprises.",
    siteName: "Your Name Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Founder & CEO | Technology Solutions",
    description: "Founder and CEO delivering exceptional technology solutions to startups and enterprises.",
    creator: "@yourname",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
