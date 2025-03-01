import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

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
  const [activeSection, setActiveSection] = useState("home");
  const { width } = useWindowSize();

  const navigateTo = (section) => {
    navigate(`/${section}`);
  };

  const goBack = () => {
    navigate("/");
  };

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
        ) : (
          ""
        )}

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
