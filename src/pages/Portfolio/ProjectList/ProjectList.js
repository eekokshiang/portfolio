import { useEffect, useState } from "react"; // ✅ Ensure useState is available
import Fallback from "../../../assets/pngs/panel-fallback.png";

import "./ProjectList.scss";
import useWindowSize from "../../../hooks/useWindowResize"; // ✅ Hook inside the function

import ValentinePreview from "../../../assets/pngs/valentine-preview.png";
import ValentineContent from "../../../assets/pngs/valentine-content.png";
import ValentineDeskContent from "../../../assets/pngs/valentine-desk-content.png";
import EpPreview from "../../../assets/pngs/ep-preview.png";
import EpDeskContent from "../../../assets/pngs/ep-desk-content.png";
import EpContent from "../../../assets/pngs/ep-content.png";
import UxCaseStudyPreview from "../../../assets/pngs/uxcasestudy-preview.png";
import UxCaseStudyDeskContent from "../../../assets/pngs/uxcase-study-desk-content.png";
import UxCaseStudyContent from "../../../assets/pngs/uxcase-study-content.png";
import UiPreview from "../../../assets/pngs/ui-preview.png";
import UiDeskContent from "../../../assets/pngs/ui-desk-content.png";
import UiContent from "../../../assets/pngs/ui-content.png";
import ShirtPreview from "../../../assets/pngs/shirt-preview.png";
import ShirtContent from "../../../assets/pngs/shirt-content.png";
import ShirtDeskContent from "../../../assets/pngs/shirt-desk-content.png";
import FunArtPreview from "../../../assets/pngs/funart-preview.png";
import FunArtContent from "../../../assets/pngs/funart-content.png";
import FunArtDeskContent from "../../../assets/pngs/funart-desk-content.png";
import CharacterPreview from "../../../assets/pngs/character-preview.png";
import CharacterContent from "../../../assets/pngs/character-content.png";
import CharacterDeskContent from "../../../assets/pngs/character-desk-content.png";
import YamPreview from "../../../assets/pngs/yam-preview.png";
import YamContent from "../../../assets/pngs/yam-content.png";
import YamDeskContent from "../../../assets/pngs/yam-desk-content.png";
import AkaiMpPreview from "../../../assets/pngs/akai-mp-preview.png";
import AkaiMpContent from "../../../assets/pngs/akai-mp-content.png";
import AkaiMpDeskContent from "../../../assets/pngs/akai-mp-desk-content.png";
import GoalPreview from "../../../assets/pngs/goal-preview.png";
import GoalContent from "../../../assets/pngs/goal-content.png";
import GoalDeskContent from "../../../assets/pngs/goal-desk-content.png";

// ✅ Move useWindowSize() inside a function to avoid breaking React Hook Rules
const ProjectList = () => {
  const { width } = useWindowSize(); // ✅ Hook is inside the function

  const projects = [
    {
      image: ValentinePreview,
      date: "12 Feb 2025",
      title: "Valentine Hoodie Design",
      desc: "A self-initiated design project created to celebrate Valentine's Day, reflecting my personal creativity and passion for design.",
      content:
        width > 768 ? (
          <img src={ValentineDeskContent} className="content-img" />
        ) : (
          <img src={ValentineContent} className="content-img" />
        ),
    },
    {
      image: EpPreview,
      date: "8 Jan 2025",
      title: "Enchancement UI Practice",
      desc: "A self-initiated design project focused on revamping an old government website to improve its UI and enhance the overall design.",
      content:
        width > 768 ? (
          <img src={EpDeskContent} className="content-img" />
        ) : (
          <img src={EpContent} className="content-img" />
        ),
    },
    {
      image: UxCaseStudyPreview,
      date: "1 Dec 2024",
      title: "UX Case Study",
      desc: "A detailed UX case study on how a crypto startup project for mobile, highlighting the design process, challenges faced along the way.",
      content:
        width > 768 ? (
          <img src={UxCaseStudyDeskContent} className="content-img" />
        ) : (
          <img src={UxCaseStudyContent} className="content-img" />
        ),
    },
    {
      image: UiPreview,
      date: "1 Oct 2024",
      title: "UI Screens",
      desc: "UI screens that I designed with some help from a colleague for a single project, selected from many interfaces I created from scratch.",
      content:
        width > 768 ? (
          <img src={UiDeskContent} className="content-img" />
        ) : (
          <img src={UiContent} className="content-img" />
        ),
    },
    {
      image: ShirtPreview,
      date: "13 Nov 2024",
      title: "Shirt Design",
      desc: "A custom shirt design that I created to enhance my design skills, allowing me to experiment with different styles, typography, and visual elements.",
      content:
        width > 768 ? (
          <img src={ShirtDeskContent} className="content-img" />
        ) : (
          <img src={ShirtContent} className="content-img" />
        ),
    },
    {
      image: FunArtPreview,
      date: "5 April 2024",
      title: "Fun Art",
      desc: "A collection of profile pictures I designed for my friends, enchancing my creativity.",
      content:
        width > 768 ? (
          <img src={FunArtDeskContent} className="content-img" />
        ) : (
          <img src={FunArtContent} className="content-img" />
        ),
    },
    {
      image: CharacterPreview,
      date: "22 May 2024",
      title: "Fanart of Game Character",
      desc: "A game character that I recreated and illustrated using digital software and tools to improve my skills and for fun.",
      content:
        width > 768 ? (
          <img src={CharacterDeskContent} className="content-img" />
        ) : (
          <img src={CharacterContent} className="content-img" />
        ),
    },
    {
      image: YamPreview,
      date: "25 Jan 2024",
      title: "YAM - Crypto Project's Logo",
      desc: "One of the members of a crypto community on Discord requested me to design a custom logo for their long-running project.",
      content:
        width > 768 ? (
          <img src={YamDeskContent} className="content-img" />
        ) : (
          <img src={YamContent} className="content-img" />
        ),
    },
    {
      image: AkaiMpPreview,
      date: "3 Nov 2023",
      title: "Mousepad Design",
      desc: "A client requested me to design a custom mousepad for them through an online platform.",
      content:
        width > 768 ? (
          <img src={AkaiMpDeskContent} className="content-img" />
        ) : (
          <img src={AkaiMpContent} className="content-img" />
        ),
    },
    {
      image: GoalPreview,
      date: "24 Jun 2018",
      title: "Mall Event Visual Designer",
      desc: "During my student days, I designed a custom visual theme for a client, tailoring it to their specific needs.",
      content:
        width > 768 ? (
          <img src={GoalDeskContent} className="content-img" />
        ) : (
          <img src={GoalContent} className="content-img" />
        ),
    },
  ];

  return projects;
};

export default ProjectList;
