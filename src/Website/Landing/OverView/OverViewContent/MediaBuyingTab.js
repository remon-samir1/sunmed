import React from "react";
import { Link } from "react-router-dom";
const MediaBuyingTab = () => {
  return (
    <div className="WebDevelopment">
      <div className="svg">
        <div className="flex flex-col items-start">
          <h4>BESPOKE SOLUTION</h4>
          <h5>Media Buying services</h5>
          <div className="w-[80vw] md:w-[35vw] mt-[5vh]">

          <img className="w-full h-full object-cover" src={require('../../../../Images/media-buying-about.png')} alt="media services" loading="lazy" />
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
        <Link className="link" to='/media-buying'>Media buying</Link>

      </div>
    </div>
  );
};

export default MediaBuyingTab;
