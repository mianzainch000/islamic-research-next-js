"use client";
import React, { useState, useEffect } from "react";
import { useTranslation, i18n } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import En from "@/messages/en.json";
import Urd from "@/messages/urd.json";
import AccountMenu from "../account-menu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../../public/image/logo.png";
import { getCookie, setCookie } from "cookies-next";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import {
  Drawer,
  Box,
  IconButton,
  Grid,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import NightlightRoundRoundedIcon from "@mui/icons-material/NightlightRoundRounded";
const DrawerComp = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const [isLightTheme, setLightTheme] = useState(
    getCookie("theme") === "light-theme"
  );

  const { t } = useTranslation("navbar");
  const { i18n } = useTranslation();
  const lang = i18n.language === "urd" ? Urd : En;

  const toggleTheme = () => {
    const newTheme = isLightTheme ? "dark-theme" : "light-theme";
    setLightTheme(!isLightTheme);
    const oneYearInMilliseconds = 365 * 24 * 60 * 60 * 1000;
    const expires = new Date(Date.now() + oneYearInMilliseconds);
    setCookie("theme", newTheme, { expires });
  };

  useEffect(() => {
    document.body.className = isLightTheme ? "light-theme" : "dark-theme";
  }, [isLightTheme]);

  return (
    <Box>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiPaper-root": {
            width: "100%",
            color: isLightTheme ? "black" : "white",
            background: isLightTheme ? "white" : "black",
          },
        }}
      >
        <Grid container sx={{ padding: "30px 5px" }}>
          <Grid md={10} xs={10}>
            <Link href={"/"}>
              <Image src={logo} width={50} />
            </Link>
          </Grid>

          <Grid md={1} xs={1}>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon sx={{ color: isLightTheme ? "black" : "white" }} />
            </IconButton>
          </Grid>
          <Grid md={12} xs={12} data-aos="fade-right">
            <Typography className="drawerHeadings">
              {t("navHeading")}
            </Typography>
          </Grid>

          <Grid sm={12} data-aos="fade-right">
            {lang.drawerHeadings?.map((heading) => {
              return (
                <Box key={heading.id}>
                  <Link
                    href={heading.id}
                    className="link"
                    onClick={() => setDrawerOpen(false)}
                  >
                    <Typography className="drawerHeadings">
                      {heading.title}
                    </Typography>
                  </Link>
                </Box>
              );
            })}
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Stack spacing={2} direction={"row"}>
            <Button onClick={() => toggleTheme()}>
              {isLightTheme ? (
                <WbSunnyRoundedIcon sx={{ color: "black" }} />
              ) : (
                <NightlightRoundRoundedIcon sx={{ color: "white" }} />
              )}
            </Button>
            <AccountMenu />
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
};

export default DrawerComp;
