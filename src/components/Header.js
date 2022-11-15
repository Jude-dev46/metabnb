import React, { useState } from "react";

import "./Header.css";
import Wrapper from "./helpers/Wrapper";
import Modal from "../UI/Modal";

import logo from "../img/Group.png";
import img1 from "../img/image-4.png";
import img2 from "../img/image-5.png";
import img3 from "../img/image-3.png";
import img4 from "../img/image-6.png";
import Button from "../UI/Button";

const Header = () => {
  const [modal, setModal] = useState(false);

  const connectWalletHandler = (e) => {
    e.preventDefault();
    setModal(!modal);
  };

  return (
    <Wrapper>
      <div>{modal && <Modal onConfirm={connectWalletHandler} />}</div>
      <div className="container">
        <header>
          <nav>
            <div className="nav-content">
              <img src={logo} alt="logo" />
              <div className="nav-links">
                <a href="/">Home</a>
                <a href="/">Place To Stay</a>
                <a href="/">NFTs</a>
                <a href="/">Community</a>
              </div>
              <Button id="connect" onClick={connectWalletHandler}>
                Connect Wallet
              </Button>
            </div>
          </nav>
          <div className="header-container">
            <div className="header-text">
              <h1>
                Rent a <strong>Place</strong> away from
                <br /> <strong>Home</strong> in the <strong>Metaverse</strong>
              </h1>
              <p>
                we provide access to luxury and affordable houses
                <br /> in the metaverse, get a chance to turn your
                <br /> imagination to reality at your comfort zone
              </p>
              <div className="input-form">
                <input type="text" placeholder="Search for location" />
                <button className="search">Search</button>
              </div>
            </div>
            <div className="header-img">
              <div className="header-img__1">
                <img src={img1} alt="nft-1" />
                <img src={img2} alt="nft-2" />
              </div>
              <div className="header-img__2">
                <img src={img3} alt="nft-3" />
                <img src={img4} alt="nft-4" />
              </div>
            </div>
          </div>
        </header>
      </div>
    </Wrapper>
  );
};

export default Header;
