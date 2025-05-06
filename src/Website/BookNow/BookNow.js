import React, { useEffect, useRef } from "react";
import Header from "../../Components/Header/Header";
import "./BookNow.css";
import { Icon } from "@iconify/react";
import Footer from "../../Components/Footer/Footer";
const BookNow = () => {
  const scrollRef = useRef
  (null)
  useEffect(()=>{
    scrollRef.current.scrollIntoView()
  }
,[])
  return (
    <div className="bg-[#fafafa]">
      <div ref={scrollRef}></div>

    <Header />
      <div className="BookNow px-[7vw] py-7">

      
        <div className="flex">
          <div className="flex-1">
          <div className="text">
          <h3>Start new project with us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. At ut in at libero integer
            risus. Magna at amet enim habitant sem volutpat aliquam duis nisi.
          </p>
        </div>
        <form>
        <div className="flex gap-8 mt-4 items-center md:flex-row flex-col">
          <div className="input-field">
            <input type="text" placeholder="Your name" />
            <Icon icon="basil:user-outline" width="24" height="24" className='icon'/>
          </div>
          <div className="input-field">
            <input type="text" placeholder="Email address*" />
            <Icon icon="ic:outline-email" width="24" height="24" className='icon'/>
          </div>
        </div>
        <div className="flex gap-8 mt-4 items-center md:flex-row flex-col">
          <div className="input-field">
            <select>
              <option selected>Select project type</option>
            </select>
          </div>
          <div className="input-field">
            <input type="number" placeholder="Phone number" />
            <Icon icon="mingcute:phone-fill" width="24" height="24" className='icon'/>
          </div>
        </div>
        <div className="input-field mt-4 !items-start">
          <textarea type="text" placeholder="Message" className="appearance-none h-32 " />
          <Icon icon="mynaui:message" width="24" height="24"  className='icon'/>
        </div>

        <button type="submit">
          <span>Send message</span>
          <Icon icon="iconamoon:send" width="24" height="24"className='icon' />
        </button>
      </form>
          </div>
          <div className="img">

            <img src={require('../../Images/book-now.png')} alt="book now" loading="lazy" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BookNow;
