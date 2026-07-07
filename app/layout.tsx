import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Konoba Kaciol — Biograd na Moru | Vrt, more i večeri uz svijeće",
  description:
    "Konoba Kaciol u Biogradu na Moru — moderna dalmatinska kuhinja u vrtu starih maslina, uz svjetla i vino. Tuna, hobotnica, plodovi mora. Rezervirajte stol.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
