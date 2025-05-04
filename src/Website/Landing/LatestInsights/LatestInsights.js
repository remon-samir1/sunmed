import "./LatestInsights.css";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const LatestInsights = () => {
  return (
    <div className="LatestInsights px-[7vw] py-[5vh]">
      <div className="text">
        <h2>Read our news</h2>
        <h3 className="uppercase">Latest insights </h3>
      </div>

      <div className="blogs">
        <Link className="main-blog" to='/blog'>
          <div className="img">
            <img src={require("../../../Images/cairo.png")} alt="blog" />
            <p>
              Lorem ipsum dolor sit amet consectetur. Consequat dui nulla nunc
              ullamcorper velit. Fermentum sagittis risus
            </p>
          </div>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur. Consequat dui nulla nunc
              ullamcorper velit. Fermentum sagittis risus sed urna sit habitant
              nibh nec. Magna blandit eget consequat odio faucibus. Nec aliquam
              odio feugiat pulvinar malesuada. Sed massa at magna vel sed diam
              scelerisque facilisis dignissim.
            </p>
            <div className="mt-6 flex justify-between items-center">
              <span>By sunmed agency</span>
              <FaArrowRightLong className="icon" />
            </div>
          </div>
        </Link>
        <div className="second-blogs">
          <Link className="blog" to='/blog'>
            <div className="img">
              <img src={require("../../../Images/cairo.png")} alt="blog" />
              <p>
                Lorem ipsum dolor sit amet consectetur. Consequat dui nulla nunc
                ullamcorper velit. Fermentum sagittis risus
              </p>
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur. Consequat dui nulla nunc
                ullamcorper velit. Fermentum sagittis risus sed urna sit
                habitant nibh nec. Magna blandit eget consequat odio faucibus.
                Nec aliquam odio feugiat pulvinar malesuada.
              </p>
              <div className="mt-12 flex justify-between items-center">
                <span>By sunmed agency</span>
                <FaArrowRightLong className="icon" />
              </div>
            </div>
          </Link>

          <Link className="blog" to='/blog'>
            <div className="img">
              <img src={require("../../../Images/cairo.png")} alt="blog" />
              <p>
                Lorem ipsum dolor sit amet consectetur. Consequat dui nulla nunc
                ullamcorper velit. Fermentum sagittis risus
              </p>
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur. Consequat dui nulla nunc
                ullamcorper velit. Fermentum sagittis risus sed urna sit
                habitant nibh nec. Magna blandit eget consequat odio faucibus.
                Nec aliquam odio feugiat pulvinar malesuada.
              </p>
              <div className="mt-12 flex justify-between items-center">
                <span>By sunmed agency</span>
                <FaArrowRightLong className="icon" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestInsights;
