import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <div className="container">
      <div className="head">
        <div className="card1">
          <img
            className="head__card1__img"
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_2_small.png?v=1663586590"
            alt=""
          />
          <h5 className="head__card1__h5">
            1 YEAR <br /> WARRANTY
          </h5>
        </div>
        <div className="slesh">|</div>
        <div className="card1">
          <img
            className="head__card1__img"
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_3_small.png?v=1663586612"
            alt=""
          />
          <h5 className="head__card1__h5">
            FREE 7 DAYS <br /> REPLACEMENT
          </h5>
        </div>
        <div className="slesh">|</div>
        <div className="card1">
          <img
            className="head__card1__img"
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_1_small.png?v=1663586576"
            alt=""
          />
          <h5 className="head__card1__h5">
            FREE <br /> SHIPPING
          </h5>
        </div>
        <div className="slesh">|</div>
        <div className="card1">
          <img
            className="head__card1__img"
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_4_small.png?v=1663586627"
            alt=""
          />
          <h5 className="head__card1__h5">
            SECURE <br /> CHECKOUT
          </h5>
        </div>
        <div className="slesh">|</div>
        <div className="card1">
          <img
            className="head__card1__img"
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/icon-black-v1_small.png?v=1661245767"
            alt=""
          />
          <h5 className="head__card1__h5">GST <br /> BILLING</h5>
        </div>
      </div>
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Elite-Desktop_1600x.jpg?v=1678452681"
                class="carousel__img d-block w-100"
                alt="..."
              ></img>
            </div>
            <div class="carousel-item">
              <img
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/ion_desktop_launch_2e3e0567-97cc-43d2-a9b5-15a274a5855b_1600x.jpg?v=1679553970"
                class=" carousel__img d-block w-100"
                alt="..."
              ></img>
            </div>
            <div class="carousel-item">
              <img
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/999-Store-Desktop_21eb064b-1e34-4938-854d-1d9f36057cba_1600x.jpg?v=1678294690"
                class=" carousel__img d-block w-100"
                alt="..."
              ></img>
            </div>
            <div class="carousel-item">
              <img
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/banner_desktop_1600x.gif?v=1679477337"
                class=" carousel__img d-block w-100"
                alt="..."
              ></img>
            </div>
            <div class="carousel-item">
              <img
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/wave-flex_desktop_1600x.jpg?v=1677998837"
                class=" carousel__img d-block w-100"
                alt="..."
              ></img>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              class="vvv carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              class="vvv  carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
    </div>
  );
};

export default Header;
