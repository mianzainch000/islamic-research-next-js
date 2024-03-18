"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import En from "@/messages/en.json";
import { Box, Typography } from "@mui/material";
import Urd from "@/messages/urd.json";

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "urd" ? Urd : En;

  return (
    <Box>
      {lang?.mainHeadings?.map((heading) => (
        <Box key={heading.id} className="box">
          <Link href={heading?.id} className="link">
            <Typography className="title">{t(heading.title)}</Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default HomePage;
