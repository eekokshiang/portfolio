import React, { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import useWindowSize from "../../hooks/useWindowResize";

import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import NotFound from "../NotFound/NotFound";

import AppHeader from "../../components/AppHeader/AppHeader";
import HomePanel from "../../components/HomePanel/HomePanel";

import { ReactComponent as LinkedinIcon } from "../../assets/svgs/linkedin-icon.svg";

import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { width } = useWindowSize();

  const navigateTo = (section) => {
    navigate(`/${section}`);
  };

  const goBack = () => {
    navigate("/");
  };

  // ✅ List of valid paths (prevents NotFound from showing incorrectly)
  const validPaths = ["/", "/about", "/portfolio", "/contact"];
  const isValidPath = validPaths.includes(location.pathname);

  return (
    <div className="home-main-container">
      <div className="home-main-wrapper">
        <AppHeader activeSection={location.pathname} onBack={goBack} />

        {location.pathname === "/" && (
          <div className="home-panel-wrapper">
            <HomePanel
              title="ABOUT ME ///"
              onClick={() => navigateTo("about")}
            />
            <HomePanel
              title="PORTFOLIO ///"
              onClick={() => navigateTo("portfolio")}
              icon="square"
            />
            <HomePanel
              title="CONTACT ///"
              onClick={() => navigateTo("contact")}
              icon="diamond"
            />
          </div>
        )}

        {location.pathname === "/" && width < 768 ? (
          <LinkedinIcon
            className="header-social-icon"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/ee-kok-shiang-44a292223/",
                "_blank"
              )
            }
          />
        ) : null}

        {/* ✅ Only show <Routes> if the path is valid */}
        {isValidPath ? (
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        ) : (
          <NotFound /> // ✅ Show NotFound only for wrong paths
        )}
      </div>
    </div>
  );
};

export default Home;
