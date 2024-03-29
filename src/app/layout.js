"use client";
import Aos from "aos";
import "./globals.css";
import "aos/dist/aos.css";
import i18next from "i18next";
import en from "@/messages/en.json";
import urd from "@/messages/urd.json";
import React, { useEffect } from "react";
import { Inter } from "next/font/google";
import Navbar from "@/Components/navbar";
import { getCookie } from "cookies-next";
import { I18nextProvider } from "react-i18next";
const inter = Inter({ subsets: ["latin"] });

const storedLang = getCookie("selectedLanguage");
if (storedLang) {
  i18next.init({
    interpolation: { escapeValues: false },
    lng: storedLang,
    resources: {
      urd: urd,
      en: en,
    },
  });
} else {
  i18next.init({
    lng: "urd",
    resources: {
      urd: urd,
      en: en,
    },
  });
}

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <html lang="en">
      <I18nextProvider i18n={i18next}>
        <body className="light-theme">
          <Navbar />
          {children}
        </body>
      </I18nextProvider>
    </html>
  );
}
