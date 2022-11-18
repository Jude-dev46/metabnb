import React from "react";

import "./Places.css";
import vector from "../../img/vector.png";
import { Row, Col, Container } from "react-bootstrap";

const Places = () => {
  return (
    <div className="places">
      <Container>
        <Row className="place">
          <Col xs={10} md={9}>
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
          <Col xs={12} md={3}>
            <div className="place-2">
              <Row>
                <Col xs={8} md={10}>
                  <p>Location</p>
                </Col>
                <Col xs={4} md={2}>
                  <img src={vector} alt="vector" />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Places;
