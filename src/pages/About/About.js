import React from "react";

import "./About.scss";

import PFP from "../../assets/pngs/pfp.jpg";
import { ReactComponent as NineDotsIcon } from "../../assets/svgs/nine-dots-icon.svg";
import { ReactComponent as DoubleDashIcon } from "../../assets/svgs/doubledash-icon.svg";
import { ReactComponent as MiniDiamondIcon } from "../../assets/svgs/mini-diamond-shape.svg";
import PsIcon from "../../assets/svgs/ps-icon.svg";
import AiIcon from "../../assets/svgs/ai-icon.svg";
import XdIcon from "../../assets/svgs/xd-icon.svg";
import FigmaIcon from "../../assets/svgs/figma-icon.svg";
import CspIcon from "../../assets/svgs/csp-icon.svg";
import TwoDIcon from "../../assets/svgs/2d-icon.svg";
import ReactIcon from "../../assets/svgs/reactjs-icon.svg";
import JsIcon from "../../assets/svgs/js-icon.svg";
import ScssIcon from "../../assets/svgs/sass-icon.svg";
import WebDesignIcon from "../../assets/svgs/web-icon.svg";
import PrototypeIcon from "../../assets/svgs/prototype-icon.svg";
import CryptoIcon from "../../assets/svgs/bitcoin-icon.svg";
import ChatgptIcon from "../../assets/svgs/chatgpt-icon.svg";
import ShirtDesignIcon from "../../assets/svgs/shirt-icon.svg";
import CharcDesignIcon from "../../assets/svgs/character-icon.svg";

