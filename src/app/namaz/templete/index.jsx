"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
import En from "@/messages/en.json";
import Urd from "@/messages/urd.json";
const NamazSubHeading = () => {
  const { t, i18n } = useTranslation("namazSubHeading");
  const lang = i18n.language === "urd" ? Urd : En;
  return (
    <>
      <Box>
        {lang?.namazSubHeading?.map((heading) => (
          <Box key={heading.id} className="box">
            <Link href={`namaz/${heading?.id}`} className="link">
              <Typography className="title">{t(heading.title)}</Typography>
            </Link>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default NamazSubHeading;
