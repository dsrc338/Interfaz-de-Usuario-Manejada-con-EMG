import React, { useContext, useEffect, useState } from "react";
import TitlePage from "./TitlePage";
import Help from "./Help";
import { SensorContext } from "../App.jsx";
import AddButtons from "./AddButtons.jsx";
import { Link, useNavigate } from "react-router-dom";

export function Calibration() {
  const { sensorData } = useContext(SensorContext);
  const { peakData, setPeakData } = useContext(SensorContext);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const time = setInterval(() => {
      setCount((prevCount) => {
        if (count === 30) {
          clearInterval(time);
          console.log("Peak", peakData);
          navigate("/home");
          return prevCount;
        }
        if (sensorData.value > peakData) {
          console.log("entra");
          setPeakData(sensorData.value);
          console.log("sensor:", sensorData.value);
        }
        return prevCount + 1;
      });
    }, 1000);

    return () => clearTimeout(time);
  }, [count]);

  return (
    <div className="text-center">
      <div className="py-0">
        <TitlePage nameTitle={"MuscleMover"} />
      </div>
      <div>
        <p>
          ¡Bienvenido a MuscleMover! Te ayudaré a comunicarte con tu asistente
          médico usando solo tus pensamientos. Te colocarán unos sensores que no
          te harán daño, los cuales te permitirán controlar MuscleMover. Intenta
          realizar la mayor fuerza posible durante 30 segundos para que así
          pueda registrar tu fuerza y te sea más fácil controlarme. Después de
          haber registrado tu fuerza, te explicaré mi función y cómo podré
          ayudarte.
        </p>
      </div>
      <div>
        <TitlePage nameTitle={"Calibración del Sensor"} />
      </div>
      <div>
        <p className="text-2xl">Temporizador: {count}</p>
      </div>
      <div>
        {count === 30 && <p className="text-xl">Contador Finalizado</p>}
      </div>
      <div>
        <p className="text-xl">Valor del sensor: {sensorData.value}</p>
      </div>
      <div>
        <p>Fuerza Máxima: {peakData}</p>
      </div>
      <Link to={"/home"}>
        <AddButtons actionName={"Home"} id={"Home"} />
      </Link>
    </div>
  );
}

export default Calibration;
