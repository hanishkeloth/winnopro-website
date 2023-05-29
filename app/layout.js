"use client";
import "./globals.css";
//import { Inter } from "next/font/google";

//const inter = Inter({ subsets: ["latin"] });
import NavBar from "@/components/Navbar";

export const metadata = {
  title: "Winnopro",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" font-cambria ">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
