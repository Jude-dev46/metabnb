import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import DisplayPage from "./components/DisplayPage";
import PlacePage from "./components/place-to-stay/PlacePage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<DisplayPage />} />
          <Route path="/placeToStay" element={<PlacePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
