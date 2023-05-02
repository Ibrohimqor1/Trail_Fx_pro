import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../Section2/Section2.scss";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import copCop from "../../Images/cop-cop.png";

const settings = {
  dots: true,
  infinite: false,
  speed: 900,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
};

const Section2 = () => {
  return (
    <div className="container">
      <div className="slider__brends">
        <Slider {...settings}>
          <Link to="/airdopes" className="slider__brends__card">
            <img
              className="slider__brends__card__img"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/New_6d6c1b24-4044-4cb1-8710-76d572438579.jpg?v=1665574286"
              alt=""
            />
          </Link>
          <Link to="/airdopes" className="slider__brends__card">
            <img
              className="slider__brends__card__img"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD113.jpg?v=1665574303"
              alt=""
            />
          </Link>
          <Link to="/airdopes" className="slider__brends__card">
            <img
              className="slider__brends__card__img"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/121_2f8218b7-7c14-4d7b-b493-8e4373939c04.jpg?v=1665574319"
              alt=""
            />
          </Link>
          <Link to="/smartwatch" className="slider__brends__card">
            <img
              className="slider__brends__card__img"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Xtend_2e659993-1b3b-4783-8700-57f824715fbf.jpg?v=1665574331"
              alt=""
            />
          </Link>
          <Link to="/speaker" className="slider__brends__card">
            <img
              className="slider__brends__card__img"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Grenade.jpg?v=1666249978"
              alt=""
            />
          </Link>
          <Link to="/airdopes" className="slider__brends__card">
            <img
              className="slider__brends__card__img"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal-121.jpg?v=1671621358"
              alt=""
            />
          </Link>
          <Link to="/soundbars" className="slider__brends__card">
            <img
              className="slider__brends__card__img"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/DC_358d830b-e300-49d8-a152-0b5d76ac0cad.jpg?v=1665574227"
              alt=""
            />
          </Link>
          <Link to="/nescbands" className="slider__brends__card">
            <img
              className="slider__brends__card__img"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/New_6d6c1b24-4044-4cb1-8710-76d572438579.jpg?v=1665574286"
              alt=""
            />
          </Link>
          <Link to="/airdopes" className="slider__brends__card">
            <img
              className="slider__brends__card__img"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD113.jpg?v=1665574303"
              alt=""
            />
          </Link>
          <Link to="smartwatch" className="slider__brends__card">
            <img
              className="slider__brends__card__img"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Xtend_2e659993-1b3b-4783-8700-57f824715fbf.jpg?v=1665574331"
              alt=""
            />
          </Link>
        </Slider>
      </div>

      <div className="container">
        <Link to="trimmer" className="cop__cop__img">
          <img className="cop__cop__img__img" src={copCop} alt="" />
        </Link>
      </div>

    </div>
  );
};

export default Section2;
