import React from "react";

import { ReactComponent as BottomLeftArrow } from "../../assets/svgs/arrow-bottom-right.svg";
import { ReactComponent as SquareIcon } from "../../assets/svgs/square-icon.svg";
import { ReactComponent as DiamondIcon } from "../../assets/svgs/diamond-shape-icon.svg";

import "./HomePanel.scss";
const iconMap = {
  square: SquareIcon,
  diamond: DiamondIcon,
  arrow: BottomLeftArrow,
};

const HomePanel = ({ title, onClick, icon }) => {
  const SelectedIcon = iconMap[icon] || BottomLeftArrow;

  return (
    <div className="home-panel-main-container" onClick={onClick}>
      <div className="home-panel-top-content">
        {Array(3)
          .fill(title)
          .map((text, index) => (
            <p key={index} className="panel-title-text">
              {text}
            </p>
          ))}
      </div>

      <SelectedIcon className="bottom-left-icon" />
    </div>
  );
};

export default HomePanel;
