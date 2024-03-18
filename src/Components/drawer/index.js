"use client";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../../public/image/logo.png";
import React, { useState, useEffect } from "react";
import AccountMenu from "@/Components/account-menu";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import {
  Drawer,
  Box,
  IconButton,
  Button,
  Stack,
  Grid,
  Typography,
} from "@mui/material";
import NightlightRoundRoundedIcon from "@mui/icons-material/NightlightRoundRounded";

const DrawerComp = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isLightTheme, setLightTheme] = useState(
    localStorage.getItem("theme") === "light-theme"
  );

  const toggleTheme = () => {
    const newTheme = isLightTheme ? "dark-theme" : "light-theme";
    setLightTheme(!isLightTheme);
    localStorage.setItem("theme", newTheme);
  };

  const { t } = useTranslation("navbar");

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
          "& .css-1160xiw-MuiPaper-root-MuiDrawer-paper": {
            background: isLightTheme ? "black" : "white",
            color: isLightTheme ? "white" : "black",
            width: "100%",
          },
        }}
      >
        <Grid container>
          <Grid md={10} xs={10}>
            <Link href={"/"}>
              <Image src={logo} width={50} />
            </Link>
          </Grid>

          <Grid md={1} xs={1}>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon sx={{ color: isLightTheme ? "white" : "black" }} />
            </IconButton>
          </Grid>
        </Grid>

        <Grid md={12} xs={12}>
          <Typography textAlign={"center"} paddingTop="100px" variant="h5">
            {t("navHeading")}
          </Typography>
        </Grid>

        <Box>
          <Stack
            spacing={1}
            direction="row"
            justifyContent={"space-around"}
            marginTop={"60px"}
          >
            <Button onClick={toggleTheme}>
              {!isLightTheme ? (
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
