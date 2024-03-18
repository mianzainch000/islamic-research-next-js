import { Box, Typography } from "@mui/material";
import React from "react";

const Error = () => {
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
};

export default Error;
