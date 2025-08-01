import "./globals.css";
import { Inter } from "next/font/google";
import ClientLayout from "../components/ClientLayout";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
        <script src="https://assets.calendly.com/assets/external/widget.js"></script>
      </body>
    </html>
  );
}
