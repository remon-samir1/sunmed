import React from "react";
import "./WithUs.css";
import { Link } from "react-router-dom";
const WithUs = () => {
  return (
    <div className="bg-white pt-[18vh]">
      <div className="WithUs">
        <div className="flex justify-center items-start gap-[10vw] flex-wrap">
          <div className="flex-1 ">

          <div className="texts ">
            <h3>INTERSTED IN DISCUSSING A PROJECT WITH US?</h3>
            <p className="mt-1">
              Do you have a project in mind, that you feel our approach would
              work well for?
            </p>
            <p className="mt-2">
              We’re always happy to discuss your project with you and put
              together a free proposal, just fill out the from below or give us
              a call to get started:
            </p>
          </div>

         <form >
          <div className="flex gap-8 mt-8 items-center md:flex-row flex-col">
            <div className="input-field">

            <input type="text" placeholder="What’s your name? *" />
            </div>
            <div className="input-field">

            <input type="text" placeholder="Your company ( if applicable )" />
            </div>
          </div>
          <div className="flex gap-8 mt-8 items-center md:flex-row flex-col">
          <div className="input-field">

            <input type="email" placeholder="Enter your email *" />
            </div>
            <div className="input-field">

            <input type="number" placeholder="Enter your phone number *" />
            </div>
          </div>
          <div className="textarae-field">

          <textarea className="mt-8  h-32" placeholder="Enter your message here... " />

          </div>
          <div className="form-control">
            <label htmlFor="image">Send us your brief ( if applicable )</label>

            <input type="file" /> 
            <p className="mt-1">
            Accepted file types: jpg, png, pdf, doc, ppt, docx.

            </p>
          </div>

          <p className="privacy">
          This form collects your contact information so that we can correspond with you. Check out our <span> privacy policy</span> for more information about how we protect and manage your data
          </p>
        <Link className="link">SEND YOUR ENQUIRY</Link>

         </form>








          </div>
         <div className="tels">
            <p>
              Tel: <span> (+966) 535338760</span>
            </p>
            <p>
              Tel: <span> (+966) 535338760</span>
            </p>
            <p>
              Email: <span>info@sunmedmediaproduction.comspan</span>{" "}
            </p>
          </div>
         </div>

      </div>
    </div>
  );
};

export default WithUs;
