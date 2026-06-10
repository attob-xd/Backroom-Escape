import type { Metadata, Viewport } from "next";
import { Special_Elite } from "next/font/google";
import "./globals.css";

const specialElite = Special_Elite({
  variable: "--font-elite",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BACKROOMS — LEVEL 0",
  description:
    "A procedural first-person horror experience. Find the pages. Find the door. Don't let it find you.",
};

export const viewport: Viewport = {
  themeColor: "#0a0905",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${specialElite.variable} h-full antialiased`}>
      <body className="h-full overflow-hidden bg-black text-zinc-200">
        {children}
      </body>
    </html>
  );
}
