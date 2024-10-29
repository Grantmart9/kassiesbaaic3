import React, { useState, useEffect, useCallback } from "react";
import Fade from "@mui/material/Fade";
import { Size } from "components/Display/media-query";
import { Slide } from "@mui/material";
import {
  cardbgcolor,
  textcolor,
  pagetitlecolor,
  cardtitlecolor,
  pagebgcolor,
  fontType,
} from "components/Display/feutures";
import kassies from "Videos/kassies.mp4";
import I8 from "Images/I8.jpg";
import I2 from "Images/I2.jpg";
import I4 from "Images/I4.jpg";

const LandingContext = () => {
  return (
    <div>
      Offering barbecue facilities and sea view, Kassiesbaai Cottage is located
      in Arniston, a few steps from Arniston Beach and 23 km from De Mond Nature
      Reserve. This beachfront property offers access to darts and free WiFi.
      The apartment also offers facilities for disabled guests. This apartment
      is equipped with 1 bedroom, a kitchen with an oven and a microwave, a
      flat-screen TV, a seating area and 1 bathroom equipped with a walk-in
      shower. The tiled floors, fireplace and peaceful vibe add to the ambience
      of the room. For added privacy, the accommodation features a private
      entrance. Guests at the apartment will be able to enjoy activities in and
      around Arniston, like cycling. Shipwreck Museum - Bredasdorp is 25 km from
      Kassiesbaai Cottage, while Arniston Cave is 1.4 km away. Couples
      particularly like the location — they rated it 9.6 for a two-person trip.
    </div>
  );
};

export const Landing = ({ topBarOn }) => {
  var size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const RenderHeader = () => (
    <Slide in={true} timeout={500}>
      <div>
        {topBarOn ? (
          <div>
            {isResponsiveSize ? (
              <h1
                style={{ color: pagetitlecolor, fontFamily: fontType }}
                className="text-center justify-center font-bold text-3xl mt-36"
              >
                Welcome
              </h1>
            ) : (
              <h1
                style={{ color: pagetitlecolor, fontFamily: fontType }}
                className="text-center justify-center font-bold text-3xl mt-20"
              >
                Welcome
              </h1>
            )}
          </div>
        ) : (
          <div>
            {isResponsiveSize ? (
              <h1
                style={{ color: pagetitlecolor, fontFamily: fontType }}
                className="text-center justify-center font-bold text-3xl mt-16"
              >
                Welcome
              </h1>
            ) : (
              <h1
                style={{ color: pagetitlecolor, fontFamily: fontType }}
                className="text-center justify-center font-bold text-3xl mt-20"
              >
                Welcome
              </h1>
            )}
          </div>
        )}
      </div>
    </Slide>
  );

  const RenderImages = () => {
    return (
      <div className="grid grid-cols-3 mx-2">
        <img src={I8} />
        <img src={I2} />
        <img src={I4} />
      </div>
    );
  };

  const RenderLanding = () => (
    <Fade in={true} timeout={1500}>
      <div>
        <video
          className="w-full p-2 rounded-md"
          autoPlay
          loop
          src={kassies}
          type="video/mp4"
        />
        {topBarOn ? (
          <div>
            {isResponsiveSize ? (
              <div
                style={{
                  width: "100vw",
                  padding: "10pt",
                }}
              >
                <LandingContext />
              </div>
            ) : (
              <div
                style={{
                  width: "calc(100vw - 200px)",
                  padding: "10pt",
                  margin: "0",
                }}
              >
                <LandingContext />
              </div>
            )}
          </div>
        ) : (
          <div>
            {isResponsiveSize ? (
              <div
                style={{
                  width: "100vw",
                  padding: "10pt",
                  margin: "0",
                }}
              >
                <LandingContext />
              </div>
            ) : (
              <div
                style={{
                  width: "100vw",
                  padding: "10pt",
                  margin: "0",
                }}
              >
                <LandingContext />
              </div>
            )}
          </div>
        )}
      </div>
    </Fade>
  );

  return (
    <div
      style={{ margin: 0, padding: 0, overflowX: "hidden" }}
      className="block"
    >
      <RenderHeader />
      <RenderLanding />
      <RenderImages/>
    </div>
  );
};
