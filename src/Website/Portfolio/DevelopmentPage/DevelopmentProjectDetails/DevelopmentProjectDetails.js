import React, { useEffect, useRef, useState } from "react";
import "./DevelopmentProjectDetails.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";
import photo1 from "../../../../Images/webshow.png";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link, useParams } from "react-router-dom";
import { Axios } from "../../../../Components/Helpers/Axios";

gsap.registerPlugin(ScrollTrigger);

const DevelopmentProjectDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const titlesRef = useRef(null);
  const itemRef = useRef(null);
  useEffect(() => {
    Axios.get("/projects").then((data) => setData(data.data.data));
  }, []);

  const filter = data.filter((data) => data.id == id);
  function Description({ description }) {
    const cleanText = description?.replace(/<[^>]+>/g, "");

    return <p>{cleanText}</p>;
  }


  useGSAP(() => {
    const animateFromLeft = gsap.from(imageRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        // toggleActions: "play reverse play reverse",
      },
    });

    const animateFromRight = gsap.from(textRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        // toggleActions: "play reverse play reverse",
      },
    });

    const animateTitles = gsap.from(titlesRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titlesRef.current,
        start: "top 90%",
        // toggleActions: "play reverse play reverse",
      },
    });

    const animateItems = gsap.from(itemRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: itemRef.current,
        start: "top 90%",
        // toggleActions: "play reverse play reverse",
      },
    });

    return () => {
      animateFromLeft.kill();
      animateFromRight.kill();
      animateTitles.kill();
      animateItems.kill();
    };
  });

  const images =
  filter.length > 0 && Array.isArray(filter[0].attachments)
    ? filter[0].attachments.map((url) => ({
        original: url,
        thumbnail: url,
      }))
    : []; 


  return (
    <div className="DevelopmentProjectDetails px-[7vw] py-7">
      <div className="content">
        <div className="img" ref={imageRef}>
          <ReactImageGallery
            items={images && images}
            showBullets={false}
            showPlayButton={false}
          />
        </div>

        <div className="text" ref={textRef}>
          <h3>{filter[0]?.title}</h3>
          <p>By sunmed agency</p>

          <div className="flex flex-col mt-3">
            <a target="_blank" href={filter[0]?.url} className="button">
              <Icon icon="pajamas:eye" width="22" height="22" />
              <span>Live preview</span>
            </a>
            <Link className="button" to="/bookNow">
              <Icon
                icon="material-symbols-light:book-outline"
                width="30"
                height="30"
              />
              <span>Book now</span>
            </Link>
          </div>

          <div className="details">
            <h4>Attributes</h4>

            <div className="container">
              <div className="titles" ref={titlesRef}>
                {filter[0]?.attributes.map((data, index) => (
                  <span>{data.key}</span>
                ))}
              </div>
              <div className="item" ref={itemRef}>
              {filter[0]?.attributes.map((data, index) => (
                  <span>{data.value}</span>
                ))}
              </div>

          
            </div>
          </div>
        </div>
      </div>
      <div className="discription">
        <h3>Descriptions</h3>

        <p  dangerouslySetInnerHTML={{__html: filter[0]?.description}}></p>

      </div>
    </div>
  );
};

export default DevelopmentProjectDetails;
