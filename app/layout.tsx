import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/ui/themProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nick bubuioc",
  description: "we all live in our own realities",
  keywords: [
    "nicoale bubuioc dev",
    "nicolae bubuioc",
    "nick bubuioc",
    "nick bubuioc dev",
    "mamflo",
    "mamflo dev",
    "nick bubuioc blog",
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background scroll-smooth`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>
              <Navbar></Navbar>
              {children}
          </ThemeProvider>
        
        </body>
    </html>
  );
}
