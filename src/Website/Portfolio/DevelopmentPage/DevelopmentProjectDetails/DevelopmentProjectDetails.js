import React, { useEffect, useRef } from "react";
import "./DevelopmentProjectDetails.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";
import photo1 from "../../../../Images/webshow.png";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const DevelopmentProjectDetails = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const titlesRef = useRef(null);
  const itemRef = useRef(null);

  useGSAP(() => {
    const animateFromLeft = gsap.from(imageRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 70%",
        toggleActions: "play reverse play reverse",
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
        toggleActions: "play reverse play reverse",
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
        toggleActions: "play reverse play reverse",
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
        toggleActions: "play reverse play reverse",
      },
    });

    return () => {
      animateFromLeft.kill();
      animateFromRight.kill();
      animateTitles.kill();
      animateItems.kill();
    };
  });

  const images = new Array(8).fill({
    original: photo1,
    thumbnail: photo1,
  });

  return (
    <div className="DevelopmentProjectDetails px-[7vw] py-7">
      <div className="content">
        <div className="img" ref={imageRef}>
          <ReactImageGallery
            items={images}
            showBullets={false}
            showPlayButton={false}
          />
        </div>

        <div className="text" ref={textRef}>
          <h3>QuickSpace - Multipurpose agency WordPress Theme</h3>
          <p>By sunmed agency</p>

          <div className="flex flex-col mt-3">
            <button>
              <Icon icon="pajamas:eye" width="22" height="22" />
              <span>Live preview</span>
            </button>
            <button>
              <Icon
                icon="material-symbols-light:book-outline"
                width="30"
                height="30"
              />
              <span>Book now</span>
            </button>
          </div>

          <div className="details">
            <h4>Attributes</h4>

            <div className="container">
              <div className="titles" ref={titlesRef}>
                <span>File types</span>
                <span>Additions</span>
                <span>Compatible with</span>
                <span>Compatible version</span>
              </div>

              <div className="item" ref={itemRef}>
                <span>Css , Html js</span>
                <span>Responsive</span>
                <span>Bootstrap, Elementor</span>
                <span>Tested up </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="discription">
        <h3>Descriptions</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Urna neque nibh pretium hac eu
          turpis posuere. Erat sem adipiscing non vitae lacus pellentesque justo
          est. Non eu eu aliquet cras in a. Pharetra neque eleifend nulla
          adipiscing faucibus feugiat interdum nibh. Commodo erat nullam
          pharetra at mauris tincidunt lacus turpis elementum.
        </p>
      </div>
    </div>
  );
};

export default DevelopmentProjectDetails;
