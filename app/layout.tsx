import { Cormorant, Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.scss";
import Header from "@/components/ui/Header/Header";

export const neueMontreal = localFont({
  src: "../public/font/NeueMontreal-Regular.otf",
  variable: "--font-neue-montreal",
  display: "swap",
});

export const cormorant = Cormorant({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope', // ← CSS-переменная для Manrope
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
