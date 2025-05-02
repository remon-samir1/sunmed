import React, { useEffect, useRef } from "react";
import "./WithUs.css";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const WithUs = () => {
  const sectionRef = useRef(null);
  const formElementsRef = useRef([]);
  const telsRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const formElements = formElementsRef.current;
    const tels = telsRef.current;

    gsap.from(section.querySelector(".texts"), {
      scrollTrigger: {
        trigger: section.querySelector(".texts"),
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

    gsap.from(tels, {
      scrollTrigger: {
        trigger: tels,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  });

  return (
    <div className="bg-[#FAFAFA] pt-[18vh]" ref={sectionRef}>
      <div className="WithUs">
        <div className="flex justify-center items-start gap-[10vw] flex-wrap">
          <div className="flex-1">
            <div className="texts">
              <h3>INTERSTED IN DISCUSSING A PROJECT WITH US?</h3>
              <p className="mt-1">
                Do you have a project in mind, that you feel our approach would
                work well for?
              </p>
              <p className="mt-2">
                We’re always happy to discuss your project with you and put
                together a free proposal, just fill out the form below or give
                us a call to get started:
              </p>
            </div>

            <form>
              <div className="flex gap-8 mt-8 items-center md:flex-row flex-col">
                <div
                  className="input-field"
                  ref={(el) => (formElementsRef.current[0] = el)}
                >
                  <input type="text" placeholder="What’s your name? *" />
                </div>
                <div
                  className="input-field"
                  ref={(el) => (formElementsRef.current[1] = el)}
                >
                  <input
                    type="text"
                    placeholder="Your company ( if applicable )"
                  />
                </div>
              </div>
              <div className="flex gap-8 mt-8 items-center md:flex-row flex-col">
                <div
                  className="input-field"
                  ref={(el) => (formElementsRef.current[2] = el)}
                >
                  <input type="email" placeholder="Enter your email *" />
                </div>
                <div
                  className="input-field"
                  ref={(el) => (formElementsRef.current[3] = el)}
                >
                  <input
                    type="number"
                    placeholder="Enter your phone number *"
                  />
                </div>
              </div>
              <div
                className="textarae-field"
                ref={(el) => (formElementsRef.current[4] = el)}
              >
                <textarea
                  className="mt-8 h-32"
                  placeholder="Enter your message here... "
                />
              </div>
              <div
                className="form-control"
                ref={(el) => (formElementsRef.current[5] = el)}
              >
                <label htmlFor="image">
                  Send us your brief ( if applicable )
                </label>
                <input type="file" />
                <p className="mt-1">
                  Accepted file types: jpg, png, pdf, doc, ppt, docx.
                </p>
              </div>
              <p
                className="privacy"
                ref={(el) => (formElementsRef.current[6] = el)}
              >
                This form collects your contact information so that we can
                correspond with you. Check out our <span>privacy policy</span>{" "}
                for more information about how we protect and manage your data
              </p>
              <Link
                className="btn-hover"
                ref={(el) => (formElementsRef.current[7] = el)}
              >
                <span>SEND YOUR ENQUIRY</span>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634L21.044 2.32c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8l-8 6z"/></svg>
                </span>
              </Link>
            </form>
          </div>

          <div className="tels" ref={telsRef}>
            <p>
              Tel: <span>(+966) 535338760</span>
            </p>
            <p>
              Tel: <span>(+966) 535338760</span>
            </p>
            <p>
              Email: <span>info@sunmedmediaproduction.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithUs;
