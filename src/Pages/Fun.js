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

const image_2 =
  "url('https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ_L--wIQ77YTahf0Bg8Z7HPcufrqkQXw3EOG-1GAgMEkt0EkHrpAZlOkQc_a0BBYXChD755AifhV--BcAyrLLgGSfzkKzng2bKvgaAZg')";

export const Fun = ({ topBarOn }) => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);

  const FunContext = () => {
    return (
      <div style={{ backgroundColor: "white" }} className="rounded-md">
        {size == "XS" || size == "SM" || size == "MD" ? (
          <>
            <Fade in={true} timeout={500}>
              <div className="flex text-center justify-center p-2">
                <ul>
                  {activities.map((activity, index) => (
                    <li key={index}>
                      <div style={{ fontFamily: AppFont }} clasName="font-bold">
                        {activity.title}
                      </div>
                      <p style={{ fontFamily: AppFont }}>{activity.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Fade>
          </>
        ) : (
          <>
            <Fade in={true} timeout={1000}>
              <div className="flex text-center justify-center p-2">
                <ul>
                  {activities.map((activity, index) => (
                    <li key={index}>
                      <div style={{ fontFamily: AppFont }} clasName="font-bold">
                        {activity.title}
                      </div>
                      <p style={{ fontFamily: AppFont }}>{activity.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Fade>
          </>
        )}
      </div>
    );
  };

  const activities = [
    {
      title: "Waenhuiskrans Nature Reserve",
      description:
        "Explore stunning coastal scenery, hiking trails, and unique rock formations. Don't miss the famous Waenhuiskrans Cave.",
    },
    {
      title: "Bredasdorp",
      description:
        "Visit the nearby town for charming shops and the Shipwreck Museum, showcasing the area's maritime history.",
    },
    {
      title: "Cape Agulhas",
      description:
        "Visit the southernmost tip of Africa, see the iconic lighthouse, and enjoy views where the Atlantic and Indian Oceans meet.",
    },
    {
      title: "Struisbaai",
      description:
        "Enjoy the beautiful beach, stroll along the promenade, or try your hand at fishing.",
    },
    {
      title: "Agulhas National Park",
      description:
        "Explore this scenic park featuring unique fynbos vegetation, hiking trails, and birdwatching opportunities.",
    },
    {
      title: "Elim",
      description:
        "A historic Moravian mission village with picturesque white-washed buildings and a tranquil atmosphere.",
    },
    {
      title: "Dolphin and Whale Watching",
      description:
        "Depending on the season, take boat trips from nearby towns for marine wildlife viewing.",
    },
    {
      title: "Sandboarding and Quad Biking",
      description: "Head to the nearby dunes for some adventure sports.",
    },
    {
      title: "Local Cuisine",
      description:
        "Sample fresh seafood at local restaurants or explore local markets for regional delicacies.",
    },
    {
      title: "Horse Riding",
      description:
        "Look for stables offering beach or trail rides for a unique way to explore the coastline.",
    },
  ];

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
    <div className="block h-auto">
      <div className="block">
        <div
          style={{
            backgroundImage: image_2,
            backgroundSize: "cover",
            opacity: "85%",
            margin: 0,
            padding: 0,
            width: topBarOn
              ? isResponsiveSize
                ? "calc(100vw)"
                : "calc(100vw - 130px)"
              : isResponsiveSize,
            height: "100vh",
            position: "sticky",
            overflow: "scroll",
            overflowX: "hidden",
          }}
        >
          <RenderHeader />
          <div style={{ opacity: "80%" }} className="p-2">
            <FunContext />
          </div>
        </div>
      </div>
    </div>
  );
};
