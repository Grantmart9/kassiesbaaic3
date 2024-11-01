import React, { useState, useEffect, useCallback } from "react";
import Fade from "@mui/material/Fade";
import { Slide } from "@mui/material";
import { Size } from "components/Display/media-query";
import {
  cardbgcolor,
  textcolor,
  pagetitlecolor,
  cardtitlecolor,
  pagebgcolor,
  AppFont,
} from "components/Display/feutures";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import web1 from "Images/website1.png";
import web2 from "Images/website2.png";
import web3 from "Images/website3.png";
import web4 from "Images/website4.png";
import { Datepicker } from "components/Datepicker";

const image_2 =
  "url('https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR_fY5XZMLuWjs_uMT7NBbGthDbHaOOeqWOFQMiMHI-yaeES2NmPA_6eU2iCCs7ffEQAIUwei-zVpLHculrWVPxyhs4gArgM1JigYY18Q')";

const SolutionContext = () => {
  return (
    <div sx={{ bgcolor: "#7d9db5" }}>
      <div className="bg-gray-light rounded-md p-2 align-center justify-center">
        <div
          style={{ fontFamily: AppFont }}
          className="text-gray-dark text-center justify-center text-lg font-bold"
        >
          Available dates
        </div>
        <Datepicker />
      </div>
    </div>
  );
};

export const Bookings = ({ topBarOn }) => {
  var size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const RenderHeader = () => (
    <Slide in={true} timeout={1000}>
      <div>
        {topBarOn ? (
          <div>
            {isResponsiveSize ? (
              <h1
                style={{ color: pagetitlecolor, fontFamily: AppFont }}
                className="text-center justify-center text-3xl mt-32"
              ></h1>
            ) : (
              <h1
                style={{ color: pagetitlecolor, fontFamily: AppFont }}
                className="text-center justify-center text-3xl mt-20"
              ></h1>
            )}
          </div>
        ) : (
          <div>
            {isResponsiveSize ? (
              <h1
                style={{ color: pagetitlecolor, fontFamily: AppFont }}
                className="text-center justify-center  text-3xl mt-20"
              ></h1>
            ) : (
              <h1
                style={{ color: pagetitlecolor, fontFamily: AppFont }}
                className="text-center justify-center text-3xl mt-20"
              ></h1>
            )}
          </div>
        )}
      </div>
    </Slide>
  );

  return (
    <div className="block">
      <div
        style={{
          backgroundImage: image_2,
          backgroundSize: "cover",
          opacity: "85%",
          margin: 0,
          padding: 0,
          height: "100vh",
          position: "sticky",
          overflow: "scroll",
          overflowX: "hidden",
        }}
      >
        <RenderHeader />
        <div className="p-2" style={{ width: "100vw" }}>
          <SolutionContext />
        </div>
      </div>
    </div>
  );
};
