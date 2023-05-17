import React, { useState, useEffect, useContext } from "react";
import "./styles.css";
import { SensorContext } from "../App.jsx";
import { motorVoz } from "./motorVoz";
import {useNavigate} from 'react-router-dom'
import './button.css'

function ButtonsActions({ actionName, actionVoz,actionId , optionSelect, isSelected }) {
  //se agrego motor de voz con la API Speech Synthesis de JavaScript, ofrece voces que esten impplementadas en el navegador
  const [isSpeaking, setIsSpeaking] = useState(false); //comienza en false
  const { sensorData } = useContext(SensorContext);
  const { peakData } = useContext(SensorContext);
  const urlActual = window.location.href;
  const urlParts = urlActual.split("/");
  const lastSegment = urlParts.pop();
  //console.log('urlParts',urlParts);

  const navigate = useNavigate();

  const handleClick = () => {
    motorVoz(actionVoz, setIsSpeaking,isSpeaking);
  };

  
  useEffect(() =>{
    if (!isSpeaking && isSelected && sensorData.value >= peakData - 10 && sensorData.value <= peakData) {
      if (urlActual === 'http://localhost:5173/menu') {
        //console.log(isSelected);
        motorVoz(actionVoz, setIsSpeaking, isSpeaking);
        console.log('activa motor de voz');
        navigate(`/action/${actionId}`);
      }
  
      if (urlActual === `http://localhost:5173/action/${lastSegment}`) {
        //console.log(isSelected);
        //setIsSpeaking(true);
        motorVoz(actionVoz, setIsSpeaking, isSpeaking);
        console.log('activa motor de voz');
      }
  
      if (urlActual === `http://localhost:5173/action/${lastSegment}` && actionName === 'Atrás') {
        navigate('/menu');
      }
    }
  },[sensorData.value,actionVoz,actionId]);


  return (
    <button
      className={`bg-teal-500 hover:opacity-25 rounded w-28 h-12 text-xl my-0 font-semibold text-white display: block mr-auto ml-auto ${
        isSelected ? "buttonselected" : ""
      }`}
      onClick={handleClick}
      disabled={isSpeaking}
    >
      {actionName}
    </button>
  );
}

export default ButtonsActions;
