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
        width: { lg: "300px", md: "300px", sm: "300px", xs: "90%" },
        height: "250px",
        borderRadius: "20px",
      }}
      className="card"
    >
      <CardContent>
        <Typography
          className="title"
          sx={{ height: "100px", marginTop: "50px" }}
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
