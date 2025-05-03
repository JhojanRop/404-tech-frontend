import type { Metadata, Viewport } from "next";
import { Tektur } from "next/font/google";
import "./globals.css";

const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "404 Tech",
  description: "An technology store"
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#15A448' }, // Original en claro
    { media: '(prefers-color-scheme: dark)', color: '#0E7A36' }, // Versión más oscura
  ],
  colorScheme: 'light dark'
}

export default function RootLayout({ children }: React.PropsWithChildren<{ cartQuantity: number }>) {
  return (
    <html lang="en">
      <body className={`${tektur.variable} pt-20 antialiased`}>
        {children}
      </body>
    </html>
  );
}
