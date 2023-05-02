import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import { Context } from "../../Context";
import Slider from "react-slick";

import "../Daily/Daily.scss";
import "./Airdopes_pages.scss";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
        slidesToShow: 3,
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

const Airdopes = () => {
  const { addItem, getItem, removeItem } = useCart();
   const [ setData] = useState([]);
   const { data } = useContext(Context);

  const newarray16 = data.filter((el) => el.category === "Airdopes");


  return (
    <div>
      <div className="container">
      <div className="maped">
          {newarray16.map((el) => {
            console.log(el._id);
            return (
              <Link to={`/card/${el._id}`} >
                <div className="cardPlants" key={el._id}>
                  <img className="cardPlants__img" src={el.image} alt="" />
                  <div className="ggg">
                    <h1 className="cardPlants__h1">{el.title}</h1>
                    <p className="cardPlants__p">{el.desc}</p>
                    <div className="prices">
                      <p className="prices__1">{el.price} $</p>
                      <p className="prices__2">{el.oldPrice} $</p>
                    </div>
                    <button className="price__btn">ADD TO CARD</button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="texts">
          <h1 className="texts__h1">
            Airdopes - The Top Rated Bluetooth Earbuds in the Market
          </h1>
          <hr />
          <p className="textss__p">
            Airdopes offer the most incredible listening experience with
            revolutionary design. Truly in ear wireless with no cables, no
            connectors, and no hassles. Designed for comfort and unstoppable
            music, always remain on your toes as Airdopes brings to you the
            dopest tech there is out there! <br />  Powered with boAt’s Insta
            Wake n’ Pair™ technology & ASAP™ Fast Charge, these true wireless
            earbuds power on and connect instantly right out of the charging
            case. No more going into settings to find and pair the device,
            welcome to the new era of seamless, instant connection. <br /> boAt
            Airdopes come with passive and active noise cancellation technology
            that cancels out external noise, delivering only the sound of your
            media to your ears. No longer will there be any interference from
            external sources. Airdopes are designed and perfected for superior
            calls and entertainment. <br /> These wireless earbuds come with massive
            drivers that deliver superior sound, sound that is unmatched and
            inimitable. Made from fine and premium materials, these bluetooth
            earbuds are made to be comfortable and secure. <br /> You can choose from a
            variety of silicone tips provided to adjust accordingly and ensure a
            supreme and comfortable fit based on how you want your experience to
            be. Love adventure? Airdopes are here for you. <br /> The IPX rating
            ensures all the mechanical parts are tightly enclosed in an airtight
            housing that prevents water, sweat from seeping into the earbuds. No
            longer do you have to worry about damaging a device. Airdopes are
            rugged and sturdy, able to take on anything that is thrown at it. <br />
            Make the best of your day without worry. Airdopes are perfect for
            WFH calls or meetings. Microphones are placed in key locations on
            the earbuds that accurately picks up your voice while cancelling out
            background noise. <br /> The result is a clear and crisp voice and a
            consistent experience. Moreover, with the latest Bluetooth
            technology, pairing instantly with multiple devices while switching
            between those devices has never been easier. Simplicity and elegance
            define Airdopes. <br /> Sound with unmatched style. Airdopes are available
            in a variety of colours that bring the latest fashion trends to the
            forefront. The variety of colours available make Airdopes the
            earbuds to die for. Style it up with our best earbuds, the new way
            to flaunt your vibe! From the Queen of Prints, Masaba's funky take
            on our Airdopes 441 wireless earbuds, to our TRebel range of
            earbuds, only for women - boAt is bringing to you crazy new feats
            every passing day. Magic and Music are synonymous when you plug in
            the Airdopes earphones!
          </p>
        </div>

        <div className="airdopes__slider">
          <Slider {...settings} >
            <div className="airdopes__slider__card">
              <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/sd.jpg?v=1659088152" alt="" className="airdopes__slider__card__img" />
              <h6 className="airdopes__slider__card__h1">Check out the boAt Best Earphones <br /> Under 1000</h6>
            </div>
            <div className="airdopes__slider__card">
              <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/blog1.jpg?v=1652187095" alt="" className="airdopes__slider__card__img" />
              <h6 className="airdopes__slider__card__h1">Best Earbuds Under 2000 to Vibe to <br /> Your Playlist</h6>
            </div>
            <div className="airdopes__slider__card">
              <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/500-ANC-BLOG.jpg?v=1650967056" alt="" className="airdopes__slider__card__img" />
              <h6 className="airdopes__slider__card__h1">Airdopes 500 ANC and a Cancel Culture <br /> You Can Get Behind</h6>
            </div>
            <div className="airdopes__slider__card">
              <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/Decoding-Active-Noise-Cancellation-1_2.jpg?v=1648622557" alt="" className="airdopes__slider__card__img" />
              <h6 className="airdopes__slider__card__h1">How Noise Cancelling Headphones and <br /> Earphones Empower You To Listen To <br /> What Matters</h6>
            </div>
            <div className="airdopes__slider__card">
              <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/noise_cancellation.jpg?v=1635923382" alt="" className="airdopes__slider__card__img" />
              <h6 className="airdopes__slider__card__h1">Check out the boAt Best Earphones <br /> Under 1000</h6>
            </div>
            <div className="airdopes__slider__card">
              <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/Top_audio_Gear.jpg?v=1633943683" alt="" className="airdopes__slider__card__img" />
              <h6 className="airdopes__slider__card__h1">Check out the boAt Best Earphones <br /> Under 1000</h6>
            </div>
            <div className="airdopes__slider__card">
              <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/High-on-quality_-low-on-budget.jpg?v=1629108524" alt="" className="airdopes__slider__card__img" />
              <h6 className="airdopes__slider__card__h1">Check out the boAt Best Earphones <br /> Under 1000</h6>
            </div>
            <div className="airdopes__slider__card">
              <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/Let_s-Settle-for-the-extraordinary_2bdf4657-bed3-4137-a1ec-dd4653c50bb1.jpg?v=1622019748" alt="" className="airdopes__slider__card__img" />
              <h6 className="airdopes__slider__card__h1">Check out the boAt Best Earphones <br /> Under 1000</h6>
            </div>
            <div className="airdopes__slider__card">
              <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/Your-Dream-Team-1.jpg?v=1621621360" alt="" className="airdopes__slider__card__img" />
              <h6 className="airdopes__slider__card__h1">Best Earbuds Under 2000 to Vibe to <br /> Your Playlist</h6>
            </div>
            <div className="airdopes__slider__card">
              <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/Your-Dream-Team-1.jpg?v=1621621360" alt="" className="airdopes__slider__card__img" />
              <h6 className="airdopes__slider__card__h1">Airdopes 500 ANC and a Cancel Culture <br /> You Can Get Behind</h6>
            </div>
            <div className="airdopes__slider__card">
              <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/Cancel-Noise-_-Enjoy-Life_1.jpg?v=1617713453" alt="" className="airdopes__slider__card__img" />
              <h6 className="airdopes__slider__card__h1">How Noise Cancelling Headphones and <br /> Earphones Empower You To Listen To <br /> What Matters</h6>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Airdopes;
