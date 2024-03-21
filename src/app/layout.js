"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import en from "@/messages/en.json";
import urd from "@/messages/urd.json";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import Navbar from "@/Components/navbar";

const inter = Inter({ subsets: ["latin"] });

// Default language if no language is stored in localStorage
const defaultLanguage = "en";

// Initialize i18next with the stored language or default to "en"
i18next.init({
  interpolation: { escapeValues: false },
  lng: defaultLanguage,
  resources: {
    urd: urd,
    en: en,
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <I18nextProvider i18n={i18next}>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </I18nextProvider>
    </html>
  );
}
