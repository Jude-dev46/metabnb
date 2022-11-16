import React from "react";

import "./Profile.css";
import profile from "../img/profile-img.png";
import Button from "../UI/Button";
import { Row, Col, Container, Image } from "react-bootstrap";

const Profile = () => {
  return (
    <div className="profile-container">
      <Container>
          <Row>
            <Col xs={12} md={6}>
                <div className="profile-text">
                  <h2>Metabnb NFTs</h2>
                  <p>
                    Discover our NFT gifts cards collection. Loyal customers get amazing
                    gift cards which are traded as NFTs. These NFTs give our customer
                    access to loads of our exclusive services.
                  </p>
                  <Button>Learn More</Button>
                </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="profile-imgs">
                <Image src={profile} alt="profile__images" fluid />
              </div>
            </Col>
          </Row>
      </Container>
    </div>
  );
};

export default Profile;
