"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

export const metadata = {
  title: "Adarsh | Portfolio",
  description: "Senior React / Next.js Developer",
};

export default function LayoutClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="page"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.35 }}
        className="container mx-auto px-6 py-10"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
