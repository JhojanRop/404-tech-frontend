"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../icons/Logo";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Profile", href: "/login" },
    { label: "Products", href: "/products" },
    { label: "search", href: "/search" },
  ];

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-6 px-4 dark:text-foreground bg-background">
      <Link href="/">
        <Logo className="w-26" />
      </Link>

      <button onClick={() => setIsOpen(true)} aria-label="Abrir menú">
        <Menu className="w-8 h-8 text-gray-600" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-3/4 sm:w-1/2 z-50 bg-background shadow-lg flex flex-col"
          >
            {/* Botón cerrar */}
            <div className="flex justify-end p-6">
              <button onClick={() => setIsOpen(false)} aria-label="Cerrar menú">
                <X className="h-8 w-8 text-gray-600" />
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-8">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  onClick={() => setIsOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="text-xl uppercase tracking-widest hover:text-green-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
