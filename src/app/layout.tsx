import type { Metadata, Viewport } from "next";
import { Outfit, Playfair_Display, Albert_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], display: 'swap', variable: '--font-outfit' });
const playfair = Playfair_Display({ subsets: ["latin"], display: 'swap', variable: '--font-playfair' });
const albert = Albert_Sans({ subsets: ["latin"], display: 'swap', variable: '--font-albert' });

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1115' }
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Sora Showcase - A Mobile Experience",
  description: "A premium mobile-first experience built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable} ${albert.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="page-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
