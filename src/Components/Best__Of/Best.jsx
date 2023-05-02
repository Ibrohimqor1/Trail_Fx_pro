import React, { useContext, useState } from "react"
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import "../Best__Of/Best.scss";
import { bestOf } from "../../BestOf";
import { Link } from "react-router-dom";

const Best = () => {

  const newarray1 = bestOf.filter((el) => el.desc1 === "bestSellers");
  const newarray2 = bestOf.filter((el) => el.desc1 === "topEarbuds");
  const newarray3 = bestOf.filter((el) => el.desc1 === "wireless");
  const newarray4 = bestOf.filter((el) => el.desc1 === "anc");

  

  return (
    <div className="container">
      <div className="best__tab ">
        <div className="best__tab__texts">
          <h1 className="best__tab__h1">Best Of </h1>
          <h2 className="best__tab__h2">TRAILFX</h2>
        </div>
        <TabsUnstyled className="best_tabs" defaultValue={0}>
          <TabsListUnstyled className="best__tab__person">
            <TabUnstyled className="best__tab__person__bab" href="#">
              Best Sellers
            </TabUnstyled>
            <TabUnstyled className="best__tab__person__bab ">
              Top Earbuds
            </TabUnstyled>
            <TabUnstyled className="best__tab__person__bab ">
              Trending Wireless
            </TabUnstyled>
            <TabUnstyled className="best__tab__person__bab">
              Trending ANC
            </TabUnstyled>
          </TabsListUnstyled>
          <TabPanelUnstyled value={0}>
            <div className="kkk">
              <div className="parent">
                {newarray1.map((el) => {
                  return (
                    <>
                      <Link className="ff" to={`/homecard/${el.id}`}>
                        <div className="card_best" to={el.id}>
                          <img className="card_best__img" src={el.pic} alt="" />
                          <div className="card__best_text">
                            <h1 className="card_best__h1">{el.name}</h1>
                            <p className="card_best_1 ">{el.fulldesc}</p>
                            <p className="card_best_2">{el.price} $</p>
                            <button className="card__btn">Learn More ></button>
                          </div>
                        </div>
                      </Link>
                    </>
                  );
                })}
              </div>
            </div>
          </TabPanelUnstyled>
          <TabPanelUnstyled value={1}>
            <div className="kkk">
              <div className="parent">
                {newarray2.map((el) => {
                  return (
                    <>
                      <Link className="ff" to={`/homecard/${el.id}`}>
                        <div className="card_best" to={el.id}>
                          <img className="card_best__img" src={el.pic} alt="" />
                          <div className="card__best_text">
                            <h1 className="card_best__h1">{el.name}</h1>
                            <p className="card_best_1 ">{el.fulldesc}</p>
                            <p className="card_best_2">{el.price} $</p>
                            <button className="card__btn">Learn More ></button>
                          </div>
                        </div>
                      </Link>
                    </>
                  );
                })}
              </div>
            </div>
          </TabPanelUnstyled>
          <TabPanelUnstyled value={2}>
            <div className="kkk">
              <div className="parent">
                {newarray3.map((el) => {
                  return (
                    <>
                      <Link className="ff" to={`/homecard/${el.id}`}>
                        <div className="card_best" to={el.id}>
                          <img className="card_best__img" src={el.pic} alt="" />
                          <div className="card__best_text">
                            <h1 className="card_best__h1">{el.name}</h1>
                            <p className="card_best_1 ">{el.fulldesc}</p>
                            <p className="card_best_2">{el.price} $</p>
                            <button className="card__btn">Learn More ></button>
                          </div>
                        </div>
                      </Link>
                    </>
                  );
                })}
              </div>
            </div>
          </TabPanelUnstyled>
          <TabPanelUnstyled value={3}>
            <div className="kkk">
              <div className="parent">
                {newarray4.map((el) => {
                  return (
                    <>
                      <Link className="ff" to={`/homecard/${el.id}`}>
                        <div className="card_best" to={el.id}>
                          <img className="card_best__img" src={el.pic} alt="" />
                          <div className="card__best_text">
                            <h1 className="card_best__h1">{el.name}</h1>
                            <p className="card_best_1 ">{el.fulldesc}</p>
                            <p className="card_best_2">{el.price} $</p>
                            <button className="card__btn">Learn More ></button>
                          </div>
                        </div>
                      </Link>
                    </>
                  );
                })}
              </div>
            </div>
          </TabPanelUnstyled>
        </TabsUnstyled>
      </div>
    </div>
  );
};

export default Best;
