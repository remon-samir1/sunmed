import React from 'react';
import './ContactDetails.css'
import { Icon } from '@iconify/react';
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";

const ContactDetails = () => {
  return (
    <div className='ContactDetails px-[7vw] py-7'>
      <div className="text">
        <h3>
        Join our team to create the best digital business solutions
        </h3>
        <p>Something different Ready to get started</p>
        <button>Free consulting</button>
      </div>
      <div className="box">
        <h3>Contact us</h3>
        <div className='container'>
        <div className="item">
            <Icon
              icon="fluent:call-32-regular"
              width="24"
              height="24"
              className="icon"
            />
            <span>(+966) 535 338 760</span>
          </div>
          <div className="item">
            <Icon
              icon="fluent:call-32-regular"
              width="24"
              height="24"
              className="icon"
            />

            <span>+201006024005</span>
          </div>
          <div className="item">
            <AiOutlineMail className="icon mt-1" />
            <span>sales@winmarketagency.com</span>
          </div>
          <div className="item">
            <Icon
              icon="fluent:location-12-filled"
              width="24"
              height="24"
              className="icon"
            />
            <span>70 Abu Hayan Al Tawhid,AlHay Alsabea, Nasr city, Egypt</span>
          </div>
          <div className="item">
            <PiShoppingBagOpenFill className="icon" />
            <span>Sunday - Thursday from 9am - 5pm</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
