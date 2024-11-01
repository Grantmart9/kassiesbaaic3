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
              <div>
                <ul>
                  {activities.map((activity, index) => (
                    <li key={index}>
                      {index+1}.<h2>{activity.title}</h2>
                      <p>{activity.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <>
          <Fade in={true} timeout={1000}>
            <div className="flex text-center justify-center p-2">
              <div>
                <ul>
                  {activities.map((activity, index) => (
                    <li key={index}>
                      {index+1}. <h2>{activity.title}</h2>
                      <p>{activity.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Fade>
        </>
      )}
    </div>
  );
};
