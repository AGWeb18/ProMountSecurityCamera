import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProMount Security Cameras | Ontario, Canada | Durham & Kawarthas",

  description:
    "Expert security camera installation serving Durham Region and the Kawarthas. Wired & Wire-Free systems for home and business.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeSecurityService",
              name: "ProMount Security Cameras",
              image: "https://promountsecurity.ca/logo.png",
              description:
                "Professional residential and commercial security camera installation in the Kawarthas and Durham Region. No monthly fees, local recording, and mobile access setup.",
              telephone: "+1-705-530-2530",
              priceRange: "$$",
              areaServed: [
                { "@type": "City", name: "Whitby" },
                { "@type": "City", name: "Oshawa" },
                { "@type": "City", name: "Bowmanville" },
                { "@type": "City", name: "Port Perry" },
                { "@type": "City", name: "Peterborough" },
                { "@type": "City", name: "Lindsay" },
                { "@type": "City", name: "Lakefield" },
                { "@type": "City", name: "Fenelon Falls" },
                { "@type": "City", name: "Coboconk" },
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "08:00",
                closes: "18:00",
              },
              url: "https://promountsecurity.ca",
            }),
          }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-K9GLWHQEGZ" />
      </body>
    </html>
  );
}
