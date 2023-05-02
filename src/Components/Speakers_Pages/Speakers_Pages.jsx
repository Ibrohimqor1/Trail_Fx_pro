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

const Speakers_Pages = () => {
  const { addItem, getItem, removeItem } = useCart();
  const [ setData] = useState([]);
  const { data } = useContext(Context);

 const newarray20 = data.filter((el) => el.category === "Speaker");
  return (
    <>
      <div className="container">
      <div className="maped">
          {newarray20.map((el) => {
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
            Best Bluetooth Speakers with boAt Signature Sound
          </h1>
          <p className="textss__p">
            Tune into nirvana with the best Bluetooth speakers of all time. boAt
            speakers offer superior sound quality and performance, providing
            unparalleled clarity and precision with their signature sound.
            Whether you're listening to music in your home or at a party, these
            wireless Bluetooth speakers are the perfect way to enjoy your
            favourite tunes. Made using the latest Bluetooth technology and TWS
            connectivity, you can connect them with your smartphones and other
            speakers within seconds. With boAt’s wide range of signature stone
            and party speakers, limited connectivity, low-quality sound and even
            high speaker prices are a thing of the past. boAt offers some of the
            best bluetooth speakers under 5000, offering high-quality sound in
            every range that fits your budget. With 1 year warranty on every
            product, you can rest assured that you enjoy every penny you spend
            on them. Their long-lasting battery accompanies you where you go,
            from your favourite cosy place at home to the secluded areas of the
            mountains. boAt offers an extensive range from small Bluetooth
            speakers to premium speakers that enhance every occasion. Let us
            check out our wide range of products so you can the choose to buy
            bluetooth speakers that fit you:
          </p>
          <h1 className="texts__h1">
            1. Get ready to party with boAt Portable Speakers.
          </h1>
          <p className="textss__p">
            There is no party like a boAt party! With boAt portable speakers,
            take your party to every room of the house. These wireless speakers
            with thunderous bass and high-definition sound come equipped with up
            to 15 hours of playtime with just a single charge. Whether you're
            looking for something that can handle all outdoor parties or desire
            the versatility to fit any occasion – these are the perfect addition
            to an energetic environment. Not only do they provide your music
            with the boost it needs, but their stylish design and flexible
            portability make them stand out from the crowd! The mini bluetooth
            speakers are just the right fit for a small get-together, and if you
            are looking to host a bunch of people, our range of party speakers
            will do the job. With cool and ergonomic designs like stone,
            cylinder, rugby and even a boombox, your music won’t be your party's
            only topic of discussion. If you’re looking for powerful and best
            speakers that can handle more than everything from get-togethers to
            parties, BoAt Portable Speakers are perfect for you.
          </p>
          <h1 className="texts__h1">
            2. The Best Wireless Bluetooth Speakers for any outdoor adventure
          </h1>
          <p className="textss__p">
            If you’re looking for the best speakers to take on any outdoor
            adventure, look no further than boAt signature sound. These powerful
            and lightweight speakers feature a rugged design that is
            water-resistant and dustproof – so don't worry about taking these
            speakers to the beach, camping or hiking. Their non-wire
            connectivity and shock-proof buttons ensure that you don’t have to
            be extra cautious around them, even if you just stepped out of a
            pool. Enjoy your music with premium sound quality, no matter the
            location. Most of our speakers have easy-to-carry handles that allow
            you to take them everywhere. Discover the best wireless Bluetooth
            speakers available to enjoy your favourite music and entertainment
            wherever you are.
          </p>
        </div>

        <div className="airdopes__slider">
          <Slider {...settings}>
            <div className="airdopes__slider__card">
              <img
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/BLOG-SPEAKER.jpg?v=1674557285"
                alt=""
                className="airdopes__slider__card__img"
              />
              <h6 className="airdopes__slider__card__h1">
                Check out the TrailFX Best Earphones <br /> Under 1000
              </h6>
            </div>
            <div className="airdopes__slider__card">
              <img
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/Website-stone-banner.jpg?v=1659088009"
                alt=""
                className="airdopes__slider__card__img"
              />
              <h6 className="airdopes__slider__card__h1">
                Best Earbuds Under 2000 to Vibe to <br /> Your Playlist
              </h6>
            </div>
            <div className="airdopes__slider__card">
              <img
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/2x.png?v=1636955394"
                alt=""
                className="airdopes__slider__card__img"
              />
              <h6 className="airdopes__slider__card__h1">
                Airdopes 500 ANC and a Cancel Culture <br /> You Can Get Behind
              </h6>
            </div>
            <div className="airdopes__slider__card">
              <img
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/stone_banner.jpg?v=1633938266"
                alt=""
                className="airdopes__slider__card__img"
              />
              <h6 className="airdopes__slider__card__h1">
                How Noise Cancelling Headphones and <br /> Earphones Empower You
                To Listen To <br /> What Matters
              </h6>
            </div>
            <div className="airdopes__slider__card">
              <img
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/Fits-Your-Mood-And-Pocket__1.jpg?v=1620119894"
                alt=""
                className="airdopes__slider__card__img"
              />
              <h6 className="airdopes__slider__card__h1">
                Check out the boAt Best Earphones <br /> Under 1000
              </h6>
            </div>
            <div className="airdopes__slider__card">
              <img
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/Blast-the-Bass.jpg?v=1614084202"
                alt=""
                className="airdopes__slider__card__img"
              />
              <h6 className="airdopes__slider__card__h1">
                Check out the boAt Best Earphones <br /> Under 1000
              </h6>
            </div>
            <div className="airdopes__slider__card">
              <img
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/Blog-Posts-21-12.jpg?v=1608536579"
                alt=""
                className="airdopes__slider__card__img"
              />
              <h6 className="airdopes__slider__card__h1">
                Check out the boAt Best Earphones <br /> Under 1000
              </h6>
            </div>
            <div className="airdopes__slider__card">
              <img
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/Blog-Posts-18-12.jpg?v=1608295653"
                alt=""
                className="airdopes__slider__card__img"
              />
              <h6 className="airdopes__slider__card__h1">
                Check out the boAt Best Earphones <br /> Under 1000
              </h6>
            </div>
            <div className="airdopes__slider__card">
              <img
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/Blog-Posts24-11.jpg?v=1606216949"
                alt=""
                className="airdopes__slider__card__img"
              />
              <h6 className="airdopes__slider__card__h1">
                Best Earbuds Under 2000 to Vibe to <br /> Your Playlist
              </h6>
            </div>
            <div className="airdopes__slider__card">
              <img
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/WhatsApp_Image_2020-10-27_at_2.03.42_PM.jpg?v=1603787660"
                alt=""
                className="airdopes__slider__card__img"
              />
              <h6 className="airdopes__slider__card__h1">
                Airdopes 500 ANC and a Cancel Culture <br /> You Can Get Behind
              </h6>
            </div>
            <div className="airdopes__slider__card">
              <img
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/WhatsApp_Image_2020-10-23_at_5.52.29_PM.jpg?v=1603627081"
                alt=""
                className="airdopes__slider__card__img"
              />
              <h6 className="airdopes__slider__card__h1">
                How Noise Cancelling Headphones and <br /> Earphones Empower You
                To Listen To <br /> What Matters
              </h6>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Speakers_Pages;
