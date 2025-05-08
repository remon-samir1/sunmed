
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import { EducationDetailsData } from './EducationDetailsData';
import OurMediaProductionCard from '../../MediaProduction/OurMediaProduction/OurMediaProductionCard';

gsap.registerPlugin(ScrollTrigger);

const EducationDetails = () => {
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
        start: "top 50%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  });

  return (

    <div className='OurMediaProduction mediabuying' ref={sectionRef}>
      <div className="text">
        <h3 className='!w-[350px]'>EDUCATION SERVICES</h3>
        <p className='!w-[350px]'>We can offer the following services as part of our SEO campaigns:</p>
      </div>

      <div className="cards">
        {EducationDetailsData.map((data, key) => (
          <div
            key={key}
            ref={(el) => (cardsRef.current[key] = el)}
          >
            <OurMediaProductionCard title={data.title} disc={data.disc} icon={data.icon} />
          </div>
        ))}
      <div className="flex justify-center w-full md:justify-start items-center gap-4 mt-3">
      <Link className=" btn-hover">
            <span>START PROJECT</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="m85.333 160.617l128-74l.043.025L256 62l-42.667-24.666L42.667 136v197.333L85.333 358zm87.581 23.701l104.419-60.367l104.43 60.373l-104.419 60.368zm-23.581 35.651V346.05L256 407.716v-126.08zm256 126.081l-106.667 61.666V281.649l106.667-61.667zm-128-271.383L448 173.333v197.334l-170.667 98.667l-170.666-98.667V173.333z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </Link>
          <Link className="btn-hover">
            <span>FREE CONSULATION</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.5"
                height="30"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="m252.879 446.324l-94.223 25.247c-6.713 1.798-13.676-2.222-15.475-8.935c-1.798-6.712 2.222-13.676 8.934-15.474l94.223-25.247c6.713-1.798 13.676 2.221 15.475 8.934c1.8 6.713-2.222 13.676-8.934 15.475m-43.626-289.558c-.844 11.486-7.341 17.96-17.428 17.796c-10.043-.162-17.352-7.045-17.111-17.526c.234-10.198 6.628-16.897 17.505-16.778c10.87.117 16.258 6.54 17.034 16.508m120.795-38.71C292.565 56.148 218.325 26.069 149.354 46.22C88.995 63.856 49.64 103.71 35.33 165.003c-14.164 60.666 3.466 112.846 48.085 156.545c10.464 10.249 20.085 22.663 25.984 35.91c5.914 13.278 7.81 17.43 22.215 13.944c20.006-4.841 39.744-10.787 59.746-15.646c10.254-2.491 14.15-8.216 14.082-18.553c-.274-41.72-.182-83.443-.03-125.164c.033-9.444-2.935-17.22-13.096-17.456c-10.286-.239-13.435 7.277-13.349 16.905c.238 27.049.072 54.1.07 81.15c-.001 43.515 0 43.515-42.787 49.767c-16.266-18.638-31.078-35.392-45.653-52.351c-52.31-60.866-42.744-150.842 22.543-197.443c46.904-33.481 97.29-35.344 147.525-7.075c46.644 26.25 72.02 80.33 65.294 132.645c-4.493 34.948-21.181 62.845-45.933 86.826c-14.938 14.473-28.55 30.055-33.45 50.982c-2.292 9.788-7.78 14.643-17.262 16.98c1.772-1.647-102.202 27.486-102.202 27.486c-6.578 1.762-10.517 8.586-8.754 15.163l.271 1.017c1.763 6.577 8.586 10.517 15.164 8.755c0 0 119.3-32.058 120.864-32.501c11.048-3.05 17.061-10.915 17.313-22.141c.376-16.759 7.658-29.803 19.508-40.938c6.344-5.962 12.66-11.977 18.63-18.306c49.276-52.263 57.408-131.562 19.94-193.449z"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EducationDetails;
