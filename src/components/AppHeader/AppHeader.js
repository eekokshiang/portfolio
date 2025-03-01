import React, { useState, useEffect } from "react";
import "./AppHeader.scss";

import GithubIcon from "../../assets/svgs/github-icon.svg";
import BehanceIcon from "../../assets/svgs/behance-icon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/svgs/linkedin-icon.svg";
import { ReactComponent as BackIcon } from "../../assets/svgs/back-icon.svg";
import { useLocation, useSearchParams } from "react-router-dom";

import useWindowSize from "../../hooks/useWindowResize";

const AppHeader = ({ onBack }) => {
  const { width } = useWindowSize();
  const location = useLocation();

  return (
    <div className="header-main-container">
      <div className="welcome-text-container">
        <p className="welcome-text">// Welcome to my resume</p>
        <p className="hiring-text">Available for Full-Time Opportunities</p>
      </div>

      <div className="header-content-container">
        {location.pathname === "/" ? (
          <div className="header-home">
            <div className="header-left-container">
              <p className="header-name">
                I’M <span>EE KOK SHIANG</span>
              </p>
              <p className="header-desc">A designer pursuing development.</p>
            </div>
            {width > 768 ? (
              <div className="header-right-container">
                <LinkedinIcon
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/ee-kok-shiang-44a292223/",
                      "_blank"
                    )
                  }
                  className="header-social-icon"
                />
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          // Header inside other pages
          <div className="header-path">
            <BackIcon onClick={onBack} className="header-back-button" />
            <p className="header-title">
              {location.pathname === "/about" && "/ ABOUT ME"}
              {location.pathname === "/portfolio" && "/ PORTFOLIO"}
              {location.pathname === "/contact" && "/ CONTACT"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppHeader;
