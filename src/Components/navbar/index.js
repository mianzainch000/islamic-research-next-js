"use client";
import Link from "next/link";
import Image from "next/image";
import DrawerComp from "@/Components/drawer";
import { useTranslation } from "react-i18next";
import logo from "../../../public/image/logo.png";
import React, { useState, useEffect } from "react";
import AccountMenu from "@/Components/account-menu";
import { getCookie, setCookie } from "cookies-next";
import { useTheme, useMediaQuery } from "@mui/material";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import NightlightRoundRoundedIcon from "@mui/icons-material/NightlightRoundRounded";

const Navbar = () => {
  const [isLightTheme, setLightTheme] = useState(
    getCookie("theme") === "light-theme"
  );
  const colorTheme = useTheme();
  const { t } = useTranslation("navbar");

  const isMatch = useMediaQuery(colorTheme.breakpoints.down("md"));

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
    <AppBar position="fixed" sx={{ background: "grey" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {isMatch ? (
          <>
            <Link href={"/"}>
              <Image src={logo} width={50} />
            </Link>
{/* <h3>Importance of dua</h3> */}
            <DrawerComp />
          </>
        ) : (
          <>
            <Link href={"/"}>
              <Image src={logo} width={50} />
            </Link>
            <Typography variant="h5">{t("navHeading")}</Typography>
            <Stack spacing={2} direction={"row"}>
              <Button onClick={() => toggleTheme()}>
                {isLightTheme ? (
                  <WbSunnyRoundedIcon sx={{ color: "white" }} />
                ) : (
                  <NightlightRoundRoundedIcon sx={{ color: "white" }} />
                )}
              </Button>
              <AccountMenu />
            </Stack>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
