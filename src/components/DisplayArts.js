import React from "react";

import "./DisplayArts.css";
import Nfts from "./Nfts";
import { Row, Col, Container, Image } from "react-bootstrap";

const DisplayArts = () => {
  return (
    <div className="art-container">
      <h2>Inspiration for your next adventure</h2>
      <Nfts />
    </div>
  );
};

export default DisplayArts;
