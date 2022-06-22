import React from "react";
import {Row, Col} from 'antd'
import './styles.scss'

import homeBanner from "../../asset/img/home-banner.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-wrapper">
        <div className="banner-row">
          <div className="banner-col-6">
            <h1>Practice PTE with AI Scorings <span>for FREE</span></h1>
            <p>Join 100,000 PTE test takers to practice.</p>
            <button>Practise Now</button>
          </div>
          <div className="banner-col-4">
            <img src={homeBanner} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