const About = () => {
  const experienceContent = [
    {
      position: "UI/UX Designer",
      desc: (
        <>
          Worked on landing page <span className="text-bold">designs</span>,
          layout designs, and application or website user flows, with a special
          focus on designing a social media & financial application.
        </>
      ),
    },
    {
      position: "Junior Front-End Developer",
      desc: (
        <>
          Self-taught programming skills through Udemy courses, complemented by
          company-provided resources and mentorship.
        </>
      ),
    },
    {
      position: "Graphic Designer",
      desc: (
        <>
          Designed graphics related to cryptocurrency, marketing, shirt design
          and finance.
        </>
      ),
    },
    {
      position: "Graphic Designer",
      desc: (
        <>
          Designed physical graphics for shops, malls, and stores, as well as
          social media content for in-house use.
        </>
      ),
    },
    {
      position: "Signage Designer",
      desc: <>Designed & created shop signage installed above storefronts.</>,
    },
  ];

  const skills = [
    {
      icon: <img src={PsIcon} className="skill-icon" />,
      skillName: "Adobe Photoshop",
    },
    {
      icon: <img src={AiIcon} className="skill-icon" />,
      skillName: "Adobe Illustrator",
    },
    {
      icon: <img src={XdIcon} className="skill-icon" />,
      skillName: "Adobe XD",
    },
    {
      icon: <img src={FigmaIcon} className="skill-icon" />,
      skillName: "Figma",
    },
    {
      icon: <img src={CspIcon} className="skill-icon" />,
      skillName: "Clip Studio Paint",
    },
    {
      icon: <img src={TwoDIcon} className="skill-icon" />,
      skillName: "2D Illustration",
    },
    {
      icon: <img src={ReactIcon} className="skill-icon" />,
      skillName: "React JS",
    },
    {
      icon: <img src={JsIcon} className="skill-icon" />,
      skillName: "Javascript",
    },
    {
      icon: <img src={ScssIcon} className="skill-icon" />,
      skillName: "SCSS/SASS",
    },
    {
      icon: <img src={WebDesignIcon} className="skill-icon" />,
      skillName: "Web Design",
    },
    {
      icon: <img src={PrototypeIcon} className="skill-icon" />,
      skillName: "Prototyping",
    },
    {
      icon: <img src={CryptoIcon} className="skill-icon" />,
      skillName: "Crypto",
    },
    {
      icon: <img src={ChatgptIcon} className="skill-icon" />,
      skillName: "ChatGPT",
    },
    {
      icon: <img src={ShirtDesignIcon} className="skill-icon" />,
      skillName: "Shirt Design",
    },
    {
      icon: <img src={CharcDesignIcon} className="skill-icon" />,
      skillName: "Character Design",
    },
  ];

  const languages = [
    {
      language: "Mandarin",
      level: "Native",
    },
    {
      language: "English",
      level: "Proficient",
    },
    {
      language: "Bahasa Melayu",
      level: "Intermediate",
    },
  ];

  return (
    <div className="about-main-container">
      <div className="about-header-container">
        <div className="about-pfp-wrapper">
          <img src={PFP} alt="eekokshiangpfp" className="pfp-image" />
        </div>
        <div className="header-content">
          <p className="header-name">EE KOK SHIANG</p>
          <p className="header-desc">
            "I originally started my career as a graphic designer, focusing on
            physical design, materials, and related aspects. Over time, I
            transitioned into an IT company as a designer, where I expanded my
            knowledge into UI/UX, programming, finance, and crypto. Throughout
            the past three years, I have continuously learned and evolved in
            these fields, broadening my expertise beyond design."
          </p>
        </div>
      </div>

      <p className="about-title">// EXPERIENCES</p>

      <div className="about-grid">
        <div className="about-content-container">
          <div className="exp-container">
            <div className="exp-header">
              <NineDotsIcon alt="nine-dots-icon" className="nine-dots-icon" />

              <div className="exp-header-wrapper">
                <div className="exp-company">
                  <p className="company-name">TORUM TECHNOLOGY</p>
                  <p className="exp-date">October 2021 - November 2024</p>
                </div>
                <p className="company-tag">Crypto Based Startup</p>
              </div>
            </div>

            <div className="exp-content-wrapper">
              <p className="exp-title">Position</p>
              {experienceContent.slice(0, 3).map((experience, index) => (
                <div className="exp-content" key={index}>
                  <div className="exp-content-header">
                    <MiniDiamondIcon className="exp-content-icon" />
                    <p className="position-name">{experience.position}</p>
                  </div>
                  <p className="position-desc">{experience.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-content-container">
          <div className="exp-container">
            <div className="exp-header">
              <NineDotsIcon alt="nine-dots-icon" className="nine-dots-icon" />
              <div className="exp-header-wrapper">
                <div className="exp-company">
                  <p className="company-name">MIINT DESIGN</p>
                  <p className="exp-date">November 2020 - October 2021</p>
                </div>
                <p className="company-tag">Advertising Company</p>
              </div>
            </div>

            <div className="exp-content-wrapper">
              <p className="exp-title">Position</p>
              {experienceContent.slice(3, 5).map((experience, index) => (
                <div className="exp-content" key={index}>
                  <div className="exp-content-header">
                    <MiniDiamondIcon className="exp-content-icon" />
                    <p className="position-name">{experience.position}</p>
                  </div>
                  <p className="position-desc">{experience.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="about-title">// SKILLS</p>

      <div className="skill-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-content">
            {skill.icon}
            {skill.skillName}
          </div>
        ))}
      </div>

      <p className="about-title">// EDUCATION</p>

      <div className="education-grid">
        <div className="education-wrapper">
          <div className="education-header">
            <NineDotsIcon alt="nine-dots-icon" className="nine-dots-icon" />
            <div className="education-header-wrapper">
              <p className="education-name">POINT COLLEGE</p>
              <p className="education-date">May 2017 - November 2020</p>
            </div>
          </div>

          <div className="education-content">
            <MiniDiamondIcon className="exp-content-icon" />
            <p className="education-name">DIPLOMA IN GRAPHIC DESIGN</p>
          </div>
        </div>

        <div className="language-wrapper">
          <p className="language-title">Language Proficiency</p>
          {languages.map((language, index) => (
            <div key={index} className="language-container">
              <div className="language-wrapper">
                <MiniDiamondIcon className="exp-content-icon" />
                <p> {language.language}</p>
              </div>
              <div className="language-level">{language.level}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
