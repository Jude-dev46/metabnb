import React from "react";
import DisplayArts from "./DisplayArts";
import Footer from "./Footer";
import Header from "./Header";
import Logos from "./Logos";
import Profile from "./Profile";

const DisplayPage = () => {
  return (
    <div>
      <Header />
      <Logos />
      <DisplayArts />
      <Profile />
      <Footer />
    </div>
  );
};

export default DisplayPage;
