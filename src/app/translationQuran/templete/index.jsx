"use client";
import React from "react";
import En from "@/messages/en.json";
import { Grid } from "@mui/material";
import Urd from "@/messages/urd.json";
import CardComp from "@/Components/card";
import { useTranslation } from "react-i18next";

const QuranTrans = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "urd" ? Urd : En;

  return (
    <Grid
      container
      spacing={3}
      sx={{
        marginTop: "100px",
        marginBottom: "20px",
        justifyContent: "center",
      }}
    >
      {lang?.QuranwithTran?.map((heading) => (
        <Grid
          item
          key={heading.id}
          lg={4}
          md={4}
          sm={6}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
          data-aos="fade-right"
        >
          <CardComp
            title={t(heading.text)}
            button={t(heading.button)}
            href={heading?.link}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default QuranTrans;
