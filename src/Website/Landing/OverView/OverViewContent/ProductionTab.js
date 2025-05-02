import React from "react";
import { Link } from "react-router-dom";
const ProductionTab = () => {
  return (
    <div className="WebDevelopment">
      <div className="svg">
        <div className="flex flex-col items-start">
          <h4>BESPOKE SOLUTION</h4>
          <h5>Media production</h5>
          <div className="w-[80vw] md:w-[35vw] mt-[5vh]">
            <img
              className="w-full h-full object-cover"
              src={require("../../../../Images/media-services.png")}
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
        <Link className="btn-hover" to="media-production">
          <span>Media Production</span>
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
                d="M11 4H9v18h2zm8 3h-2v12h2zM7 8.8H5v8h2zm6 .2h2v8h-2zm8 1.8h2v4h-2zm-18 0H1v4h2z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProductionTab;
