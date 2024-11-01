import React, { useState, useEffect, useCallback } from "react";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { TopBarButtonStyle } from "components/Display/feutures";
import Button from "@mui/material/Button";
import { CardContent, Slide, TextField } from "@mui/material";
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

const image_2 =
  "url('https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT-Iz_bZOducLNnqNF3T2-evxUSne7PaWPBlYZ9XVihpSPAn40hiS-2h05iii1w6YN3saUY28DY7l-TMPruQ5u7ec8wKQzyoCMfT9d9u48')";

const ContactContext = () => {
  return (
    <div className="flex align-center justify-center">
      <Card sx={{ bgcolor: "#ebf0f2", opacity: "80%" }}>
        <CardContent>
          <div className="grid grid-flow-row gap-1 mb-3">
            <div className="grid grid-flow-col gap-1">
              email:<h1> evandre@telkomsa.co.za</h1>
            </div>
            <div className="grid grid-flow-col gap-1">
              phone:<h1> +27 82 905 5060</h1>
            </div>
          </div>
          <Typography variant="body1">
            <div className="grid grid-rows-1 gap-1">
              <div className="grid grid-flow-col gap-1">
                <div className="flex text-center my-auto">Name:</div>
                <TextField size="small" fullWidth="true" />
              </div>
              <div className="grid grid-flow-col gap-1">
                <div className="flex text-center my-auto">Email:</div>
                <TextField size="small" fullWidth="true" />
              </div>
              <div className="grid grid-flow-col gap-1">
                <div className="flex text-center my-auto">Cell:</div>
                <TextField size="small" fullWidth="true" />
              </div>
            </div>
          </Typography>
          <div className="text-center justify-center font-bold">Query</div>
          <TextField fullWidth="true" />
          <div className="flex align-center justify-center mt-3">
            <Button
              className="rounded-md"
              sx={{ backgroundColor: "black", color: "white" }}
            >
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export const Contact = ({ topBarOn }) => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);
  // const [y, setY] = useState(window.scrollY);

  // useEffect(() => {
  //   const handleScroll = () => setY(window.scrollY);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventLitener("scroll", handleScroll);
  // }, []);

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
        <div className="p-2">
          <ContactContext />
        </div>
      </div>
    </div>
  );
};
