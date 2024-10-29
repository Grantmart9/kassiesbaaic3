import React, { useState, useEffect, useCallback } from "react";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { CardContent, Slide, TextField } from "@mui/material";
import { Size } from "components/Display/media-query";
import {
  cardbgcolor,
  textcolor,
  pagetitlecolor,
  cardtitlecolor,
  pagebgcolor,
  fontType,
} from "components/Display/feutures";
import Card from "@mui/material/Card";

const topPageMax = 100;

const ContactContext = () => {
  return (
    <div className="flex align-center justify-center">
      <Card sx={{ bgcolor: "#7d9db5" }}>
        <CardContent>
          <div className="grid grid-flow-col gap-1">
            <div>
              email:<h1> evandre@telkomsa.co.za</h1>
            </div>
            <div>
              phone:<h1> +27 82 905 5060</h1>
            </div>
          </div>
          <Typography variant="body1">
            <div className="grid grid-rows-1 gap-1">
              <div className="text-center justify-center">
                Name: <TextField size="small" fullWidth="true" />
              </div>
              <div className="text-center justify-center">
                Email: <TextField size="small" fullWidth="true" />
              </div>
              <div className="text-center justify-center">
                Cell: <TextField size="small" fullWidth="true" />
              </div>
            </div>
          </Typography>
          <Card>
            <div className="text-center justify-center font-bold">Query</div>
            <TextField fullWidth="true" />
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export const Contact = ({ topBarOn }) => {
  var size = Size();
  // const [y, setY] = useState(window.scrollY);

  // useEffect(() => {
  //   const handleScroll = () => setY(window.scrollY);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="grid grid-flow-row gap-1 h-auto">
      {size == "XS" || size == "SM" || size == "MD" ? (
        <div>
          {topBarOn ? (
            <div className="grid grid-flow-row gap-1 px-2 mt-36">
              <Slide in={true} timeout={500}>
                <h1
                  style={{ color: pagetitlecolor, fontFamily: fontType }}
                  className="text-center justify-center font-bold text-3xl"
                >
                  Contact Us
                </h1>
              </Slide>
              <Fade in={true} timeout={1500}>
                <div style={{ width: "100vw" }}>
                  <ContactContext />
                </div>
              </Fade>
            </div>
          ) : (
            <div className="grid grid-flow-row gap-1 px-2 mt-20">
              <Slide in={true} timeout={500}>
                <h1
                  style={{ color: pagetitlecolor, fontFamily: fontType }}
                  className="text-center justify-center font-bold text-3xl"
                >
                  Contact Us
                </h1>
              </Slide>
              <Fade in={true} timeout={1500}>
                <div style={{ width: "100vw" }}>
                  <ContactContext />
                </div>
              </Fade>
            </div>
          )}
        </div>
      ) : (
        <div>
          {topBarOn ? (
            <div className="grid grid-flow-row gap-1 px-2 mt-16">
              <Fade in={true} timeout={1000}>
                <h1
                  style={{ color: pagetitlecolor, fontFamily: fontType }}
                  className="text-center justify-center font-bold text-3xl"
                >
                  Contact Us
                </h1>
              </Fade>
              <Fade in={true} timeout={1500}>
                <div style={{ width: "100vw" }}>
                  <ContactContext />
                </div>
              </Fade>
            </div>
          ) : (
            <div className="grid grid-flow-row gap-1 px-2 mt-16">
              <Fade in={true} timeout={1000}>
                <h1
                  style={{ color: pagetitlecolor, fontFamily: fontType }}
                  className="text-center justify-center font-bold text-3xl"
                >
                  Contact Us
                </h1>
              </Fade>
              <Fade in={true} timeout={1500}>
                <div style={{ width: "100vw" }}>
                  <ContactContext />
                </div>
              </Fade>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
