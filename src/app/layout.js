import React from "react";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({
  variable: "--font",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
    title: "Com ELas No Grid",
    icons: {
    icon: "/icons/favicon.ico",
  },
    description: "Projeto Final Individual - CENG",

};

export default function RootLayout({ children }) {
    return (
        <html>
            <body className={font.variable}>{children}</body>
        </html>
    );
}
