import React from "react";

import "./Nfts.css";

import art1 from "../img/Nft1.png";
import art2 from "../img/Nft2.png";
import art3 from "../img/Nft3.png";
import art4 from "../img/Nft4.png";
import art5 from "../img/Nft5.png";
import art6 from "../img/Nft6.png";
import art7 from "../img/Nft7.png";
import art8 from "../img/Nft8.png";
import Star from "./Star";

const Nfts = () => {
  return (
    <div className="arts-container">
      <div className="row1">
        <div className="row-1__content">
          <img src={art1} alt="nft-1" className="row-image__1" />
          <div className="row-text">
            <h3>Desert king</h3>
            <p>1MBT per night</p>
          </div>
          <div className="row-text1">
            <p>2345km away</p>
            <p>available for 2 weeks stay</p>
          </div>
          <Star />
        </div>
        <div className="row-2__content">
          <img src={art2} alt="nft-2" />
          <div className="row-text">
            <h3>Desert king</h3>
            <p>1MBT per night</p>
          </div>
          <div className="row-text1">
            <p>2345km away</p>
            <p>available for 2 weeks stay</p>
          </div>
          <Star />
        </div>
        <div className="row-3__content">
          <img src={art3} alt="nft-3" />
          <div className="row-text">
            <h3>Desert king</h3>
            <p>1MBT per night</p>
          </div>
          <div className="row-text1">
            <p>2345km away</p>
            <p>available for 2 weeks stay</p>
          </div>
          <Star />
        </div>
        <div className="row-4__content">
          <img src={art4} alt="nft-4" />
          <div className="row-text">
            <h3>Desert king</h3>
            <p>1MBT per night</p>
          </div>
          <div className="row-text1">
            <p>2345km away</p>
            <p>available for 2 weeks stay</p>
          </div>
          <Star />
        </div>
      </div>
      <div className="row2">
        <div className="row-5__content">
          <img src={art5} alt="nft-5" />
          <div className="row-text">
            <h3>Desert king</h3>
            <p>1MBT per night</p>
          </div>
          <div className="row-text1">
            <p>2345km away</p>
            <p>available for 2 weeks stay</p>
          </div>
          <Star />
        </div>
        <div className="row-6__content">
          <img src={art6} alt="nft-6" />
          <div className="row-text">
            <h3>Desert king</h3>
            <p>1MBT per night</p>
          </div>
          <div className="row-text1">
            <p>2345km away</p>
            <p>available for 2 weeks stay</p>
          </div>
          <Star />
        </div>
        <div className="row-7__content">
          <img src={art7} alt="nft-7" />
          <div className="row-text">
            <h3>Desert king</h3>
            <p>1MBT per night</p>
          </div>
          <div className="row-text1">
            <p>2345km away</p>
            <p>available for 2 weeks stay</p>
          </div>
          <Star />
        </div>
        <div className="row-8__content">
          <img src={art8} alt="nft-8" />
          <div className="row-text">
            <h3>Desert king</h3>
            <p>1MBT per night</p>
          </div>
          <div className="row-text1">
            <p>2345km away</p>
            <p>available for 2 weeks stay</p>
          </div>
          <Star />
        </div>
      </div>
    </div>
  );
};

export default Nfts;
