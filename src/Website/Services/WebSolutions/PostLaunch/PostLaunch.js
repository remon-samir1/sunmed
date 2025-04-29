import React from "react";
import "./PostLaunch.css";
import { Icon } from "@iconify/react";
const PostLaunch = () => {
  return (
    <div className="PostLaunch px-[3vw] md:px-[7vw] py-7">
      <div className="text">
        <p>We’ve got you covered</p>
        <h3>Post launch</h3>
      </div>
      <div className="flex items-start gap-4 mt-6 ">
        <div className="links">
          <button className="link">
            <div>

            <Icon
              icon="game-icons:falling-star"
              className="icon"
              width="32"
              height="32"
              />
            <span>Hosting</span>
              </div>
          </button>
          <button className="link">
            <div>

            <Icon icon="ix:support" className="icon" width="32" height="32" />
            <span>Support services</span>
            </div>
          </button>
          <button className="link">
            <div>
              
            <Icon
              icon="grommet-icons:plan"
              className="icon"
              width="32"
              height="32"
              />
            <span>Monthly care plans</span>
              </div>
          </button>

          <button className="link">
          <div>
            <Icon icon="jam:messages" className="icon" width="32" height="32" />
            <span>Our portal</span>
          </div>
          </button>
        </div>
        <div className="content px-4">
          <p>Managed & Supported</p>
          <h3>Hosting solution</h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur. In semper lorem consequat
            aenean bibendum at nam. Aliquet amet porttitor neque ridiculus.
            Velit integer ultricies velit vitae eget tellus nulla tempor.
            <br />
             <span className="mt-3 inline-block">

            Lorem ipsum dolor sit amet consectetur. Dictum ultrices pharetra cum
            in velit dui tellus et risus. Non ipsum in ornare gravida sed eget
            amet in lectus. Sed suspendisse faucibus felis ultricies mollis mi
            lectus. Ut purus varius ornare enim nisl sem. Rhoncus turpis ut
            dignissim condimentum diam enim donec volutpat. Amet auctor eleifend
            augue sagittis. Velit rhoncus id lacus massa arcu.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostLaunch;
