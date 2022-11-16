import React from "react";

import "./Places.css";
import vector from "/Users/HP/metabnb/src/img/vector.png";
import { Row, Col, Container, Image } from "react-bootstrap";

const Places = () => {
  return (
    <div className="places">
      <Container>
        <Row className="place">
          <Col xs={12} md={2}>
            <ul>
              <li>Restaurant</li>
              <li>Cottage</li>
              <li>Castle</li>
              <li>fantast city</li>
              <li>beach</li>
              <li>Carbins</li>
              <li>Off-grid</li>
              <li>Farm</li>
            </ul>
          </Col>
          <Col xs={4} md={2}>
            <div className="place-2">
              <p>Location</p>
              <img src={vector} alt="vector" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Places;
