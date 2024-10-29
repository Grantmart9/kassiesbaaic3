import React, { useState, useEffect, useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Size } from "./media-query";
import Container from "@mui/material/Container";
import { topbarbgcolor, CompanyName, topbartextcolor } from "./feutures";

export const TopBar = ({ setTopBarOn }) => {
  var size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);
  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        backgroundColor: topbarbgcolor,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: "20pt",
        }} // Align items to the left
      >
        <IconButton
          size="large"
          aria-label="menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={setTopBarOn}
          color={topbartextcolor}
        >
          <MenuIcon />
        </IconButton>
        <Container>
          <div
            style={{ color: topbartextcolor }}
            className={`text-gray-light text-center font-bold text-${
              isResponsiveSize ? "2xl" : "3xl"
            } mr-20`}
          >
            {CompanyName}
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
