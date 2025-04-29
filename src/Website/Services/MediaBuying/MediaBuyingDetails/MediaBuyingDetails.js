
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import OurMediaProductionCard from '../../MediaProduction/OurMediaProduction/OurMediaProductionCard';
import { MediaBuyingDetailsData } from './MediaBuyingDetailsData';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const MediaBuyingDetails = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    gsap.from(section.querySelector(".text h3"), {
      scrollTrigger: {
        trigger: section.querySelector(".text h3"),
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(cards, {
      scrollTrigger: {
        trigger: section.querySelector(".cards"),
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (

    <div className='OurMediaProduction' ref={sectionRef}>
      <div className="text">
        <h3 className='!w-[350px]'>OUR MEDIA BUYING SERVICES</h3>
        <p className='!w-[350px]'>We can offer the following services as part of our SEO campaigns:</p>
      </div>

      <div className="cards">
        {MediaBuyingDetailsData.map((data, key) => (
          <div
            key={key}
            ref={(el) => (cardsRef.current[key] = el)}
          >
            <OurMediaProductionCard title={data.title} disc={data.disc} icon={data.icon} />
          </div>
        ))}
      <div className="flex justify-center w-full md:justify-start items-center gap-4 mt-3">
          <Link className="btn">START PROJCET</Link>
          <Link className="btn">FREE CONSULATION</Link>
        </div>
      </div>
    </div>
  );
}

export default MediaBuyingDetails;
