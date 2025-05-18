
import React, { useEffect, useRef, useState } from 'react';

import montage from '../../../../../../../../Images/montage.png';
import vfx from '../../../../../../../../Images/vfx.png';
import animationImg from '../../../../../../../../Images/avaible-services.png';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import AvailableServicesBox from '../../../../MediaWorks/PostProduction/PostProductionPage/AvailableServices/AvailableServicesBox';
import { Axios } from '../../../../../../../../Components/Helpers/Axios';

gsap.registerPlugin(ScrollTrigger);

const AvaliblePMservices = () => {
    //  GET DATA
    const [data, setData] = useState([]);
    const [skeleton, setSkeleton] = useState(true);
    useEffect(() => {
      Axios.get("/services/13").then((data) => {
        setData(data.data.data);
        setSkeleton(false);
      });
    }, []);
  
    const avaible = data.availableService;
  const boxesRef = useRef([]);
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.from(boxesRef.current, {
      scrollTrigger: {
        trigger: boxesRef.current[0],
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 80,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out",
    });

    // Animate text
    gsap.from(textRef.current.children, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: -30,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  });

  return (
    <div className='AvailableServices py-7 px-[7vw]'>
      <div className="texts" ref={textRef}>
        <h3>Available services</h3>
        <p>Sunmed Project Management services</p>
      </div>
      <div className="flex justify-center items-center gap-6 mt-5 pb-9 flex-wrap lg:flex-nowrap">
      {avaible?.map((data, index) => (
          <div ref={(el) => (boxesRef.current[index] = el)}>
            <AvailableServicesBox
              img={data.image}
              text={data.name}
              icon={data.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvaliblePMservices;
