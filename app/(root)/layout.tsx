import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../globals.css";

import TopBar from "@/components/shared/TopBar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import BottomBar from "@/components/shared/BottomBar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A Cube",
  description: "Social media application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <TopBar />

          <main>
            <LeftSidebar />

            <section className="container">
              {children}
            </section>

          </main>

          <BottomBar/>
        </ClerkProvider>
      </body>
    </html>
  );
}
