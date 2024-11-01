import React, { useEffect } from "react";
import Fade from "@mui/material/Fade";
import { Slide } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { Size } from "components/Display/media-query";
import { pagetitlecolor, AppFont } from "components/Display/feutures";
import I2 from "Images/I2.jpg";
import I3 from "Images/I3.jpg";
import I4 from "Images/I4.jpg";
import I5 from "Images/I5.jpg";
import I6 from "Images/I6.jpg";
import I7 from "Images/I7.jpg";
import I8 from "Images/I8.jpg";
import I10 from "Images/I10.jpg";
import I11 from "Images/I11.jpg";
import I12 from "Images/I12.jpg";
import I13 from "Images/I13.jpg";
import I14 from "Images/I14.jpg";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const image_2 =
  "url('https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcT-Iz_bZOducLNnqNF3T2-evxUSne7PaWPBlYZ9XVihpSPAn40hiS-2h05iii1w6YN3saUY28DY7l-TMPruQ5u7ec8wKQzyoCMfT9d9u48')";

const itemData = [
  {
    img: I11,
    title: "Kitchen",
  },
  {
    img: I7,
    title: "Blinds",
  },
  {
    img: I12,
    title: "Laptop",
  },
  {
    img: I14,
    title: "Doors",
  },
  {
    img: I2,
    title: "Storage",
  },
  {
    img: I3,
    title: "Candle",
  },
  {
    img: I4,
    title: "Coffee table",
  },
  {
    img: I5,
    title: "Coffee table",
  },
  {
    img: I6,
    title: "Coffee table",
  },
  {
    img: I8,
    title: "Coffee table",
  },
  ,
  {
    img: I10,
    title: "Coffee table",
  },
  {
    img: I13,
    title: "Coffee table",
  },
];

const GalleryContext = () => {
  var size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);
  return (
    <Box>
      <ImageList variant="masonry" cols={isResponsiveSize ? 2 : 3} gap={2}>
        {itemData.map((item) => (
          <ImageListItem
            style={{ backgroundColor: "white" }}
            className="rounded-md p-1"
            key={item.img}
          >
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export const Gallery = ({ topBarOn }) => {
  const size = Size();
  const isResponsiveSize = ["XS", "SM", "MD"].includes(size);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const RenderHeader = () => (
    <Slide in={true} timeout={2500}>
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
                className="text-center justify-center text-3xl mt-16"
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

  const RenderGallery = () => (
    <Fade in={true} timeout={2500}>
      <div>
        {topBarOn ? (
          <div>
            {isResponsiveSize ? (
              <div
                style={{
                  padding: "5pt",
                  opacity: "100%",
                }}
              >
                <GalleryContext />
              </div>
            ) : (
              <div
                style={{
                  padding: "5pt",
                  opacity: "100%",
                  margin: "0",
                }}
              >
                <GalleryContext />
              </div>
            )}
          </div>
        ) : (
          <div>
            {isResponsiveSize ? (
              <div
                style={{
                  padding: "5pt",
                  opacity: "100%",
                  margin: "0",
                }}
              >
                <GalleryContext />
              </div>
            ) : (
              <div
                style={{
                  padding: "5pt",
                  opacity: "100%",
                  margin: "0",
                }}
              >
                <GalleryContext />
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
          backgroundImage: image_2,
          backgroundSize: "cover",
          opacity: "100%",
          margin: 0,
          padding: 0,
          overflowX: "hidden",
        }}
      >
        <RenderHeader />
        <div className="p-2">
          <RenderGallery />
        </div>
      </div>
    </div>
  );
};
