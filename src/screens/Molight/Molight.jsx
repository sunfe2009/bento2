import React from "react";
import { SectionTitle } from "../../components/SectionTitle";
import "./style.css";

export const Molight = () => {
  return (
    <div className="molight">
      <div className="div">
        <img className="ellipse" alt="Ellipse" src="/img/ellipse-1.svg" />
        <div className="text-wrapper">Molight</div>
        <div className="text-wrapper-2">Stay Beta.</div>
        <SectionTitle className="section-title-instance" text="Main Tools" />
        <div className="element-card">
          <div className="overlap-group">
            <div className="text-wrapper-3">Twitter</div>
            <div className="text-wrapper-4">@mo1ight</div>
            <img className="frame" alt="Frame" src="/img/frame-10.svg" />
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap">
            <p className="bring-in-da-noise">Bring in &#39;da Noise, Bring in &#39;da Funk</p>
          </div>
        </div>
        <img className="img" alt="Element card" src="/img/1-1-card.png" />
        <img className="element-card-2" alt="Element card" src="/img/1-1-card-1.png" />
        <img className="widget-MBP" alt="Widget MBP" src="/img/widget-mbp.png" />
        <img className="MX-master" alt="Mx master" src="/img/mx-master.png" />
        <img className="widget-leather" alt="Widget leather" src="/img/widget-leather.png" />
      </div>
    </div>
  );
};
