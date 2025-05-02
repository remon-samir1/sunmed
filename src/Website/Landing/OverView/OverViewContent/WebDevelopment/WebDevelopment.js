import React from "react";
import "./WebDevelopment.css";
import { Link } from "react-router-dom";
const WebDevelopment = () => {
  return (
    <div className="WebDevelopment">
      <div className="svg">
        <div className="flex flex-col items-start">
          <h4>BESPOKE SOLUTION</h4>
          <h5>Web Development</h5>
          <div className="w-[80vw] md:w-[35vw] mt-[5vh]">
            <img
              className="w-full h-full object-cover"
              src={require("../../../../../Images/web-development.png")}
              alt="web"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet consectetur. Consequat dui nulla nunc
          ullamcorper velit. Fermentum sagittis risus sed urna sit habitant nibh
          nec. Magna blandit eget consequat odio faucibus. Nec aliquam odio
          feugiat pulvinar malesuada. Sed massa at magna vel sed diam
          scelerisque facilisis dignissim.
        </p>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur. Consequat dui nulla nunc
            ullamcorper velit. Fermentum sagittis risus sed urna sit habitant
            nibh nec. Magna blandit eget consequat odio faucibus. Nec aliquam
            odio
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur. Consequat dui nulla nunc
            ullamcorper velit. Fermentum sagittis risus sed urna sit habitant
            nibh nec. Magna blandit eget consequat odio faucibus. Nec aliquam
            odio
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur. Consequat dui nulla nunc
            ullamcorper velit. Fermentum sagittis risus sed urna sit habitant
            nibh nec. Magna blandit eget consequat odio faucibus. Nec aliquam
            odio
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur. Consequat dui nulla nunc
            ullamcorper velit. Fermentum sagittis risus sed urna sit habitant
            nibh nec. Magna blandit eget consequat odio faucibus. Nec aliquam
            odio
          </li>
        </ul>
        <Link className="btn-hover" to="/web-solution">
          <span>Web Development</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M8 4v4H4V4zM2 2v8h8V2zm16 5v4h-4V7zm-6-2v8h8V5zM8 16v4H4v-4zm-6-2v8h8v-8z"
              />
              <path
                fill="currentColor"
                d="M22 10v6h-6v6h-6v8h20V10Zm-4 8h4v4h-4Zm-2 10h-4v-4h4Zm6 0h-4v-4h4Zm6 0h-4v-4h4Zm0-6h-4v-4h4Zm-4-6v-4h4v4Z"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default WebDevelopment;
