import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/data/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle =
  "Melvin Berkoh | Software Engineer Portfolio";

const siteDescription =
  "Portfolio of Melvin Berkoh, an NJIT Computer Science graduate building full-stack products, frontend systems, data tools, and AI-assisted software.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteTitle,
    template: "%s | Melvin Berkoh",
  },

  description: siteDescription,

  alternates: {
    canonical: "/",
  },

  keywords: [
    "Melvin Berkoh",
    "Software Engineer",
    "Frontend Developer",
    "Full-Stack Developer",
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Python",
    "SQL",
    "PostgreSQL",
    "Prisma",
    "Data Analytics",
    "AI Tooling",
    "NJIT",
    "Computer Science",
    "Portfolio",
  ],

  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.name,

  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteConfig.url,
    type: "website",
    locale: "en_US",
    siteName: "Melvin Berkoh Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}