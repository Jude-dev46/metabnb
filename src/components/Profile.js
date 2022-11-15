import React from "react";

import "./Profile.css";
import profile from "../img/profile-img.png";
import Button from "../UI/Button";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <div className="profile-text">
          <h2>Metabnb NFTs</h2>
          <p>
            Discover our NFT gifts cards collection. Loyal customers get amazing
            gift cards which are traded as NFTs. These NFTs give our customer
            access to loads of our exclusive services.
          </p>
          <Button>Learn More</Button>
        </div>
        <div className="profile-imgs">
          <img src={profile} alt="profile__images" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
