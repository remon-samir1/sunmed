import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import Header from "../../../../Components/Header/Header";
const SeoHero = () => {
  const [coords2, setCoords2] = useState({ x: 10, y: 0 });

  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const link1Ref = useRef(null);
  const link2Ref = useRef(null);

  const handleMouseMove2 = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords2({ x, y });
  };

  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,

      y: 50,
      delay: 1,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(paragraphRef.current, {
      opacity: 0,
      x: 100,
      duration: 1.5,
      delay: 0.5,
      ease: "power3.out",
    });

    gsap.from(link1Ref.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 1,
      ease: "power3.out",
    });

    gsap.from(link2Ref.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 1.2,
      ease: "power3.out",
    });
  });

  return (
    <div className="HeroSection SocialMediaHero overflow-hidden">
      <Header />
      <div className="content">
        <h1 className="uppercase md:!w-[60%] text-center " ref={titleRef}>Drive revenue with custom seo services</h1>
        <p className="md:max-w-[70%] font-medium !text-[0.9rem]" ref={paragraphRef}>
          Lorem ipsum dolor sit amet consectetur. Ac ridiculus porta
          pellentesque gravida at cursus cursus egestas. Quis congue quis at
          mattis. Ac scelerisque cras enim vel quis sed laoreet viverra.
        </p>

        <div className="flex justify-center items-center gap-7 flex-col md:flex-row  mt-3 md:mt-0">
          <Link
            ref={link2Ref}
            onMouseMove={handleMouseMove2}
            style={{
              backgroundImage: `radial-gradient(circle at ${coords2.x}px ${coords2.y}px, rgba(255,255,255,0.4), rgba(0,0,0,0) 40%)`,
            }}
            className="link"
          >
            Start project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeoHero;
