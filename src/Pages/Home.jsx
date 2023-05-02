import React from "react";
import Best from "../Components/Best__Of/Best";
import Catchem from "../Components/Catchem/Catchem";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import Offers from "../Components/Offers_hub/Offers";
import Pages from "../Components/Peges_access/Pages";
import Section2 from "../Components/Section2/Section2.jsx";
import VideoSlider from "../Components/VIdeoSlider/VideoSlider";
import SmartWatch from "./SmartWatch";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Offers/>
      <Pages/>
      <Best/>
      <SmartWatch/>
      <Section2 />
      <Catchem/>
      <Footer />
    </div>
  );
};

export default Home;
