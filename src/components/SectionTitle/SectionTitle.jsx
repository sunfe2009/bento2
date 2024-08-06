/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SectionTitle = ({ className, text = "Project Showcase" }) => {
  return (
    <div className={`section-title ${className}`}>
      <div className="project-showcase">{text}</div>
    </div>
  );
};

SectionTitle.propTypes = {
  text: PropTypes.string,
};
