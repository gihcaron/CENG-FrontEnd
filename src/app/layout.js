import React from "react";
import { Anton, Montserrat } from "next/font/google";
import "./globals.css";

//  Anton (para títulos)
const anton = Anton({
  variable: "--font-anton",
  weight: "400", 
  subsets: ["latin"],
});

//Montserrat (para texto)
const montserrat = Montserrat({
  variable: "--font-montserrat",
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
    <html lang="pt-BR">
      <body className={`${anton.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}