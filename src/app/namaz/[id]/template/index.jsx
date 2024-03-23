"use client";
import React from "react";
import En from "@/messages/en.json";
import Urd from "@/messages/urd.json";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";

const DetailPage = () => {
  const pathName = usePathname();
  const { t, i18n } = useTranslation("namazDetailPage");
  const paramId = pathName.split("/")[2];
  const lang = i18n.language === "urd" ? Urd : En;
  const subheading = lang.namazDetailPage.find((item) => item.id === paramId);
  const content = subheading?.content || [];
  if (content.length === 0) {
    return (
      <Box>
        <Typography
          variant="h3"
          color={"red"}
          paddingTop={"200px"}
          textAlign={"center"}
        >
          Page Not Found 404
        </Typography>
      </Box>
    );
  }
  console.log(subheading);
  return (
    <Box data-aos="fade-right">
      {content.map((con, index) => (
        <div key={index}>
          <Box className="box">
            <Typography className="title">{t(con.reference)}</Typography>
            <Typography className="translation" variant="h2">
              {t(con.translation)}
            </Typography>
          </Box>
        </div>
      ))}
    </Box>
  );
};

export default DetailPage;
