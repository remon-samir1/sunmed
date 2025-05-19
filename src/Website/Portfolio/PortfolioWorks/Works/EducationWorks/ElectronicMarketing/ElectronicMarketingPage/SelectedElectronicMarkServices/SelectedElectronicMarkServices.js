import React, { useEffect, useRef, useState } from "react";
import { Axios } from "../../../../../../../../Components/Helpers/Axios";

const SelectedElectronicMarkServices = () => {

  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    Axios.get("/projects").then((data) => setData(data.data.data));
  }, []);

  const filter = data.filter((data) => data.id == 11);

const titleRef = useRef()
  const isImage = (url) => /\.(jpg|jpeg|png|gif|webp)$/i.test(url);
  const isVideo = (url) => /\.(mp4|webm|ogg)$/i.test(url);
  const Images = filter[0]?.attachments || [];
  const imagesToDisplay = showAll ? Images : Images.slice(0, 6);
  return (
    <div className="SelectedServices py-7 px-[7vw]">
      <div className="text">
        <h3 ref={titleRef}>SELECTED WORK</h3>
      </div>
      <div className="imgs-container">
      {imagesToDisplay?.map((data, index) => {
          if (isImage(data)) {
            return (
              <div
                className="img"
                key={index}
              >
                <img src={data} alt="media" loading="lazy" />
              </div>
            );
          } else if (isVideo(data)) {
            return (
              <div
                className="img"
                key={index}
              >
                <video src={data} controls className="w-full rounded-lg" />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="flex justify-center items-center py-8">
      {Images.length > 6 && (
        <div className="flex justify-center items-center py-7">
          <button
            onClick={() =>{ setShowAll((prev) => !prev)
            showAll &&  titleRef.current.scrollIntoView()
            }}
            className="normal-btn"
          >
            {showAll ? "SHOW LESS" : "LOAD MORE"}
          </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default SelectedElectronicMarkServices;
