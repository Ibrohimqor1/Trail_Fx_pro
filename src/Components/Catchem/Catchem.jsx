import * as React from "react";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import "../Best__Of/Best.scss";
import { bestOf } from "../../BestOf";
import { NavLink, Link } from "react-router-dom";

const Catchem = () => {
  const newarray9 = bestOf.filter((el) => el.desc1 === "products");
  const newarray10 = bestOf.filter((el) => el.desc1 === "launches");
  return (
    <div className="container">
      <div className="best__tab ">
        <div className="best__tab__texts">
          <h1 className="best__tab__h1">Catch'em </h1>
          <h2 className="best__tab__h2">All</h2>
        </div>
        <TabsUnstyled defaultValue={0}>
          <TabsListUnstyled className="best__tab__person">
            <TabUnstyled className="best__tab__person__bab active" href="#">
              New Launches
            </TabUnstyled>
            <TabUnstyled className="best__tab__person__bab active ">
              DC products
            </TabUnstyled>
          </TabsListUnstyled>
          <TabPanelUnstyled value={0}>
            <div className="kkk">
              <div className="parent">
                {newarray9.map((el) => {
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
                {newarray10.map((el) => {
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

export default Catchem;
