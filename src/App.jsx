import React from "react";
import ListActions from "./Components/ListActions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ActionElected from "./Components/ActionElected";
import Home from './Components/Home'
import Help from './Components/Help'


function App() {
  return (
    
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menu" element={<ListActions />} />
        <Route exact path="/action/:idaction" element={<ActionElected />} />
        <Route exact path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
