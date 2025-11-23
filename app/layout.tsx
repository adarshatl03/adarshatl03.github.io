import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";

import type { ReactNode } from "react";
import LayoutClientProvider from "@/components/ClientProvider";

export const metadata = {
  title: "Adarsh | Portfolio",
  description: "Senior React / Next.js Developer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />

          <LayoutClientProvider>{children}</LayoutClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
