import React, { useState } from "react";

import "./PlaceHeader.css";
import Button from "../../UI/Button";

import logo from "../../img/Group.png";
import { Container, Nav, Navbar, Modal } from "react-bootstrap";
import metamask from "../../img/metamask.png";
import walletConnect from "../../img/wallet-connect.png";

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
            Connect your wallet:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
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
          <Navbar.Brand href="/home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbarText">
              <Nav.Link href="/home" to="<DisplayPage />">
                Home
              </Nav.Link>
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
