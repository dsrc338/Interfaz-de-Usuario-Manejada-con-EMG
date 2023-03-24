import React, { createContext, useState, useEffect } from "react";
import ListActions from "./Components/ListActions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ActionElected from "./Components/ActionElected";
import Home from './Components/Home'
import Help from './Components/Help'
import SERVER_URL from "./config.js";

export const SensorContext = createContext();

function App() {
  const [sensorData, setSensorData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

    const handleSensorData = (data) =>{
      console.log("handleSensorData ejecutado");
      setSensorData(data);
    }
    //Obtener los valores del sensor muscular. cada 500ms 
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setIsLoading(true);
        fetch(`${SERVER_URL}/datos`)
          .then((response) => response.json())
          .then((data) => {
            setIsLoading(false);
            handleSensorData(data);
          })
          .catch((error) => console.error(error));
      }, 500);
      return () => clearTimeout(timeoutId);
    }, [handleSensorData]);

  return (
    <SensorContext.Provider value={{ sensorData, setSensorData }}>
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menu" element={<ListActions handleSensorData={handleSensorData}/>} />
        <Route exact path="/action/:idaction" element={<ActionElected />} />
        <Route exact path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
    </>
    </SensorContext.Provider>
  );
}

export default App;
