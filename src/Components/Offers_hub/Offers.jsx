import * as React from "react";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import "../Best__Of/Best.scss";
import { bestOf } from "../../BestOf";
import { Link } from "react-router-dom";

const Offers = () => {
  const newarray5 = bestOf.filter((el) => el.desc1 === "749");
  const newarray6 = bestOf.filter((el) => el.desc1 === "999");
  const newarray7 = bestOf.filter((el) => el.desc1 === "1299");

  return (
    <div>
      <div className="container">
        <div className="best__tab ">
          <div className="best__tab__texts">
            <h1 className="best__tab__h1">Offers Hub </h1>
          </div>
          <TabsUnstyled defaultValue={0}>
            <TabsListUnstyled className="best__tab__person">
              <TabUnstyled className="best__tab__person__bab">
                749 STORE
              </TabUnstyled>
              <TabUnstyled className="best__tab__person__bab">
                999 Store
              </TabUnstyled>
              <TabUnstyled className="best__tab__person__bab">
                1299 Store
              </TabUnstyled>
            </TabsListUnstyled>
            <TabPanelUnstyled value={0}>
              <div className="kkk">
                <div className="parent">
                  {newarray5.map((el) => {
                    return (
                      <>
                        <Link className="ff" to={`/homecard/${el.id}`}>
                          <div className="card_best" to={el.id}>
                            <img
                              className="card_best__img"
                              src={el.pic}
                              alt=""
                            />
                            <div className="card__best_text">
                              <h1 className="card_best__h1">{el.name}</h1>
                              <p className="card_best_1 ">{el.fulldesc}</p>
                              <p className="card_best_2">{el.price} $</p>
                              <button className="card__btn">
                                Learn More >
                              </button>
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
                  {newarray6.map((el) => {
                    return (
                      <>
                        <Link className="ff" to={`/homecard/${el.id}`}>
                          <div className="card_best" to={el.id}>
                            <img
                              className="card_best__img"
                              src={el.pic}
                              alt=""
                            />
                            <div className="card__best_text">
                              <h1 className="card_best__h1">{el.name}</h1>
                              <p className="card_best_1 ">{el.fulldesc}</p>
                              <p className="card_best_2">{el.price} $</p>
                              <button className="card__btn">
                                Learn More >
                              </button>
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
                  {newarray7.map((el) => {
                    return (
                      <>
                        <Link className="ff" to={`/homecard/${el.id}`}>
                          <div className="card_best" to={el.id}>
                            <img
                              className="card_best__img"
                              src={el.pic}
                              alt=""
                            />
                            <div className="card__best_text">
                              <h1 className="card_best__h1">{el.name}</h1>
                              <p className="card_best_1 ">{el.fulldesc}</p>
                              <p className="card_best_2">{el.price} $</p>
                              <button className="card__btn">
                                Learn More >
                              </button>
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
    </div>
  );
};

export default Offers;
