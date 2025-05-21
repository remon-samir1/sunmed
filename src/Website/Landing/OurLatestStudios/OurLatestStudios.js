
import React, { useState } from "react";
import "./OurLatestStudios.css";
import { Link } from "react-router-dom";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const OurLatestStudios = () => {
  const images = [
    { src: require("../../../Images/studio-1.png") },
    { src: require("../../../Images/studio-2.png") },
    { src: require("../../../Images/studio-3.png") },
    { src: require("../../../Images/studio-4.png") },
    { src: require("../../../Images/studio-5.png") },
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="OurLatestStudios px-[7vw] py-7">
      <div className="text">
        <h3 className="uppercase">Our latest studios</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Dictumst amet in duis feugiat
          id. Sed lectus ultricies elementum lectus.
        </p>
        <Link className="link" to="/renting-studio-page">
          GO TO STUDIO
        </Link>
      </div>

      <div className="images">
        <div className="top">
          {images.slice(0, 2).map((img, i) => (
            <div className="img" key={i}>
              <img
                src={img.src}
                alt={`studio-${i + 1}`}
                loading="lazy"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              />
            </div>
          ))}
        </div>
        <div className="down">
          {images.slice(2).map((img, i) => (
            <div className="img" key={i + 2}>
              <img
                src={img.src}
                alt={`studio-${i + 3}`}
                loading="lazy"
                onClick={() => {
                  setIndex(i + 2);
                  setOpen(true);
                }}
              />
            </div>
        ))}
        </div>
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={images}
          plugins={[Thumbnails, Zoom]}
        />
      )}
    </div>
  );
};

export default OurLatestStudios;

