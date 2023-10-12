import type { Metadata } from "next";
import { Kanit } from "next/font/google";

import { ReduxProvider } from "@/store/provider";

import Hero from "@/components/layout/Hero";
import Footer from "@/components/layout/Footer";

import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  variable: "--font-kanit",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "IndiePizza",
  description: "Delicious hommade pizzas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={kanit.variable}>
      <body className="flex min-h-screen flex-col font-kanit">
        <ReduxProvider>
          <div id="modal-overlay"></div>
          <Hero />
          <main className="grow  bg-orange-50">{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
