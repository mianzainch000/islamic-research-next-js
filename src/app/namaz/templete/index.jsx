"use client";
import React from "react";
import En from "@/messages/en.json";
import { Grid } from "@mui/material";
import Urd from "@/messages/urd.json";
import CardComp from "@/Components/card";
import { useTranslation } from "react-i18next";

const NamazSubHeading = () => {
  const { t, i18n } = useTranslation("namazSubHeading");
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
      {lang?.namazSubHeading?.map((heading) => (
        <Grid
          item
          key={heading.id}
          lg={4}
          md={4}
          sm={6}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <CardComp
            title={t(heading.title)}
            button={t(heading.button)}
            href={`namaz/${heading?.id}`}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default NamazSubHeading;
