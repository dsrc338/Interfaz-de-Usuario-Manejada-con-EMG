import React, { useState, useEffect } from "react";
import "./styles.css";

function ButtonsActions({ actionName, actionVoz, onClick, isSelected }) {
  //se agrego motor de voz con la API Speech Synthesis de JavaScript, ofrece voces que esten impplementadas en el navegador
  const [isSpeaking, setIsSpeaking] = useState(false); //comienza en false

  const handleClick = () => {
    if (isSpeaking) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      const speech = new SpeechSynthesisUtterance(actionVoz);
      //const speech = new SpeechSynthesisUtterance( subject +' Quiero ' + actionOption + actionName);
      const voices = speechSynthesis.getVoices(); //se obtienen todas las voces posibles
      const chileanSpanishVoice = voices.find((voice) => voice.lang == "es-CL"); //se busca el acento español chileno
      if (chileanSpanishVoice) {
        //si lo encuenrta
        speech.voice = chileanSpanishVoice; //se le asigna a la variable que emitira la voz
      }
      speech.onend = () => setIsSpeaking(false); // sera false hasta que no termine de reprodurice la voz
      speechSynthesis.speak(speech); //se emite la voz
      //console.log(`Button "${actionName}" clicked`);
    }
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
