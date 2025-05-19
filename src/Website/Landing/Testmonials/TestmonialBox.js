import { Icon } from "@iconify/react";
import React from "react";

const TestmonialBox = ({name , img , content}) => {
  return (
    <div className="TestmonialBox">
      <div className="img">
        <img
          src={img}
          alt="testmonial"
          loading="lazy"
        />
      </div>
      <div className="text">
        <p dangerouslySetInnerHTML={{__html:content.slice(0,120)}}>
        </p>
        <div className="flex justify-between items-center mt-4">
          <p>{name}</p>
          <div className="flex flex-col items-center">
            <Icon
              icon="tdesign:logo-cnb-filled"
              width="18"
              height="18"
              className="icon"
            />
            {/* <p>Lorem ipsim</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestmonialBox;
