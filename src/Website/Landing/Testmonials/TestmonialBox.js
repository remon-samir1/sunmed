import { Icon } from "@iconify/react";
import React from "react";

const TestmonialBox = () => {
  return (
    <div className="TestmonialBox">
      <div className="img">
        <img
          src={require("../../../Images/testmonial.png")}
          alt="testmonial"
          loading="lazy"
        />
      </div>
      <div className="text">
        <p>
          Lorem ipsum dolor sit amet consectetur. Dictumst amet in duis feugiat
          id. Sed lectus ultricies elementum lectus.
        </p>
        <div className="flex justify-between items-center mt-4">
          <p>Janet Littel</p>
          <div className="flex flex-col items-center">
            <Icon
              icon="tdesign:logo-cnb-filled"
              width="18"
              height="18"
              className="icon"
            />
            <p>Lorem ipsim</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestmonialBox;
