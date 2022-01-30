import React from "react";
import "./Styles/styles.scss";
import Header from "./Components/Header.jsx";
import Body from "./Components/Body";
import LeftAligned from "./Components/LeftAligned";
import RightAligned from "./Components/RightAligned";
import Footer from "./Components/Footer";

const Newsletter = () => {
  return (
    <div id="newsletter">
      <div className="container">
        <Header />
        <Body />
        <LeftAligned />
        <RightAligned />
        <LeftAligned />
        <RightAligned />
        <LeftAligned />
        <RightAligned />
        <Footer />
      </div>
    </div>
  );
};

export default Newsletter;
