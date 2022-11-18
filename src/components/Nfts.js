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
import { Row, Col, Container } from "react-bootstrap";

const Nfts = () => {
  return (
    <div className="arts-container">
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <div className="row-1__content">
              <img src={art1} alt="nft-1" className="row-image__1" />
              <div className="row-text">
                <p>Desert king</p>
                <p>1MBT per night</p>
              </div>
              <div className="row-text1">
                <p>2345km away</p>
                <p>available for 2 weeks stay</p>
              </div>
              <Star />
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="row-2__content">
              <img src={art2} alt="nft-2" className="row-image__1" />
              <div className="row-text">
                <p>Desert king</p>
                <p>1MBT per night</p>
              </div>
              <div className="row-text1">
                <p>2345km away</p>
                <p>available for 2 weeks stay</p>
              </div>
              <Star />
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="row-1__content">
              <img src={art3} alt="nft-3" className="row-image__1" />
              <div className="row-text">
                <p>Desert king</p>
                <p>1MBT per night</p>
              </div>
              <div className="row-text1">
                <p>2345km away</p>
                <p>available for 2 weeks stay</p>
              </div>
              <Star />
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="row-1__content">
              <img src={art4} alt="nft-4" className="row-image__1" />
              <div className="row-text">
                <p>Desert king</p>
                <p>1MBT per night</p>
              </div>
              <div className="row-text1">
                <p>2345km away</p>
                <p>available for 2 weeks stay</p>
              </div>
              <Star />
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={12} md={3}>
            <div className="row-1__content">
              <img src={art5} alt="nft-1" className="row-image__1" />
              <div className="row-text">
                <p>Desert king</p>
                <p>1MBT per night</p>
              </div>
              <div className="row-text1">
                <p>2345km away</p>
                <p>available for 2 weeks stay</p>
              </div>
              <Star />
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="row-2__content">
              <img src={art6} alt="nft-2" className="row-image__1" />
              <div className="row-text">
                <p>Desert king</p>
                <p>1MBT per night</p>
              </div>
              <div className="row-text1">
                <p>2345km away</p>
                <p>available for 2 weeks stay</p>
              </div>
              <Star />
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="row-1__content">
              <img src={art7} alt="nft-3" className="row-image__1" />
              <div className="row-text">
                <p>Desert king</p>
                <p>1MBT per night</p>
              </div>
              <div className="row-text1">
                <p>2345km away</p>
                <p>available for 2 weeks stay</p>
              </div>
              <Star />
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="row-1__content">
              <img src={art8} alt="nft-4" className="row-image__1" />
              <div className="row-text">
                <p>Desert king</p>
                <p>1MBT per night</p>
              </div>
              <div className="row-text1">
                <p>2345km away</p>
                <p>available for 2 weeks stay</p>
              </div>
              <Star />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Nfts;
