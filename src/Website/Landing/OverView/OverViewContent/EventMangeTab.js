import React from "react";
import { Link } from "react-router-dom";
const EventMangeTab = () => {
  return (
    <div className="WebDevelopment">
      <div className="svg">
        <div className="flex flex-col items-start">
          <h4>BESPOKE SOLUTION</h4>
          <h5>Event management</h5>
          <div className="w-[80vw] md:w-[35vw] mt-[5vh]">
            <img
              className="w-full h-full object-cover"
              src={require("../../../../Images/media-buying-about.png")}
              alt="media services"
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
        <Link className="btn-hover" to="/media-buying">
          <span>Media buying</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="m14.331 7l3.5 5l-3.5 5h-3.052l3.5-5l-3.5-5z"
                clip-rule="evenodd"
              />
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="m8.331 7l3.5 5l-3.5 5H5.279l3.5-5l-3.5-5z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default EventMangeTab;
