import React from "react";
import "../Footer/Footer.scss";
const Footer = () => {
  return (
    <div className="">
      <div className="footer__1">
        <div className="container">
          <p className="footer__1__p">
            India's fastest growing audio & wearables brand. The most incredible
            range of wireless earphones, earbuds, headphones, smart watches,{" "}
            <br /> and home audio. From workouts to adventures, boAt will get
            you sailing!
          </p>
        </div>
      </div>
      <div className="container">
        <div className="Footeerr">
          <div className="container">
            <div className="Footeer">
              <div className="footer_bottom1">
                <img
                  className="py-3"
                  width="160px"
                  src="https://cdn.cookielaw.org/logos/3851eaea-a64c-4a2c-99e2-907f52d98962/e15a3e99-622e-4a6c-805b-673bee177911/edf28e1e-e1bf-494e-a4e3-be7d3e6cc37b/TrailFX_Logo_Standard.png"
                  alt=""
                />
                <p className="text-xs md:text-base py-3">
                  Subscribe to email alerts. We promise not to <br /> spam your
                  inbox.
                </p>
                <div className="input_btn">
                  <input type="text" placeholder="Email Address*" />
                  <button>SUBSCRIBE</button>
                </div>
              </div>
              <div className="footer_bottom2">
                <h1 className="footer_bottom2__h1" >SHOP</h1>
                <div className="footer-pp">
                <div className="footer_p">
                  <li className="">True Wireless Earbuds</li>
                  <li className="">Wired Headphones</li>
                  <li className="">Home Audio</li>
                  <li className="">Smart Watches</li>
                  <li className="">Misfit</li>
                  <li className="">Earn ₹100</li>
                </div>
                <div className="footer_p">
                  <li className="">Wireless Headphones</li>
                  <li className="">Wireless Speakers</li>
                  <li className="">Mobile Accessories</li>
                  <li className="">TRebel</li>
                  <li className="">Gift Card</li>
                </div>
                </div>
              </div>
              <div className="footer_bottom2">
                <h1 className="footer_bottom2__h1" >HELP</h1>
                <div className="footer-pp">
                <div className="footer_p">
                  <li className="">Track Your Order</li>
                  <li className="">Return Policy</li>
                  <li className="">Bulk Orders</li>
                  <li className="">Why Buy Direct</li>
                </div>
                <div className="footer_p">
                  <li className="">Warranty & Support</li>
                  <li className="">Service Centers</li>
                  <li className="">FAQs</li>
                </div>
                </div>
              </div>
              <div className="footer_bottom2">
                <h1 className="footer_bottom2__h1">COMPANY</h1>
                <div className="footer-pp">
                <div className="footer_p">
                  <li className="">About TrailFX</li>
                  <li className="">News</li>
                  <li className="">Read Our Blog</li>
                  <li  className="">Careers</li>
                  <li className="">Security</li>
                  <li className="">Terms of Service</li>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer3">
         
         <div className="img_footer">
           <img
           className="rounded-lg "
             width="40px"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
             alt=""
           />
         </div>
         <div className="img_footer">
           <img
             width="40px"
             src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png"
             alt=""
           />
         </div>
         <div className="img_footer">
           <img
             width="40px"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
             alt=""
           />
         </div>
         <div className="img_footer">
           <img
             width="60px"
             src="https://www.freepnglogos.com/uploads/youtube-logo-icon-transparent---32.png"
             alt=""
           />
         </div>
         <div className="img_footer">
           <img
             width="40px"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png"
             alt=""
           />
         </div>
        
       </div>
       <hr />



      </div>
    </div>
  );
};

export default Footer;
