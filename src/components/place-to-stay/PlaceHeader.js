import React, { useState } from "react";

import "./PlaceHeader.css";
import Button from "../../UI/Button";

import logo from "/Users/HP/metabnb/src/img/Group.png";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  Modal,
} from "react-bootstrap";

const PlaceHeader = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    // <div className="page-header">
    //   <div className="page-navs">
    //     <img src={logo} alt="logo" />
    //     <div className="place-links">
    //       <Link href="/home">Home</Link>
    //       <Link href="/">Place To Stay</Link>
    //       <Link href="/nfts">NFTs</Link>
    //       <Link href="/community">Community</Link>
    //     </div>
    //     <Button id="connect">Connect Wallet</Button>
    //   </div>
    // </div>
    <>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="" id="contained-modal-title-vcenter">
            Put Your Title Here!!!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Also Your Body goes here!!!</Modal.Body>
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
    </>
  );
};

export default PlaceHeader;
