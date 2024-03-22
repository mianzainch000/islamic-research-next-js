"use client";
import React from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const CardComp = ({ title, button, href }) => {
  return (
    <Card
      sx={{
        width: "300px",
        height: "250px",
        borderRadius: "20px",
      }}
      className="card"
    >
      <CardContent>
        <Typography
          className="title"
          sx={{ height: "130px", marginTop: "30px" }}
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={href}>
          <Button size="small" className="button">
            {button}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardComp;
