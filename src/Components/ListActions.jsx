import React, { useState, useEffect, useMemo, useRef, useContext } from "react";
import { actions as dataact } from "../data/actions";
import ButtonsActions from "./AddButtons";
import { Link } from "react-router-dom";
import TitlePage from "./TitlePage";
import Help from "./Help";
import "./styles.css";
import { SensorContext } from "../App.jsx";

function ListActions(props) {
  //const [actions, setActions] = useState([]);
  const { sensorData, setSensorData } = useContext(SensorContext);
  const [selectedOption, setSelectedOption] = useState(0);
  const lastSelectedOption = useRef(0);
  const { peakData } = useContext(SensorContext);

  //obtengo las opciones disponibles del arreglo de objeto "actions.js".
 // console.log(peakData - 30);
  const actions = dataact.slice(0, 6).map((action, index) => {
    return {
      ...action,
      element: (
        <div
          key={action.id}
          className={`bg-gray-200 rounded-md p-1 mx-auto shadow-md shadow-gray-500/50`}
        >
          <img
            src={action.images}
            alt={action.name}
            className="h-48 w-auto mx-auto"
          />
          <Link to={`/action/${action.id}`}>
            <ButtonsActions actionName={action.name} actionVoz={action.voz} />
          </Link>
        </div>
      ),
    };
  });
  //funcion para ir actualizando los datos que van llegando y realizar el movimiento por la interfaz
  useEffect(() => {
    let newSelectedOption;
    if (sensorData.value >= peakData - 50 && sensorData.value <= peakData - 20) {
      newSelectedOption = (selectedOption + 1) % actions.length;
      console.log('entra');
    } else {
      newSelectedOption = selectedOption;
    }
    if (newSelectedOption !== selectedOption) {
      setSelectedOption(newSelectedOption);
    }

    setSensorData({ value: sensorData.value });
  }, [sensorData.value]);

  useEffect(() => {
    console.log("Selected option updated to: ", selectedOption);
    lastSelectedOption.current = selectedOption;
  }, [selectedOption]);

  //se utiliza memorizacion para no volver a renderizar innecesariamente
  const actionsElements = useMemo(
    () =>
      actions.map((action, index) =>
        React.cloneElement(action.element, {
          children: (
            <>
              <img
                src={action.images}
                alt={action.name}
                className="h-40 w-auto mx-auto"
                style={{ opacity: index === selectedOption ? 1 : 0.5 }}
              />
              <Link to={`/action/${action.id}`}>
                <ButtonsActions
                  actionName={action.name}
                  actionVoz={action.voz}
                  actionId={action.id}
                  isSelected={index === selectedOption}
                  optionSelect={selectedOption}
                />
              </Link>
            </>
          ),
        })
      ),
    [actions, selectedOption]
  );
  //renderizado
  return (
    <div>
      <div className="m-1">
        <div className="absolute top-2 right-4 text-3xl bg-blue-500 rounded hover:bg-blue-700">
          <Help />
        </div>
        <div className="grid grid-cols-3 gap-3 mx-46">{actionsElements}</div>
      </div>
    </div>
  );
}

export default ListActions;
