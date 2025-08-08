import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blackbuster - Stream Black Cinema",
  description: "Discover and stream the best of Black cinema. From award-winning dramas to groundbreaking documentaries, explore the rich diversity of Black storytelling on Blackbuster.",
  keywords: "black cinema, african american movies, black films, streaming, documentaries, entertainment",
  openGraph: {
    title: "Blackbuster - Stream Black Cinema",
    description: "Discover and stream the best of Black cinema. From award-winning dramas to groundbreaking documentaries, explore the rich diversity of Black storytelling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <ClientBody className={inter.className}>{children}</ClientBody>
    </html>
  );
}
