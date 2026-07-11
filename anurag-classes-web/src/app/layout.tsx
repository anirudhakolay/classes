import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://anuragclasses.com'),
  title: {
    default: "Anurag Classes | Science, Commerce, NEET, JEE, MHT-CET in New Panvel & Kalamboli",
    template: "%s | Anurag Classes"
  },
  description: "Building Strong Foundations for Academic Success. Trusted coaching institute since 2015 for Classes VIII to XII, NEET, JEE, and MHT-CET in New Panvel and Kalamboli.",
  keywords: [
    "Anurag Classes", 
    "Coaching classes in New Panvel", 
    "Classes in Kalamboli", 
    "NEET preparation", 
    "JEE coaching", 
    "MHT-CET classes", 
    "Science classes XI XII",
    "Commerce classes XI XII",
    "CBSE ICSE coaching"
  ],
  openGraph: {
    title: "Anurag Classes | Science, Commerce, NEET, JEE, MHT-CET",
    description: "Building Strong Foundations for Academic Success. Trusted coaching institute since 2015 in New Panvel and Kalamboli.",
    url: "https://anuragclasses.com",
    siteName: "Anurag Classes",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Anurag Classes Logo",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anurag Classes | Science, Commerce, NEET, JEE, MHT-CET",
    description: "Building Strong Foundations for Academic Success. Trusted coaching institute since 2015.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Anurag Classes",
  "image": "https://anuragclasses.com/logo.png",
  "url": "https://anuragclasses.com",
  "telephone": "+917977338822",
  "email": "info@anuragclasses.com",
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "New Panvel",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Kalamboli",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/anuragclasses_2020"
  ],
  "description": "Trusted coaching institute since 2015 for Classes VIII to XII, NEET, JEE, and MHT-CET in New Panvel and Kalamboli."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen relative text-foreground transition-colors duration-300 overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
