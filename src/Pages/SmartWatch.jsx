import * as React from "react";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import "../Components/Best__Of/Best.scss";
import { bestOf } from "../BestOf";
import { NavLink, Link } from "react-router-dom";

const SmartWatch = () => {
  const newarray11 = bestOf.filter((el) => el.desc1 === "calling");
  const newarray12 = bestOf.filter((el) => el.desc1 === "amoled");
  const newarray13 = bestOf.filter((el) => el.desc1 === "fashion");
  const newarray14 = bestOf.filter((el) => el.desc1 === "fitness");
  return (
    <div className="container">
      <div className="best__tab ">
        <div className="best__tab__texts">
          <h1 className="best__tab__h1">Smart </h1>
          <h2 className="best__tab__h2">Watches</h2>
        </div>
        <TabsUnstyled defaultValue={0}>
          <TabsListUnstyled className="best__tab__person">
            <TabUnstyled className="best__tab__person__bab active" href="#">
              BT Calling
            </TabUnstyled>
            <TabUnstyled className="best__tab__person__bab active ">
              AMOLED
            </TabUnstyled>
            <TabUnstyled className="best__tab__person__bab active ">
              Fashion
            </TabUnstyled>
            <TabUnstyled className="best__tab__person__bab active ">
              Fitness
            </TabUnstyled>
          </TabsListUnstyled>
          <TabPanelUnstyled value={0}>
            <div className="kkk">
              <div className="parent">
                {newarray11.map((el) => {
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
                {newarray12.map((el) => {
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
                {newarray13.map((el) => {
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
                {newarray14.map((el) => {
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

export default SmartWatch;
