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
              style={{ color: pagetitlecolor, fontFamily: AppFont }}
              className="text-center font-bold text-3xl mt-32 pt-2"
            >
              Fun Things To Do
            </h1>
          ) : (
            <h1
              style={{ color: pagetitlecolor, fontFamily: AppFont }}
              className="text-center font-bold text-3xl mt-20 pt-2"
            >
              Fun Things To Do
            </h1>
          )}
        </Slide>
      ) : (
        <Fade in={true} timeout={1000}>
          <h1
            style={{ color: pagetitlecolor, fontFamily: AppFont }}
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
              There are many fun things to do in Arniston, South Africa,
              including visiting nature reserves, hiking, and exploring a
              fishing village: De Mond Nature Reserve: A 960-hectare reserve
              with hiking trails, a picnic site, and an overnight cottage
              Waenhuiskrans Cave: A large, naturally carved cave that's a hidden
              natural wonder Waenhuiskrans Nature Reserve: A reserve with dunes
              that offer views of the ocean and sea cliffs Spookdraai hiking
              trail: A well-maintained trail with a beautiful view, but the wind
              can be strong on the hill Kassiesbaai: A 200-year-old fishing
              village and national heritage site Shipwreck Museum Bredasdorp: A
              small museum in Bredasdorp that tells the story of the Arniston
              shipwreck and other famous shipwrecks in the area Angling: Fish in
              the area Swimming: Swim in the area Whale watching: Watch whales
              in the area See fishing boats: Watch fishing boats return to the
              bay
            </div>
          </Fade>
        </>
      ) : (
        <>
          <Fade in={true} timeout={1000}>
            <div className="flex text-center justify-center p-2">
              There are many fun things to do in Arniston, South Africa,
              including visiting nature reserves, hiking, and exploring a
              fishing village: De Mond Nature Reserve: A 960-hectare reserve
              with hiking trails, a picnic site, and an overnight cottage
              Waenhuiskrans Cave: A large, naturally carved cave that's a hidden
              natural wonder Waenhuiskrans Nature Reserve: A reserve with dunes
              that offer views of the ocean and sea cliffs Spookdraai hiking
              trail: A well-maintained trail with a beautiful view, but the wind
              can be strong on the hill Kassiesbaai: A 200-year-old fishing
              village and national heritage site Shipwreck Museum Bredasdorp: A
              small museum in Bredasdorp that tells the story of the Arniston
              shipwreck and other famous shipwrecks in the area Angling: Fish in
              the area Swimming: Swim in the area Whale watching: Watch whales
              in the area See fishing boats: Watch fishing boats return to the
              bay
            </div>
          </Fade>
        </>
      )}
    </div>
  );
};
