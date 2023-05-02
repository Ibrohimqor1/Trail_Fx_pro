import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import { Context } from "../../Context";
import Slider from "react-slick";

import "../Daily/Daily.scss";

import "../Airdopes_Pages/Airdopes_pages.scss";

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
const SmartWatch_Pages = () => {
  const { addItem, getItem, removeItem } = useCart();
  const [setData] = useState([]);
  const { data } = useContext(Context);

  const newarray18 = data.filter((el) => el.category === "Smartwatch");
  return (
    <div>
      <div>
        <div className="container">
          <div className="maped">
            {newarray18.map((el) => {
              console.log(el._id);
              return (
                <Link to={`/card/${el._id}`}>
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
              Best Smart Watches for Men & Women - India's No. 1 Wearable Watch
              Brand
            </h1>
            <hr />
            <p className="textss__p">
              In this fast-moving era, let the best smart watches keep at pace
              with you. That is right! boAt smartwatches are here for you,
              whether you want to exercise or rest. Our smartwatches are
              equipped with multiple active sports modes, like cycling, workout,
              running, walking, climbing, and others — making staying fit easy.
              Not just physical fitness, the supreme smartwatches from boAt also
              help you keep a check on your mental health with guided
              meditation. <br />
              These best of best smart watches will also help you stay connected
              at all times with smart notifications for texts, calls, reminders,
              and alarms. Enjoy remote music and camera control from your
              fitness watch. In the field of wearables, boAt also came up with
              the best smart watches for women — Watch Storm being one of them.
              It is the perfect companion for your fitness transformation. Storm
              smart watch is here to remove all obstructions that may come on
              your goal-achieving path. With its daily activity tracker and nine
              different sports modes, it will now be fun to track your fitness
              journey. Why does it fall under smart watches for women? This
              fitness smartwatch comes with a menstrual cycle tracking feature
              that allows you to stay on top of your periods cycle, and log in
              your physical and emotional symptoms. Its battery life of up to 10
              days will keep you alert at all times with smart notifications
              from your phone and vibration alerts for calls, texts, schedule
              reminders, alarms, & more! <br />
              TrailFX smart watch Enigma is a sleek fitness smartwatch loaded
              with features that truly makes it the smart watch of our times. It
              fits the bill for being the best smart watches for men as it comes
              with smart gestures which allow you to remotely control your
              camera, watch faces, and more! Why is it one of the best
              smartwatch? Enigma comes with Find My Phone feature that will call
              your phone to easily locate your phone when you don’t remember
              where you kept it. Its 3 ATM water resistance will keep it safe
              from splashes & sweat too, making it top the list of best smart
              watches for men & women. <br />
              We at boAt are rooting for you and cheering the loudest for you to
              live a better life and get smarter with every move you make! So we
              designed smartwatches that are especially curated to match your
              stride. boAt’s smart watch price will never hurt your pocket. Get
              notification alerts and stay fit with the best fitness companion
              out there for you. Find a caring partner in boAt smartwatches that
              monitors your heart rate and blood oxygen SpO2 level 24*7 – even
              while you’re asleep. Flaunt and flash as the best smartwatches for
              fitness not only accompany you in your vigorous workout but also
              help you keep calm with guided meditation! So what are you waiting
              for? Live smarter with the best smart watches in town! Be the GOAT
              with boAt
            </p>
            <h1 className="texts__h1">Watch Xtend</h1>
            <p className="textss__p">
              Step up your fitness game in style with Watch Xtend. This fitness
              watch comes with a 1.69" (4.29 Cms) HD Display which gives you a
              complete capacitive touch experience. Xtend is one of the first
              smartwatches to have in-built Alexa. This smart watch comes with
              over 50 watch faces. Whether you are looking for a smart watch for
              men or women, Xtend is the best out there. Equipped with automatic
              screen brightness, Xtend adjusts the screen according to your
              environment. This sleek & premium smart watch comes with 14 active
              sports modes & real time health monitoring. Make adventures know
              no extent as watch Xtend is 5-ATM water-resistant.
            </p>
            <h1 className="texts__h1">Watch Storm</h1>
            <p className="textss__p">
              Watch Storm is one of boAt’s finest and most trusted smartwatch.
              Its 1.29" (3.3 Cms) full touch colour display will make you
              experience the magic. Storm not just acts like your fitness watch
              but also proves to be one of the best smartwatches for women —
              packed with a menstrual tracking feature. Monitor your health and
              SpO2 levels with this premium watch. Coupled with 8 active sports
              modes, Watch Storm is really a perfect fit for all adventure
              seekers out there.
            </p>
            <h1 className="texts__h1">Wave Pro</h1>
            <p className="textss__p">
              Watch Wave Pro will make staying healthy fun. This fitness tracker
              comes with IP67 rating, making it resistant to water & dust. One
              characterstic that makes it stand out from all the other watches
              in the market is its exclusive Live Cricket Scores feature which
              allows you to get real-time updates of your favourite teams. Plug
              your smart watch just for 30mins & get charged up for a week.
              #WearYourStyle with the ultra sleek & premium Watch Wave Pro.
            </p>
            <h1 className="texts__h1">Watch Iris</h1>
            <p className="textss__p">
              Watch Iris is one of boAt’s most loved watches. Its round dial &
              leather finished straps add to your elegant & sophisticated
              persona. It has a 7 day battery backup & a 1.39" (3.53 Cms) AMOLED
              Display. Iris keeps a track of your heart rate, sleep cycle, daily
              activities & much more. With 8 active sports modes, this
              smartwatch is always on a lookout to track the calories you burnt
              or the steps taken. Stay updated with notifications & alerts
              buzzing right on your wrist.
            </p>
            <h1 className="texts__h1">Watch Blaze</h1>
            <p className="textss__p">
              Watch Blaze is the perfect fit to match your pace of life. It is
              powered by Apollo 3 Blue Plus high-performance processor that
              makes its interface 25% faster. Its 1.75" (4.44 Cms) HD Display,
              equipped with 500 Nits brightness, is the largest display by boAt.
              Packed with Fast Charge, Blaze gives you 24HRS of juice with just
              10mins of charge. The slim metal design with 2.5D curved display
              makes Watch Blaze appealing from every angle!{" "}
            </p>{" "}
          </div>

          <div className="airdopes__slider">
            <Slider {...settings}>
              <div className="airdopes__slider__card">
                <img
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/Storm-Pro-Blog.jpg?v=1657704485"
                  alt=""
                  className="airdopes__slider__card__img"
                />
                <h6 className="airdopes__slider__card__h1">
                  Check out the TrailFX Best Earphones <br /> Under 1000
                </h6>
              </div>
              <div className="airdopes__slider__card">
                <img
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/Xtend-Blog.jpg?v=1659087716"
                  alt=""
                  className="airdopes__slider__card__img"
                />
                <h6 className="airdopes__slider__card__h1">
                  Best Earbuds Under 2000 to Vibe to <br /> Your Playlist
                </h6>
              </div>
              <div className="airdopes__slider__card">
                <img
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/blog-Recovered.png?v=1659087882"
                  alt=""
                  className="airdopes__slider__card__img"
                />
                <h6 className="airdopes__slider__card__h1">
                  Airdopes 500 ANC and a Cancel Culture <br /> You Can Get
                  Behind
                </h6>
              </div>
              <div className="airdopes__slider__card">
                <img
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/connect-blog.jpg?v=1654519937"
                  alt=""
                  className="airdopes__slider__card__img"
                />
                <h6 className="airdopes__slider__card__h1">
                  How Noise Cancelling Headphones and <br /> Earphones Empower
                  You To Listen To <br /> What Matters
                </h6>
              </div>
              <div className="airdopes__slider__card">
                <img
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/Artboard_1.png?v=1652873769"
                  alt=""
                  className="airdopes__slider__card__img"
                />
                <h6 className="airdopes__slider__card__h1">
                  Check out the boAt Best Earphones <br /> Under 1000
                </h6>
              </div>
              <div className="airdopes__slider__card">
                <img
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/Main_Image.jpg?v=1651747097"
                  alt=""
                  className="airdopes__slider__card__img"
                />
                <h6 className="airdopes__slider__card__h1">
                  Check out the boAt Best Earphones <br /> Under 1000
                </h6>
              </div>
              <div className="airdopes__slider__card">
                <img
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/wave-pro_1.png?v=1647851865"
                  alt=""
                  className="airdopes__slider__card__img"
                />
                <h6 className="airdopes__slider__card__h1">
                  Check out the boAt Best Earphones <br /> Under 1000
                </h6>
              </div>
              <div className="airdopes__slider__card">
                <img
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/BLAZE-BLOG.jpg?v=1646201420"
                  alt=""
                  className="airdopes__slider__card__img"
                />
                <h6 className="airdopes__slider__card__h1">
                  Check out the boAt Best Earphones <br /> Under 1000
                </h6>
              </div>
              <div className="airdopes__slider__card">
                <img
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/BLOG2.jpg?v=1645630699"
                  alt=""
                  className="airdopes__slider__card__img"
                />
                <h6 className="airdopes__slider__card__h1">
                  Best Earbuds Under 2000 to Vibe to <br /> Your Playlist
                </h6>
              </div>
              <div className="airdopes__slider__card">
                <img
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/BLOG-1_7ed65a30-5d0f-4744-b606-396e2afcc3d7.jpg?v=1645439592"
                  alt=""
                  className="airdopes__slider__card__img"
                />
                <h6 className="airdopes__slider__card__h1">
                  Airdopes 500 ANC and a Cancel Culture <br /> You Can Get
                  Behind
                </h6>
              </div>
              <div className="airdopes__slider__card">
                <img
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/zenit.png?v=1636956815"
                  alt=""
                  className="airdopes__slider__card__img"
                />
                <h6 className="airdopes__slider__card__h1">
                  How Noise Cancelling Headphones and <br /> Earphones Empower
                  You To Listen To <br /> What Matters
                </h6>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartWatch_Pages;
