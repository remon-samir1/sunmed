import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const BlogBox = () => {
  return (
    <Link className="blog" to='/single-blog'>
    <div className="img">
      <img src={require("../../../../Images/cairo.png")} loading='lazy' alt="blog" />
      <p>
        Lorem ipsum dolor sit amet consectetur. Consequat dui nulla nunc
        ullamcorper velit. Fermentum sagittis risus
      </p>
    </div>
    <div className="content">
      <div>

      <h3>
      Consectetur. Consequat dui nulla nunc ullamcosagittis risus
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur. Consequat dui nulla nunc
        ullamcorper velit. Fermentum sagittis risus sed urna sit
        habitant nibh nec. Magna blandit eget consequat odio faucibus.
        Nec aliquam odio feugiat pulvinar malesuada.
      </p>
      </div>
      <div className=" flex justify-between items-center">
        <span>By sunmed agency</span>
        <FaArrowRightLong className="icon" />
      </div>
    </div>
  </Link>
  );
}

export default BlogBox;
