import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const geistSans = Figtree({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Figtree({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoundSkillHub",
  description:
    "Premium handwriting, literacy, and inclusive education training for schools and educators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
