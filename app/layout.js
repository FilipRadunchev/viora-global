import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Viora Global",
  description:
    "Business Creation, Growth & Transformation in Regulated Industries",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#FFF2E6]">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
      </body>
    </html>
  );
}
