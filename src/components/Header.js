import React, { useState } from "react";

import "./Header.css";
import Wrapper from "./helpers/Wrapper";
// import Modal from "../UI/Modal";

import logo from "../img/Group.png";
import img1 from "../img/image-4.png";
import img2 from "../img/image-5.png";
import img3 from "../img/image-3.png";
import img4 from "../img/image-6.png";
import metamask from "../img/metamask.png";
import walletConnect from "../img/wallet-connect.png";
import Button from "../UI/Button";

import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Header = () => {
  // const [modal, setModal] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  // const connectWalletHandler = (e) => {
  //   e.preventDefault();
  //   setModal(!modal);
  // };

  return (
    <Wrapper>
      {/* <div>{modal && <Modal onConfirm={connectWalletHandler} />}</div> */}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="" id="contained-modal-title-vcenter">
            Connect your wallet:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <div className="modal-body1">
            <p>Choose your preferred wallet</p>
            <button>
              <img src={metamask} alt="metamask" />
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-right"
              >
                <path
                  d="M14.3838 10.0001C14.3838 10.2689 14.2812 10.5377 14.0763 10.7427L7.62657 17.1923C7.21628 17.6026 6.55108 17.6026 6.14096 17.1923C5.73084 16.7822 5.73084 16.1172 6.14096 15.7068L11.8481 10.0001L6.14116 4.2933C5.73104 3.88301 5.73104 3.21801 6.14116 2.80792C6.55128 2.39744 7.21648 2.39744 7.62677 2.80792L14.0765 9.2575C14.2814 9.46256 14.3838 9.73135 14.3838 10.0001Z"
                  fill="#959DA6"
                />
              </svg>
            </button>
            <button>
              <img src={walletConnect} alt="wallet-connect" />
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-right"
              >
                <path
                  d="M14.3838 10.0001C14.3838 10.2689 14.2812 10.5377 14.0763 10.7427L7.62657 17.1923C7.21628 17.6026 6.55108 17.6026 6.14096 17.1923C5.73084 16.7822 5.73084 16.1172 6.14096 15.7068L11.8481 10.0001L6.14116 4.2933C5.73104 3.88301 5.73104 3.21801 6.14116 2.80792C6.55128 2.39744 7.21648 2.39744 7.62677 2.80792L14.0765 9.2575C14.2814 9.46256 14.3838 9.73135 14.3838 10.0001Z"
                  fill="#959DA6"
                />
              </svg>
            </button>
          </div>
        </Modal.Body>
      </Modal>

      <Navbar collapseOnSelect expand="lg" className="navigation">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbarText">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Place to stay</Nav.Link>
              <Nav.Link>Nfts</Nav.Link>
              <Nav.Link>Community</Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
              <Button id="connect" onClick={() => setModalShow(true)}>
                Connect Wallet
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <div className="header-container">
          <Row>
            <Col xs={12} md={6}>
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
            </Col>
            <Col xs={12} md={6}>
              <div className="header-img">
                <Row className="header-img__1">
                  <Col xs={12} md={6}>
                    <Image
                      src={img1}
                      alt="nft-1"
                      fluid
                      style={{ width: "100%" }}
                      className="image-1"
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <Image
                      src={img2}
                      alt="nft-2"
                      fluid
                      style={{ width: "100%" }}
                      className="image-2"
                    />
                  </Col>
                </Row>
                <Row className="header-img__2">
                  <Col xs={12} md={6}>
                    <Image
                      src={img3}
                      alt="nft-3"
                      fluid
                      style={{ width: "100%" }}
                      className="image-3"
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <Image
                      src={img4}
                      alt="nft-4"
                      fluid
                      style={{ width: "100%" }}
                      className="image-4"
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Header;
