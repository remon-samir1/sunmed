import React from "react";
import "./ContactForm.css";
import { Icon } from "@iconify/react";
const ContactForm = () => {
  return (
    <div className="ContactForm md:px-[7vw] py-7">
      <div className="text">
        <h3>Feel free to contact us</h3>
        <p>We are here to answer any question you may have</p>
      </div>
      <form>
        <div className="flex gap-8 mt-12 items-center md:flex-row flex-col">
          <div className="input-field">
            <input type="text" placeholder="First name*" />
          </div>
          <div className="input-field">
            <input type="text" placeholder="Last name*" />
          </div>
        </div>
        <div className="flex gap-8 mt-12 items-center md:flex-row flex-col">
          <div className="input-field">
            <input type="email" placeholder="Your email*" />
          </div>
          <div className="input-field">
            <input type="text" placeholder="Subject*" />
          </div>
        </div>
        <div className="input-field mt-12">
          <input type="text" placeholder="Message*" />
        </div>

        <button type="submit">
          <span>Send message</span>
          <Icon icon="iconamoon:send" width="24" height="24" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
