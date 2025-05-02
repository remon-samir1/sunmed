

import React, { useRef } from "react";
import "./ContactForm.css";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const formElementsRef = useRef([]);

  useGSAP(() => {
    const section = sectionRef.current;
    const formElements = formElementsRef.current;

    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(formElements, {
      scrollTrigger: {
        trigger: section.querySelector("form"),
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  });

  return (
    <div className="ContactForm md:px-[7vw] py-7" ref={sectionRef}>
      <div className="text" ref={textRef}>
        <h3>Feel free to contact us</h3>
        <p>We are here to answer any question you may have</p>
      </div>

      <form>
        <div className="flex gap-8 mt-12 items-center md:flex-row flex-col">
          <div
            className="input-field"
            ref={(el) => (formElementsRef.current[0] = el)}
          >
            <input type="text" placeholder="First name*" />
          </div>
          <div
            className="input-field"
            ref={(el) => (formElementsRef.current[1] = el)}
          >
            <input type="text" placeholder="Last name*" />
          </div>
        </div>
        <div className="flex gap-8 mt-12 items-center md:flex-row flex-col">
          <div
            className="input-field"
            ref={(el) => (formElementsRef.current[2] = el)}
          >
            <input type="email" placeholder="Your email*" />
          </div>
          <div
            className="input-field"
            ref={(el) => (formElementsRef.current[3] = el)}
          >
            <input type="text" placeholder="Subject*" />
          </div>
        </div>
        <div
          className="input-field mt-12"
          ref={(el) => (formElementsRef.current[4] = el)}
        >
          <input type="text" placeholder="Message*" />
        </div>

        <button
          type="submit"
          ref={(el) => (formElementsRef.current[5] = el)}
        >
          <span>Send message</span>
          <Icon icon="iconamoon:send" width="24" height="24" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
