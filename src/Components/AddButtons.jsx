import React, { useState, useEffect,useContext } from "react";
import "./styles.css";
import { SensorContext } from "../App.jsx";
import {useNavigate } from "react-router-dom";

function ButtonsActions({ actionName, actionVoz, optionSelect , isSelected }) {
  //se agrego motor de voz con la API Speech Synthesis de JavaScript, ofrece voces que esten impplementadas en el navegador
  const [isSpeaking, setIsSpeaking] = useState(false); //comienza en false
  const { sensorData } = useContext(SensorContext);
  const navigate = useNavigate();

  function motorVoz() {
    if (isSpeaking) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      const speech = new SpeechSynthesisUtterance(actionVoz);
      const voices = speechSynthesis.getVoices(); //se obtienen todas las voces posibles
      const chileanSpanishVoice = voices.find((voice) => voice.lang == "es-CL"); //se busca el acento español chileno
      if (chileanSpanishVoice) {
        //si lo encuenrta
        speech.voice = chileanSpanishVoice; //se le asigna a la variable que emitira la voz
      }
      speech.onend = () => setIsSpeaking(false); // sera false hasta que no termine de reprodurice la voz
      //onClick();
      speechSynthesis.speak(speech); //se emite la voz
      //console.log(`Button "${actionName}" clicked`);
    }
  };

  useEffect(() =>{
    if(isSelected && sensorData.value >= 70 && sensorData.value <= 110){
      console.log('Action ID: ',optionSelect);
      navigate(`/action/${optionSelect}`)
      motorVoz();
    }
  })


  const handleClick = () => {
    motorVoz();
  };

  return (
    //``
    <button
      className={`bg-teal-500 hover:opacity-25 rounded w-24 h-12 text-xl my-0 font-semibold text-white display: block mr-auto ml-auto ${
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
