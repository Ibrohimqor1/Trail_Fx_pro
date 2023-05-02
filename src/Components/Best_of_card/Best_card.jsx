import { bestOf } from "../../BestOf";
import { Link, useParams } from "react-router-dom";
import React, { useContext, useState } from "react";
import { useCart } from "react-use-cart";
import Footer from "../Footer/Footer.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import "../../Daily_cards/Daily_Cards"

const Best_card = () => {
  const { addItem, getItem, removeItem } = useCart();
    const { id } = useParams();

    const paramsFindCard= bestOf?.find((el) => {
        return el?.id === id
     })
  return (
    <div>
        <Navbar/>
         <div className="container">
        <div className="maped_card">
          <div className="cardPlants_card" key={paramsFindCard?.id}>
            <img className="cardPlants_card__img" src={paramsFindCard?.pic} alt="" />
            <div className="ggg_card">
              <h1 className="cardPlants_card__h1">{paramsFindCard?.name}</h1>
              <hr />
              <p className="cardPlants_card__p">{paramsFindCard?.fulldesc}</p>
              <div className="prices_card">
                <p className="prices_card__1">{paramsFindCard?.price} $</p>
              </div>
              {!getItem(paramsFindCard.id) ? (
                    <button
                      onClick={() => addItem({ ...paramsFindCard, id: paramsFindCard.id })}
                      className="price_card__btn"
                    >
                      ADD TO CARD
                    </button>
                  ) : (
                    <button
                      className="price_card__btn1"
                      onClick={() => removeItem(paramsFindCard.id)}
                    >
                      REMOVE TO CARD
                    </button>
                  )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Best_card