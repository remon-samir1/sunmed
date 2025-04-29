// import { Link } from "react-router-dom";
// import React from "react";

// const SeoDivider = () => {
//   return (
//     <div className="divider-conrainer">
//       <div className="Divider">
//         <div>

//         <h3>
//           SEO CHECKER
        
//         </h3>
//         <span >
//             Lorem ipsum dolor sit amet consectetur. Dictumst amet in duis
//             feugiat id. Sed lectus ultricies elementum viverra lectus.
//           </span>
//         </div>
//         <Link className="link">CHECK MY SEO NOW</Link>
//       </div>


//       <p className="down-text">

//       Elevate your brands visibility with our comprehensive and strategic SEO process.
// We understand that navigating the world of search engines can be daunting but fear not
// Our expert team is here to guide you through every phase
//       </p>
//     </div>
//   );
// };

// export default SeoDivider;
import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SeoDivider = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const el = containerRef.current;

  
    gsap.fromTo(
      el.querySelector(".down-text"),
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el.querySelector(".down-text"),
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return (
    <div className="divider-conrainer" ref={containerRef}>
      <div className="Divider">
        <div>
          <h3>SEO CHECKER</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur. Dictumst amet in duis
            feugiat id. Sed lectus ultricies elementum viverra lectus.
          </span>
        </div>
        <Link className="link">CHECK MY SEO NOW</Link>
      </div>

      <p className="down-text">
        Elevate your brands visibility with our comprehensive and strategic SEO
        process. We understand that navigating the world of search engines can
        be daunting but fear not Our expert team is here to guide you through
        every phase
      </p>
    </div>
  );
};

export default SeoDivider;
