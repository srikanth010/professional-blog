import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import InteractiveDotBackground from "@/components/InteractiveDotBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Srikanth Kanteti | Sr. AEM Tech Lead",
  description:
    "7+ years architecting enterprise AEM platforms for Global 500 companies. Sr. AEM Tech Lead specializing in headless CMS, AEMaaCS migrations, and scalable digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body style={{ fontFamily: "var(--font-sans)" }}>
        <InteractiveDotBackground />
        {children}
      </body>
    </html>
  );
}
