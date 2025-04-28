
import React, { useEffect, useRef } from 'react';
import OurMediaProductionCard from './OurMediaProductionCard';
import './OurMediaProduction.css';
import { OurMediaProductionCardData } from './OurMediaProductionCardData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const OurMediaProduction = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    // Animation for the heading
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
        <h3>OUR MEDIA PRODUCTION SERVICES</h3>
      </div>

      <div className="cards">
        {OurMediaProductionCardData.map((data, key) => (
          <div
            key={key}
            ref={(el) => (cardsRef.current[key] = el)}
          >
            <OurMediaProductionCard title={data.title} disc={data.disc} icon={data.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurMediaProduction;
