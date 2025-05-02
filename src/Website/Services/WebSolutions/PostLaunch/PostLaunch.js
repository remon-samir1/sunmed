import React, { useState } from "react";
import "./PostLaunch.css";
import { Icon } from "@iconify/react";
import HostContent from "./PostLaunchContent/HostContent";
import SupportContent from "./PostLaunchContent/SupportContent";
import MonthlyCareContent from "./PostLaunchContent/MonthlyCareContent";
import PortalContent from "./PostLaunchContent/PortalContent";
const PostLaunch = () => {
  const [content, setContent] = useState("host");
  return (
    <div className="PostLaunch px-[3vw] md:px-[7vw] py-7">
      <div className="text">
        <p>We’ve got you covered</p>
        <h3>Post launch</h3>
      </div>
      <div className="flex items-start gap-4 mt-6 ">
        <div className="links">
          <button
            className={`link ${content === "host" && "active"}`}
            onClick={() => setContent("host")}
          >
            <div>
              <Icon
                icon="game-icons:falling-star"
                className="icon"
                width="32"
                height="32"
              />
              <span>Hosting</span>
            </div>
          </button>
          <button
            className={`link ${content === "support" && "active"}`}
            onClick={() => setContent("support")}
          >
            <div>
              <Icon icon="ix:support" className="icon" width="32" height="32" />
              <span>Support services</span>
            </div>
          </button>
          <button
            className={`link ${content === "plans" && "active"}`}
            onClick={() => setContent("plans")}
          >
            <div>
              <Icon
                icon="grommet-icons:plan"
                className="icon"
                width="32"
                height="32"
              />
              <span>Monthly care plans</span>
            </div>
          </button>

          <button
            className={`link ${content === "portal" && "active"}`}
            onClick={() => setContent("portal")}
          >
            <div>
              <Icon
                icon="jam:messages"
                className="icon"
                width="32"
                height="32"
              />
              <span>Our portal</span>
            </div>
          </button>
        </div>
        {content === "host" ? (
          <HostContent />
        ) : content === "support" ? (
          <SupportContent />
        ) : content === "plans" ? (
          <MonthlyCareContent />
        ) : (
          content === "portal" && <PortalContent />
        )}
      </div>
    </div>
  );
};

export default PostLaunch;
