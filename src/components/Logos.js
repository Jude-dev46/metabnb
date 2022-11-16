import React from "react";

import "./Logos.css";
import img7 from "../img/image-7.png";
import img8 from "../img/image-8.png";
import img9 from "../img/image-9.png";
import { Row, Col, Container, Image } from "react-bootstrap";

const Logos = (props) => {
  return (
    <div className="logo-items">
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <Image src={img8} alt="MBToken" fluid style={{ width: '50%' }} />
          </Col>
          <Col xs={12} md={4}>
            <Image src={img9} alt="Metamask" fluid style={{ width: '50%' }} />
          </Col>
          <Col xs={12} md={4}>
            <Image src={img7} alt="Opensea" fluid style={{ width: '50%' }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Logos;
