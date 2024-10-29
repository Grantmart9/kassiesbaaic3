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
import { AppFont } from "components/Display/feutures";

const image_1 =
  "url('https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT_dVDHFoNRWrpXkXjCBha5w3wdWxb3bU_h0UJI5m2UJP6kpDCKEAFxxMOA2EmxW4m8JDYMXDybznAfnavsEcqdeDUYMrPCjfJ_iyhb_A')";

const LandingContext = () => {
  return (
    <div className="grid md:grid-cols-2 gap-2">
      <Slide direction="right" in={true} timeout={1400}>
        <div
          className="flex rounded-md text-center justify-center"
          style={{
            fontFamily: AppFont,
            color: "black",
            backgroundColor: "white",
            opacity: "80%",
            padding: "10pt",
          }}
        >
          Experience the charm of seaside living at Kassiesbaai Cottage, nestled
          in the picturesque coastal village of Arniston. Just steps away from
          the pristine Arniston Beach and a short drive to De Mond Nature
          Reserve, this beachfront gem is the perfect retreat for nature lovers
          and relaxation seekers alike. Kassiesbaai Cottage features inviting
          barbecue facilities with stunning sea views, ideal for enjoying al
          fresco dining. Stay connected with complimentary WiFi while engaging
          in fun games of darts. Our thoughtfully designed apartment is fully
          accessible, ensuring an enjoyable stay for all guests. This cozy
          getaway boasts a well-appointed bedroom, a modern kitchen complete
          with an oven and microwave, and a comfortable seating area, all
          enhanced by a flat-screen TV.
        </div>
      </Slide>
      <Slide direction="left" in={true} timeout={1400}>
        <div
          className="flex rounded-md text-center justify-center"
          style={{
            fontFamily: AppFont,
            color: "black",
            backgroundColor: "white",
            opacity: "80%",
            padding: "10pt",
          }}
        >
          The soothing ambiance is complemented by tiled floors and a welcoming
          fireplace, creating a peaceful atmosphere to unwind. For your privacy,
          the accommodation includes a separate entrance. Explore the beautiful
          surroundings with activities such as cycling, and discover local
          attractions like the Shipwreck Museum in Bredasdorp, only 25 km away,
          or the captivating Arniston Cave, just 1.4 km from your doorstep.
          Couples will adore the romantic setting, with a remarkable rating of
          9.6 for two-person getaways. Make Kassiesbaai Cottage your next
          holiday destination and indulge in a perfect blend of comfort and
          adventure by the sea!
        </div>
      </Slide>
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
                style={{ color: pagetitlecolor, fontFamily: AppFont }}
                className="text-center justify-center text-3xl mt-36"
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

  const RenderImages = () => {
    return (
      <div className="grid grid-cols-3 mx-2">
        <img src={I8} />
        <img src={I2} />
        <img src={I4} />
      </div>
    );
  };

  //

  const RenderLanding = () => (
    <Fade in={true} timeout={1500}>
      <div className="h-screen">
        {topBarOn ? (
          <div>
            {isResponsiveSize ? (
              <div
                style={{
                  padding: "10pt",
                }}
              >
                <LandingContext />
              </div>
            ) : (
              <div
                style={{
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
                  padding: "10pt",
                  margin: "0",
                }}
              >
                <LandingContext />
              </div>
            ) : (
              <div
                style={{
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
    <div className="block">
      <div
        style={{
          backgroundImage: image_1,
          backgroundSize: "cover",
          opacity: "85%",
          margin: 0,
          padding: 0,
          overflowX: "hidden",
        }}
      >
        <RenderHeader />
        <div className="px-4">
          <video
            className="rounded-md"
            autoPlay
            muted
            loop
            src={kassies}
            width={"100%"}
            type="video/mp4"
          />
        </div>
        <div className="p-2">
          <RenderLanding />
        </div>
      </div>
    </div>
  );
};
