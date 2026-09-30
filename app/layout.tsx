import type { Metadata } from "next";
import { Sora, Source_Code_Pro, Space_Grotesk } from "next/font/google";
import type React from "react";
import { cn } from "@/lib/utils";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-face-sora",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-face-code",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-face-grotesk",
});

export const metadata: Metadata = {
  title: "Pursio || Home",
  description: "Pursio finds opportunities across your inbox, explains why they fit, and helps you move forward with confidence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={cn(
        sora.variable,
        sourceCodePro.variable,
        spaceGrotesk.variable
      )}
      lang="en"
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
