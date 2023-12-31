import { Roboto } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Bite Zen",
  description: "Food ordering application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-black ${roboto.className}`}>
        <Navbar />

        <main className="max-w-5xl mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
