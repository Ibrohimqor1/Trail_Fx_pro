import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import { Context } from "../../Context";
import Slider from "react-slick";

import "../Daily/Daily.scss";
import "../Headphones_Pages/Headphones.scss";

const Headphones_Pages = () => {
  const { addItem, getItem, removeItem } = useCart();
  const [ setData] = useState([]);
  const { data } = useContext(Context);

 const newarray19 = data.filter((el) => el.category === "Headphone");
  return (
    <div className="container">
      <div className="maped">
          {newarray19.map((el) => {
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
      <div className="head__imgs">
        <p className="head__imgs__p" >
          Headphones are a pair of small loudspeaker drivers worn on or around <br />
          the head over a user's ears. They are electroacoustic transducers, <br />
          which convert an electrical signal to a corresponding sound. <br />
          Headphones let a single user listen to an audio source privately, in <br />
          contrast to a loudspeaker, which emits sound into the open air for <br />
          anyone nearby to hear. Headphones are also known as earphones[1] or, <br />
          colloquially, cans.[2] Circumaural ('around the ear') and supra-aural <br />
          ('over the ear') headphones use a band over the top of the head to <br />
          hold the speakers in place. Another type, known as earbuds or <br />
          earpieces[1] consist of individual units that plug into the user's ear <br />
          canal. A third type are bone conduction headphones, which typically <br />
          wrap around the back of the head and rest in front of the ear canal, <br />
          leaving the ear canal open. In the context of telecommunication, a <br />
          headset is a combination of headphone and microphone.А
        </p>
        <img
          src="https://thumbs.dreamstime.com/b/woman-headphones-showing-thumbs-up-16379807.jpg"
          className="head__imgs__2"
        />
      </div>
      <div className="head__images__2">
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/bluetooth-wireless-headphones-1650563344.gif"
        alt=""
        className="head__images__1"
      />
      <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className="head__images__2" />
    </div>
      </div>
  );
};

export default Headphones_Pages;
