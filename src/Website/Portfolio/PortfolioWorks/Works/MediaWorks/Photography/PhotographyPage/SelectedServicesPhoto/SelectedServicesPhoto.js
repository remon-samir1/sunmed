import React from "react";

const SelectedServicesPhoto = () => {
  return (
    <div className="SelectedServices py-7 px-[7vw]">
      <div className="text">
        <h3>SELECTED WORK</h3>
      </div>
      <div className="imgs-container">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="img" key={index}>
            <img
              src={require("../../../../../../../../Images/post-1.png")}
              alt="post"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center py-8">
        <div className="normal-btn text">
          LAOD MORE
        </div>
      </div>
    </div>
  );
};

export default SelectedServicesPhoto;
