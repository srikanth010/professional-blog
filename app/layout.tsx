import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/Header';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.tsx
export const metadata = {
  title: 'Srikanth Kanteti | Sr. AEM Tech Lead',
  description: '7+ years of experience in enterprise content management and systems architecture.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white">
        <Header />
        {children}
      </body>
    </html>
  );
}

