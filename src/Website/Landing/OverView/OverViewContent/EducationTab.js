import React from "react";
import { Link } from "react-router-dom";
const EducationTab = () => {
  return (
    <div className="WebDevelopment">
      <div className="svg">
        <div className="flex flex-col items-start">
          <h4>BESPOKE SOLUTION</h4>
          <h5>Education management services</h5>
          <div className="w-[80vw] md:w-[35vw] mt-[5vh]">
            <img
              className="w-full h-full object-cover"
              src={require("../../../../Images/seo.png")}
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
        <Link className="btn-hover" to="/seo">
          <span>Seo</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12.404 8.303l3.431 3.327c.22.213.22.527 0 .74l-6.63 6.43C8.79 19.201 8 18.958 8 18.43v-5.723z"
              />
              <path
                fill="currentColor"
                d="M8 11.293V5.57c0-.528.79-.771 1.205-.37l2.481 2.406z"
                opacity="0.5"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default EducationTab;
