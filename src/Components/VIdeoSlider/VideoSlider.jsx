import React, { Component } from "react";
import Slider from "react-slick";

import "../VIdeoSlider/VideoSlider.scss";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import video1 from "../../Images/video1.mp4";

const settings = {
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
};

const VideoSlider = () => {
  return (
    <div className="containe">
      <div className="slider">
        <Slider {...settings}>
          <div className="slider__card">
            <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/446_380_445x.png?v=1676388029" alt="" />
          </div>
          <div className="slider__card">
            <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/carousel_banner_445x.png?v=1671097960" alt="" />
          </div>
          <div className="slider__card">
            <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Bring_Your_World_On_Your_Wrist_446x360_66921214-c5ee-4bda-a433-f52b1c2124d4_445x.jpg?v=1672749745" alt="" />
          </div>
          <div className="slider__card">
            <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/newsletter_carousel-banner_445x.png?v=1672738706" alt="" />
          </div>
          <div className="slider__card">
            <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/stone_1_445x.png?v=1670244742" alt="" />
          </div>
         
        </Slider>
      </div>
    </div>
  );
};

export default VideoSlider;
