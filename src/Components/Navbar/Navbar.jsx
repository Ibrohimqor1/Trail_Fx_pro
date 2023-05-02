import React, {useContext} from "react";
import { useCart } from "react-use-cart";
import "../Navbar/Navbar.scss";

import { NavLink, Link } from "react-router-dom";

import user from "../../Logos/user.png";
import icon from "../../Logos/icon_kor.png";
import { Context } from "../../Context";

const Navbar = () => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const { items } = useCart();
  
  const {logoutClasses, LogoutFunc} = useContext(Context);
  LogoutFunc()
  const Logout = ()=>{
    localStorage.removeItem("auth")
    LogoutFunc()
    window.location.replace("/register")
    
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
              width="140px"
              src="https://cdn.cookielaw.org/logos/3851eaea-a64c-4a2c-99e2-907f52d98962/e15a3e99-622e-4a6c-805b-673bee177911/edf28e1e-e1bf-494e-a4e3-be7d3e6cc37b/TrailFX_Logo_Standard.png"
              alt=""
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Переключатель навигации"
          >
            <span class="">
              <img
                width="30px"
                src="https://static.tildacdn.com/tild6232-6133-4535-a538-393631386562/menu.png"
                alt=""
              />
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class=" li_navbar nav-item">
                <a class="li__a nav-link active" href="#">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "activeLink" : "dropbtn2"
                    }
                  >
                    HOME
                  </NavLink>
                </a>
              </li>
              <div class="dropdown">
                <button class="dropbtn ">CATEGORIES</button>
                <div class="dropdown-content">
                  <div className="drop_btn">
                    <NavLink to="/airdopes" className="category_a">
                      <img
                        width="35px"
                        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/dropdown-TWS_100x.png?v=1663752600"
                        alt=""
                      />
                      <h6> Airdopes</h6>
                    </NavLink>
                    <NavLink to="/nescbands" className="category_a">
                      <img
                        width="35px"
                        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Neckbands_06214c1a-5e30-48ea-ac14-4a6bff679f48_100x.png?v=1678359377"
                        alt=""
                      />
                      <h6>Neckbands</h6>
                    </NavLink>
                    <NavLink to="/smartwatch" className="category_a">
                      <img
                        width="35px"
                        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/smartwatches_100x.png?v=1676372848"
                        alt=""
                      />
                      <h6>Smart Watch</h6>
                    </NavLink>
                    <NavLink to="/headphones" className="category_a">
                      <img
                        width="35px"
                        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Rockerz_100x.png?v=1678365843"
                        alt=""
                      />
                      <h6> Headphones</h6>
                    </NavLink>
                    <NavLink to="/speaker" className="category_a">
                      <img
                        width="35px"
                        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/box-5_100x.png?v=1663753243"
                        alt=""
                      />
                      <h6> Speakers</h6>
                    </NavLink>
                    <NavLink to="/headphones" className="category_a">
                      <img
                        width="35px"
                        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/bassheads-Wired-Headphones_0877b292-85ab-42ed-a055-26e1c246be73_100x.png?v=1678364207"
                        alt=""
                      />
                      <h6>HeadPhones</h6>
                    </NavLink>
                    <NavLink to="/earphones" className="category_a">
                      <img
                        width="35px"
                        src="https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/latest_background_b4f773ca-05d9-41cc-a7cf-3104993ae895_100x.png?v=1663753167"
                        alt=""
                      />
                      <h6> Earphones</h6>
                    </NavLink>
                  </div>
                </div>
              </div>
              <li class="li__a nav-link active">
                <NavLink
                  to="/dailyDeals"
                  className={({ isActive }) =>
                    isActive ? "activeLink" : "dropbtn2"
                  }
                >
                  DAILY DEALS
                </NavLink>
              </li>

              <li class="li__a nav-link active">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "activeLink" : "dropbtn2"
                  }
                >
                  GIFT WITH TRAILFX
                </NavLink>
              </li>
            </ul>
            <div class="gap-3 d-flex flex-row-reverse flex-lg-row">
              {/* <Link to="/register" >
                <img width="23px" src={user} alt="" />
              </Link> */}
              <Link to="/korzinka">
                <span className="ff1">{items.length}</span>
                <img className="s" width="24px" src={icon} alt="" />
              </Link>
              <button className="btn btn-light" onClick={Logout} >Sign Up</button>
              <Link to="/register"  className="btn btn-light" >Sign In</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
