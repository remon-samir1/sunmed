import React from "react";
import "./Blogs.css";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
const Blogs = () => {
  return (
    <>
    <div className="custom-blog">
      <Header />
      <div className="contnet px-[7vw] py-5">
        <div className="head">
          <Link  to='/media-production' className="link">Media production</Link>
          <h4>The best 5 video production service in egypt</h4>
        </div>
        <div className="img">
          <img
            src={require("../../Images/cairo.png")}
            alt="blog"
            loading="lazy"
          />
        </div>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. Id tortor turpis nec massa.
          Aliquam amet eu in enim nunc pellentesque. Non amet suspendisse nec
          sodales risus laoreet diam. Nullam amet in pretium vel. Sed accumsan
          quis lacinia scelerisque pharetra dictumst maecenas laoreet. Urna
          faucibus facilisis et nulla vitae. Eu in tortor ullamcorper aliquam
          feugiat in. <br />
          <span>
            Lorem ipsum dolor sit amet consectetur. Id tortor turpis nec massa.
            maecenas laoreet. Urna faucibus facilisis et nulla vitae. Eu in
            tortor ullamcorper aliquam feugiat in.
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur. Id tortor turpis nec massa.
            maecenas laoreet. Urna faucibus facilisis et nulla vitae. Eu in
            tortor ullamcorper aliquam feugiat in.
          </span>
        </p>
        <h4>Best video production service in egypt</h4>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. Ante et semper proin id varius
          porttitor mauris. suspendisse lorem urna venenatis adipiscing at
          lacus. In gravida pulvinar fames nibh morbi nunc semper neque.
          Convallis egestas et mi at sem condimentum lobortis pretium.
        </p>
        <h4>
          How our company worked to provide video production services in Egypt
        </h4>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. Ante et semper proin id varius
          porttitor mauris. suspendisse lorem urna venenatis adipiscing at
          lacus. In gravida pulvinar fames nibh morbi nunc semper neque.
          Convallis egestas et mi at sem condimentum lobortis pretium.
        </p>
        <div className="side-img">
          <img
            src={require("../../Images/cairo.png")}
            alt="blog"
            loading="lazy"
          />
        </div>
        <h4>
          Here are the most important points that the company is working on to
          provide video production services in Egypt:
        </h4>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. Ante et semper proin id varius
          porttitor mauris. suspendisse lorem urna venenatis adipiscing at
          lacus. In gravida pulvinar fames nibh morbi nunc semper neque.
          Convallis egestas et mi at sem condimentum lobortis pretium.
        </p>
        <ul>
          <li>
            <span>Creativity and uniqueness:</span> The best video production
            services in Egypt relied on a team of talented professionals in the
            field of artistic production and visual effects, which made them
            distinguished by their creativity and uniqueness in providing unique
            visual stories.
          </li>
          <li>
            <span>High quality:</span>The company was keen to employ the latest
            technologies and use high-quality equipment to ensure video
            production of outstanding quality, The company takes care of every
            part of the production process to deliver flawless results.
          </li>
          <li>
            <span>Customizing solutions:</span>The company understands the
            importance of understanding the customer’s needs, and provides
            customized solutions that fit your goals and vision. Every project
            of the company is treated with a unique approach to achieve customer
            satisfaction.
          </li>
          <li>
            <span>Creative Collaboration:</span>Our company is a center for
            creative collaboration, providing an interactive environment for
            customers to participate in the creative process and determine the
            direction of the video, This interaction contributes to achieving a
            unique balance between the customer’s vision and the company’s
            expertise.
          </li>
          <li>
            <span>Digital Marketing:</span>We have sufficient experience in the
            field of digital marketing to provide inspiring promotional videos,
            The company combined the technical and marketing aspects to produce
            content that attracts attention and achieves marketing goals.
          </li>
          <li>
            <span>Wide Range of Services:</span> Sunmed has provided a wide
            range of video production services, from TV commercials to awareness
            videos and social media content, This wide range allows the company
            to meet diverse needs.
          </li>
        </ul>
      </div>
    </div>
    <Footer/>

    </>
  );
};

export default Blogs;

