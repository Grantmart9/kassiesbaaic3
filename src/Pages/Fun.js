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
  fontType,
} from "components/Display/feutures";

export const Fun = ({ topBarOn }) => {
  var size = Size();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="block h-auto">
      {size == "XS" || size == "SM" || size == "MD" ? (
        <Slide in={true} timeout={500}>
          {topBarOn ? (
            <h1
              style={{ color: pagetitlecolor, fontFamily: fontType }}
              className="text-center font-bold text-3xl mt-32 pt-2"
            >
              Fun Things To Do
            </h1>
          ) : (
            <h1
              style={{ color: pagetitlecolor, fontFamily: fontType }}
              className="text-center font-bold text-3xl mt-20 pt-2"
            >
              Fun Things To Do
            </h1>
          )}
        </Slide>
      ) : (
        <Fade in={true} timeout={1000}>
          <h1
            style={{ color: pagetitlecolor, fontFamily: fontType }}
            className="text-center font-bold text-3xl mt-16 pt-2"
          >
            Fun Things To Do
          </h1>
        </Fade>
      )}
      {size == "XS" || size == "SM" || size == "MD" ? (
        <>
          <Fade in={true} timeout={500}>
            <div className="flex text-center justify-center p-2">
              Environmental security focuses on safeguarding the natural
              environment to ensure a healthy, sustainable quality of life for
              current and future generations. It involves protecting ecosystems,
              ensuring access to clean air, water, and soil, and mitigating the
              impacts of climate change and pollution. By promoting sustainable
              practices, effective waste management, and conservation efforts,
              environmental security aims to prevent environmental degradation
              and enhance resilience against natural disasters. This holistic
              approach ensures that communities can thrive in a safe and stable
              environment, supporting both ecological balance and human
              well-being.
            </div>
          </Fade>
        </>
      ) : (
        <>
          <Fade in={true} timeout={1000}>
            <div className="flex text-center justify-center p-2">
              Environmental security focuses on safeguarding the natural
              environment to ensure a healthy, sustainable quality of life for
              current and future generations. It involves protecting ecosystems,
              ensuring access to clean air, water, and soil, and mitigating the
              impacts of climate change and pollution. By promoting sustainable
              practices, effective waste management, and conservation efforts,
              environmental security aims to prevent environmental degradation
              and enhance resilience against natural disasters. This holistic
              approach ensures that communities can thrive in a safe and stable
              environment, supporting both ecological balance and human
              well-being.
            </div>
          </Fade>
        </>
      )}
    </div>
  );
};
