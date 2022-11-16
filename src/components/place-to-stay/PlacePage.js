import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router

import "./PlacePage.css";
import PlaceHeader from "./PlaceHeader";
import Places from "./Places";
import NftsDisplay from "./NftsDisplay";
import Footer from "../Footer";

const PlacePage = () => {
  return (
    <div>
      <PlaceHeader />
      <Places />
      <NftsDisplay />
      <Footer />
    </div>
  );
};

export default PlacePage;
