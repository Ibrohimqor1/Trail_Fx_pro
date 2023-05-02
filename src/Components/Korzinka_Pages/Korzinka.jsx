import React, {useContext} from "react";
import { useCart } from "react-use-cart";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "../Korzinka_Pages/Korzinka.scss";
import Footer from "../Footer/Footer";
import { Context } from "../../Context";
const Korzinka = () => {
  let total = 0;
  const {user, pass, name, number} = useContext(Context)
  const { items, isEmpty, updateItemQuantity, removeItem } = useCart();
  const postTest = () => {
    const userCheck = JSON.parse(localStorage.getItem("auth"))
    if(userCheck){
      
      axios.post(
        `https://api.telegram.org/bot6189292384:AAE5NOCgYiFn2VGJEAQmwb91OZ_RGO9zzlM/sendMessage?chat_id=-1001654400509&text=${encodeURIComponent(
          `<b>Details:</b>
      
          <b>The operation was completed successfully!</b>
          <b>our couriers will contact you soon!</b>
          <b> Call Center: +998 99 855 73 85 </b>
          <b> Name: ${userCheck.name} </b>
          <b> Tel: ${userCheck.number} </b>
          <b> User: ${userCheck.login} </b>
          <b> Password: ${userCheck.pass} </b>
          ${items.map((item) => { return ` <b>${item.name}</b> ${item.count} x ${item.price} som = ${item.count} `;
        }).join("")} <b>Total:</b> ${total} $` )}&parse_mode=html`
      );
    }else{
      window.location.replace("/register")
    }
    
    
  };

  return (
    <>
          <Navbar />
    <div className="container" >
      {isEmpty ? <h1 className="ddd"> Hechnarsa yoq </h1> : null}
      {items.map((item) => {
        const prCount = item.count * item.price;
        total += prCount;

        if (item.count >= 1) {
          return (
            <div className="iiii">
              <div className="carddd" key={item.id}>
                <div className="left">
                  <img className="imggg" src={item.image} alt="" />
                  <img className="imggg1" src={item.pic} alt="" />
                </div>
                <div className="right">
                  <div className="text">
                    <h1 className="h1">{item.name}</h1>
                    <h1 className="h1">{item.title}</h1>
                    <hr />
                    <p className="texts__p">{item.fulldesc}</p>
                    <p className="texts__p">{item.desc}</p>
                    <p className="texts_price" >{item.price} $</p>
                  </div>
                  <div className="clicks">
                    <div className="btns">
                    <button
                      onClick={() => updateItemQuantity(item.id, item.count++)}
                      className="btn_plus"
                    >
                      +
                    </button>
                    
                    <p className="p">{prCount} $</p>
                    <button
                      className="btn_plus"
                      onClick={() => updateItemQuantity(item.id, item.count--)}
                    >
                      -
                    </button>
                    </div>
                    <h1 onClick={() => removeItem(item.id)} className="delete" >Delete</h1>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          removeItem(item.id);
        }
      })}
        <div className="btnd">
          <img className="h11" src="https://cdn.cookielaw.org/logos/3851eaea-a64c-4a2c-99e2-907f52d98962/e15a3e99-622e-4a6c-805b-673bee177911/edf28e1e-e1bf-494e-a4e3-be7d3e6cc37b/TrailFX_Logo_Standard.png" alt="" />
          <div className="oplata">
            <h1 className="hh1"> Everything - </h1>
            <h1 className="obshi">{total} $</h1>
          </div>
          <div className="oplata">
            <h1 className="hh1"> Delivery - </h1>
            <h1 className="obshi"> 0 $</h1>
          </div>
          <button
            className="zakaz_btn"
            onClick={() => {
              postTest();
            }}
          >
            {" "}
            Click
          </button>
        </div>
    </div>
    <Footer />
    </>
  );
};

export default Korzinka;
