export function motorVoz(actionVoz, setIsSpeaking, isSpeaking) {
  console.log('isSpeaking',isSpeaking);
  if (isSpeaking) {
    if (speechSynthesis.speaking) {
      // verificar si se está reproduciendo la síntesis de voz
      console.log('isSpeaking es verdadero, no hablar de nuevo');
      return;
    }
  }
  setIsSpeaking(true);
  const speech = new SpeechSynthesisUtterance(actionVoz);
  const voices = speechSynthesis.getVoices(); //se obtienen todas las voces posibles
  //console.log(voices);
  const chileananSpanishVoice = voices.find((voice) => voice.lang === 'es-ES'); //se busca el acento español chileno
  if (chileananSpanishVoice) {
    //si lo encuenrta
    speech.voice = chileananSpanishVoice; //se le asigna a la variable que emitira la voz
    console.log('se selecciono la voz chilena');
  }
  else{
    console.log('no se selecciono la voz chilena')
  }
  
  speech.onend = () => {
    setIsSpeaking(false);
    //console.log('speech.onend called');
  }; // sera false hasta que no termine de reprodurice la voz
  speechSynthesis.speak(speech); //se emite la voz
  console.log(`Button "${actionVoz}" clicked`);
}