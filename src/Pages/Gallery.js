import React, { useEffect } from "react";
import Fade from "@mui/material/Fade";
import { Slide } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { Size } from "components/Display/media-query";
import { pagetitlecolor, AppFont } from "components/Display/feutures";
import I1 from "Images/I1.jpg";
import I2 from "Images/I2.jpg";
import I3 from "Images/I3.jpg";
import I4 from "Images/I4.jpg";
import I5 from "Images/I5.jpg";
import I6 from "Images/I6.jpg";
import I7 from "Images/I7.jpg";
import I8 from "Images/I8.jpg";
import I9 from "Images/I9.jpg";
import I10 from "Images/I10.jpg";
import I11 from "Images/I11.jpg";
import I12 from "Images/I12.jpg";
import I13 from "Images/I13.jpg";
import I14 from "Images/I14.jpg";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const image_2 =
  "url('https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR_fY5XZMLuWjs_uMT7NBbGthDbHaOOeqWOFQMiMHI-yaeES2NmPA_6eU2iCCs7ffEQAIUwei-zVpLHculrWVPxyhs4gArgM1JigYY18Q')";

const itemData = [
  {
    img: I1,
    title: "Bed",
  },
  {
    img: I2,
    title: "Books",
  },
  {
    img: I3,
    title: "Sink",
  },
  {
    img: I4,
    title: "Kitchen",
  },
  {
    img: I5,
    title: "Blinds",
  },
  {
    img: I6,
    title: "Chairs",
  },
  {
    img: I7,
    title: "Laptop",
  },
  {
    img: I8,
    title: "Doors",
  },
  {
    img: I9,
    title: "Coffee",
  },
  {
    img: I10,
    title: "Storage",
  },
  {
    img: I11,
    title: "Candle",
  },
  {
    img: I12,
    title: "Coffee table",
  },
  {
    img: I13,
    title: "Coffee table",
  },
  {
    img: I14,
    title: "Coffee table",
  },
];

const GalleryContext = () => {
  return (
    <Box>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
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
    <Fade in={true} timeout={1500}>
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
