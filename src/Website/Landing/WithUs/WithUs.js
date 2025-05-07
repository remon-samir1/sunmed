import React, { useContext, useEffect, useRef, useState } from "react";
import "./WithUs.css";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import axios from "axios";
import Loading from "../../../Components/Loading/loading";
import { toast } from "react-toastify";
import Notification from "../../../Components/Notification/Notification";
import LoadingContext, { LoadingCon } from "../../../Context/LoadingContext/LoadingContext";
// import LoadingContext from "../../../Context/LoadingContext/LoadingContext";

gsap.registerPlugin(ScrollTrigger);

const WithUs = () => {
  const LoadContext = useContext(LoadingCon)
  const setLoading = LoadContext.setLoading
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone_number: "",
    message: "",
    brief: "",
  });
  const sectionRef = useRef(null);
  const formElementsRef = useRef([]);
  const telsRef = useRef(null);
console.log(form);
const handelSubmit =async (e)=>{
e.preventDefault()
setLoading(true)

const formData = new FormData();
formData.append('name',form.name)
formData.append('company',form.company)
formData.append('email',form.email)
formData.append('phone_number',form.phone_number)
formData.append('message',form.message)
if (form.brief != ''){

  formData.append('brief',form.brief)
}
try{
 await axios.post('https://sunmedagency.com/api/contact-us' , formData).then(data=>{
setLoading(false)
 console.log(data)})
}catch(err){
  console.log(err);
setLoading(false)
toast.error(err.response.data.message)

}
}
  useGSAP(() => {
    const section = sectionRef.current;
    const formElements = formElementsRef.current;
    const tels = telsRef.current;

    gsap.from(section.querySelector(".texts"), {
      scrollTrigger: {
        trigger: section.querySelector(".texts"),
        start: "top 90%",
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
        start: "top 90%",
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
    <>
  

        <div id="with" className= " bg-[#FAFAFA] pt-[18vh] " ref={sectionRef} >
    <Notification/>
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

            <form onSubmit={handelSubmit}>
              <div className="flex gap-8 mt-8 items-center md:flex-row flex-col">
                <div
                  className="input-field"
                  ref={(el) => (formElementsRef.current[0] = el)}
                  >
                  <input required type="text" placeholder="What’s your name? *" name='name' value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})}/>
                </div>
                <div
                  className="input-field"
                  ref={(el) => (formElementsRef.current[1] = el)}
                >
                  <input
                    type="text"
                    placeholder="Your company ( if applicable )"
                    name='company' value={form.company} onChange={(e)=>setForm({...form,company:e.target.value})}
                    />
                </div>
              </div>
              <div className="flex gap-8 mt-8 items-center md:flex-row flex-col">
                <div
                  className="input-field"
                  ref={(el) => (formElementsRef.current[2] = el)}
                >
                  <input required type="email" placeholder="Enter your email *" name='email' value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
                </div>
                <div
                  className="input-field"
                  ref={(el) => (formElementsRef.current[3] = el)}
                >
                  <input
                  required
                    type="number"
                    placeholder="Enter your phone number *"
                    name='phone_number' value={form.phone_number} onChange={(e)=>setForm({...form,phone_number:e.target.value})}
                  />
                </div>
              </div>
              <div
                className="textarae-field"
                ref={(el) => (formElementsRef.current[4] = el)}
              >
                <textarea
                required
                  className="mt-8 h-32"
                  placeholder="Enter your message here... "
                  value={form.message} onChange={(e)=>setForm({...form , message:e.target.value})}
                />
              </div>
              <div
                className="form-control"
                ref={(el) => (formElementsRef.current[5] = el)}
              >
                <label htmlFor="image">
                  Send us your brief ( if applicable )
                </label>
                <input type="file" onChange={(e)=>setForm({...form,brief:e.target.files[0]})}/>
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
              <button
              type="submit"
                className="btn-hover"
                ref={(el) => (formElementsRef.current[7] = el)}
              >
                <span>SEND YOUR ENQUIRY</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634L21.044 2.32c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8l-8 6z"
                    />
                  </svg>
                </span>
              </button>
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
                </>
  );
};

export default WithUs;
