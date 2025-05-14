import type { Metadata, Viewport } from "next";
import { Tektur } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/navbar";
import HamburgerMenu from "@/components/ui/HamburgerMenu"; // Asegúrate de que la ruta sea correcta
import Footer from "@/components/home/footer";

const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "404 Tech",
  description: "An technology store",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#15A448" },
    { media: "(prefers-color-scheme: dark)", color: "#0E7A36" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${tektur.variable} pt-20 antialiased`}>
        {/* Navbar en escritorio */}
        <div className="hidden lg:block fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>

        {/* Menú hamburguesa en móvil */}
        <div className="block lg:hidden fixed top-0 left-0 right-0 z-50">
          <HamburgerMenu />
        </div>

        {/* Contenido general */}
        <main className="mt-4">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
