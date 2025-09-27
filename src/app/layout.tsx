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
  title: "Your Name - Senior MERN Stack Developer | Full-Stack Solutions",
  description: "Senior MERN Stack Developer with 5+ years experience building scalable web applications. Expert in MongoDB, Express.js, React, Node.js, TypeScript, and modern web technologies.",
  keywords: ["MERN stack", "full-stack developer", "MongoDB", "Express.js", "React", "Node.js", "TypeScript", "JavaScript", "web development", "API development"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Name",
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
    title: "Your Name - Senior MERN Stack Developer",
    description: "Senior MERN Stack Developer specializing in full-stack web applications and modern development practices.",
    siteName: "Your Name Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Senior MERN Stack Developer",
    description: "Senior MERN Stack Developer specializing in full-stack web applications and modern development practices.",
    creator: "@yourname",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
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
