import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sweetyjha.vercel.app"),
  title: {
    default: "Sweety Jha | Software Developer",
    template: "%s | Sweety Jha",
  },
  description:
    "Software developer with a backend and applied-ML focus. Building API-driven applications and automating workflows with machine learning.",
  keywords: [
    "Sweety Jha",
    "Software Developer",
    "Backend Developer",
    "Machine Learning",
    "Java",
    "Python",
    "Portfolio",
    "MCA",
    "SRM",
  ],
  authors: [{ name: "Sweety Jha", url: "https://github.com/SweetyJha-06" }],
  creator: "Sweety Jha",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sweetyjha.vercel.app",
    title: "Sweety Jha | Software Developer",
    description:
      "Software developer with a backend and applied-ML focus. Building API-driven applications and automating workflows with machine learning.",
    siteName: "Sweety Jha Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sweety Jha - Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sweety Jha | Software Developer",
    description:
      "Software developer with a backend and applied-ML focus.",
    images: ["/images/og-image.png"],
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
