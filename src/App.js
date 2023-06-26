import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./component/Home";
import Info from "./component/Info";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
