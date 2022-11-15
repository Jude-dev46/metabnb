import React from "react";

import "./Logos.css";
import img7 from "../img/image-7.png";
import img8 from "../img/image-8.png";
import img9 from "../img/image-9.png";

const Logos = (props) => {
  return (
    <div className="logo-items">
      <img src={img8} alt="MBToken" />
      <img src={img9} alt="Metamask" />
      <img src={img7} alt="Opensea" />
    </div>
  );
};

export default Logos;
