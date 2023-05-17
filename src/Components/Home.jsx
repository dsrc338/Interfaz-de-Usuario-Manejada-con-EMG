import { useState, useEffect, useContext } from "react";
import { actions as dataact } from "../data/actions";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TitlePage from "./TitlePage";
import { FaQuestion } from "react-icons/fa";
import ImgBack from "../images/back.png";
import { SensorContext } from "../App.jsx";
import AddButtons from "./AddButtons.jsx";

function Home() {
  const [actions, setActions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(0);
  const { sensorData } = useContext(SensorContext);
  const { peakData } = useContext(SensorContext);
  const navigate = useNavigate();

  console.log("PeakData; ", peakData);

  useEffect(() => {
    setActions(dataact);
    if (sensorData.value >= peakData-10) {
      navigate("/menu");
    }
  }, [sensorData.value, navigate]);

  return (
    <div className="lg text-center">
      <div className="py-0">
        <TitlePage nameTitle={"MuscleMover"} />
      </div>
      <div className="flex justify-between">
        <div className="text-left flex items-start">
          <p className="mr-4">Valor sensor: {sensorData.value}</p>
        </div>
        <div className="text-right flex items-start">
          <p className="mr-4">Fuerza Máxima: {peakData}</p>
        </div>
      </div>
      <div className="m-0">
        <p className="leading-relaxed">
          !Te ayudare a poder comunicarte de mejor forma con tu asistente médico!.
          Gracias a mi motor de voz, podrás informarle lo
          que necesites sin necesidad de hablar!. Ofrezco 6 opciones principales,
          cada una con 3 opciones adicionales, para que puedas seleccionar lo
          que necesitas y comunicárselo a tu asistente médico. Además, tienes
          una opción que te llevará de vuelta a esta página principal en caso
          de que olvides algo."
          <FaQuestion
            icon="fa-regular fa-square-question"
            className="bg-blue-500 rounded text-white inline-block"
          />
          ". Si eliges una opción, te llevaré a una página donde podrás ver las
          3 opciones adicionales y elegir la que más te convenga. También dispongo de un
          un botón para volver al menú principal en caso de que quieras explorar
          las otras opciones principales. "
          <img
            src={ImgBack}
            alt=""
            className="w-8 h-8 inline-block bg-gray-200 rounded-full"
          />
          ".
        </p>
        <div className="">
          <p className="text-xl font-medium text-black">
            ¡Gracias por ocuparme y espero pueda ser de ayuda!.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl text-center font-bold tracking-wide font-monospace underline text-teal-500 py-1">
          Opciones
        </h2>
      </div>
      <div className="py-1">
        <ul
          role="list"
          className="grid grid-cols-3 mx-auto items-center px-1  marker:text-teal-400 list-disc pl-5 space-y-1 text-black list-inside text-justify p-1 divide-y divide-slate-200"
        >
          {actions.slice(0, 6).map((action, index) => (
            <li className="flex py-1 px-1 first:pt-0 last:pb-0" key={index}>
              <img
                className="h-14 w-14 rounded-full bg-gray-200"
                src={action.images}
                alt=""
              />
              <div className="ml-2 overflow-hidden">
                <p className="text-sm font-medium text-slate-900">
                  {action.name}
                </p>
                <p className="text-sm text-slate-500">{action.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className=" max-w-md mx-auto mb-2">
        <Link to={"/menu"}>
          <AddButtons
            actionName={"Menu"}
            id="menu"
            isSelected={0 === selectedOption}
          />
        </Link>
      </div>
      <div>
        <Link to={"/"}>
          <AddButtons actionName={"Calibrar"} id={"calibracion"} />
        </Link>
      </div>
    </div>
  );
}

export default Home;
