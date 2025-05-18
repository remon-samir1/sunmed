// import React, { useEffect, useRef, useState } from "react";
// import Stories from "react-insta-stories";
// import image from "../../Images/media.png";
// import logo from "../../Images/story-logo.png";
// import { useNavigate } from "react-router-dom";
// import { Icon } from "@iconify/react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { Axios } from "../Helpers/Axios";

// const SingleStory = () => {
// const [data , setData] = useState([])
// useEffect(()=>{
// Axios.get('/stories').then(data=>console.log(data))

// }
// ,[])

//   const navigate = useNavigate();
//   const storyWrapperRef = useRef(null);
//   const bgRef = useRef(null);
//   const exitBtnRef = useRef(null);

//   const storyData = [
//     { title: "Sunmed Story ", image: image, logo: logo },
//     { title: "Sunmed Story", image: image, logo: logo },
//     { title: "Sunmed Story", image: image, logo: logo },
//   ];

//   //   GET API DATA
//   useEffect(() => {
//     Axios.get("/stories").then((data) => data);
//   }, []);

//   const storyContent = storyData.map((story, index) => ({
//     content: () => (
//       <div
//         style={{
//           width: "100%",
//           height: "100%",
//           position: "relative",
//           cursor: "pointer",
//         }}
//         key={index}
//       >

//         <img
//           src={story.image}
//           alt="blurred background"
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             filter: "blur(5px) brightness(0.6)",
//             zIndex: 0,
//           }}
//         />
//         <img
//           src={story.image}
//           alt="main story"
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: "90%",
//             maxHeight: "90%",
//             objectFit: "contain",
//             zIndex: 1,
//             borderRadius: 10,
//           }}
//         />
//         <div
//           style={{
//             position: "absolute",
//             top: 10,
//             left: 10,
//             display: "flex",
//             alignItems: "center",
//             gap: "10px",
//             padding: "6px 10px",
//             borderRadius: "20px",
//             zIndex: 2,
//           }}
//         >
//           <img
//             src={story.logo}
//             alt="profile"
//             style={{ width: 30, height: 30, borderRadius: "50%" }}
//           />
//           <span style={{ color: "#fff", fontWeight: "bold" }}>
//             {story.title}
//           </span>
//         </div>
//       </div>
//     ),
//   }));

//   useGSAP(() => {
//     gsap.from(storyWrapperRef.current, {
//       opacity: 0,
//       scale: 0.9,
//       duration: 0.6,
//       ease: "power3.out",
//     });

//     gsap.to(bgRef.current, {
//       backgroundPosition: "200% center",
//       duration: 20,
//       ease: "linear",
//       repeat: -1,
//     });
//   });

//   const handleExit = () => {
//     const tl = gsap.timeline({
//       onComplete: () => navigate("/portfolio"),
//     });

//     tl.to([storyWrapperRef.current, exitBtnRef.current], {
//       opacity: 0,
//       scale: 0.9,
//       duration: 0.4,
//       ease: "power3.out",
//       stagger: 0.0,
//     });
//   };

//   return (
//     <div
//       className="relative linear-bg h-[100dvh] overflow-hidden pt-6"
//       ref={bgRef}
//     >
//       <div
//         ref={exitBtnRef}
//         className="w-[2.8rem] z-50 h-[2.8rem] rounded-full bg-[#636572] absolute hidden  md:top-6   md:right-[20vw] md:flex justify-center items-center"
//       >
//         <button onClick={handleExit} className="text-white">
//           <Icon icon="dashicons:no" width="25" height="25" />
//         </button>
//       </div>

//       <div
//         ref={storyWrapperRef}
//         className="md:w-[30vw] w-[95vw] h-[90vh] m-auto  rounded-lg overflow-hidden"
//       >
//         <Stories stories={storyContent} width="100%" height="100%" />
//       </div>
//     </div>
//   );
// };

// export default SingleStory;
import React, { useEffect, useRef, useState } from "react";
import Stories from "react-insta-stories";
import Axios from "axios";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const StoryPage = () => {
  const [storyData, setStoryData] = useState([]);
    const storyWrapperRef = useRef(null);
  const bgRef = useRef(null);
  useGSAP(() => {
    gsap.from(storyWrapperRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      ease: "power3.out",
    });

    gsap.to(bgRef.current, {
      backgroundPosition: "200% center",
      duration: 20,
      ease: "linear",
      repeat: -1,
    });
  });
  useEffect(() => {
    Axios.get("https://sunmedagency.com/api/stories")
      .then((res) => {
        const stories = res.data?.data;

        const formattedStories = stories.flatMap((story) =>
          (Array.isArray(story.attachments) ? story.attachments : []).map(
            (url) => ({
              content: () => (
                <video
                  src={url}
                  autoPlay
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex:'10'
                  }}
                />
              ),
            })
          )
        );

        setStoryData(formattedStories);
      })
      .catch((err) => {
        console.error("Error loading stories:", err);
      });
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        // background: "black",
        position: "relative",
      }}
      ref={bgRef}
      className="px-[7vw] py-[2vh]  md:px-[10vw] z-50 overflow-hidden linear-bg "
    >
      <div className="absolute top-[5%] left-[12%] z-50 flex items-center gap-3">
        <div className="w-[50px] h-[50px]">
          <img
            src={require("../../Images/logo-story.png")}
            alt="story"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-white font-bold uppercase">Sunmed Story</span>
      </div>
      <Link to='/portfolio' className='absolute top-[5%] right-[1vw] md:right-[5vw] z-50 md:w-[35px] w-[25px] h-[25px]  md:h-[35px] rounded-full bg-gray-700  flex justify-center items-center'>
      <IoCloseSharp className="text-white md:w-[25px] w-[15px] md:h-[25px] h-[15px]"/>
      </Link>
      {storyData.length > 0 ? (
        <Stories
          stories={storyData}
          defaultInterval={8000}
          width="100%"
          height="100vh"
          
          loop
        />
      ) : (
        <p style={{ color: "white", textAlign: "center", paddingTop: "50vh" }}>
          Loading stories...
        </p>
      )}
    </div>
  );
};

export default StoryPage;
