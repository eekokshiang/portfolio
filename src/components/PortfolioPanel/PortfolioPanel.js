import React from "react";

import PanelFallback from "../../assets/pngs/panel-fallback.png";

import "./PortfolioPanel.scss";

const PortfolioPanel = ({ date, title, desc, image, onClick, className }) => {
  return (
    <div className={className} onClick={onClick}>
      <img src={image || PanelFallback} alt="panel-img" />
      <p className="panel-date">{date}</p>
      <p className="panel-title">{title}</p>
      <p className="panel-desc">{desc}</p>
    </div>
  );
};

export default PortfolioPanel;
