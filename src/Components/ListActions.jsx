import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { actions as dataact } from "../data/actions";
import ButtonsActions from "./AddButtons";
import { Link } from "react-router-dom";
import TitlePage from "./TitlePage";
import Help from "./Help";
import SERVER_URL from "../config.js";
import "./styles.css";

//obtengo las opciones disponibles del arreglo de objeto "actions.js".
const actions = dataact.map((action) => {
  return {
    ...action,
    element: (
      <div
        key={action.id}
        className={`bg-gray-200 rounded-md p-4 mx-auto shadow-md shadow-gray-500/50`}
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

function ListActions() {
  //const [actions, setActions] = useState([]);
  const [sensorData, setSensorData] = useState({});
  const [selectedOption, setSelectedOption] = useState(0);
  const lastSelectedOption = useRef(0);
  const [isLoading, setIsLoading] = useState(false);

  // setActions(dataact);

  //funcion para ir actualizando los datos que van llegando y realizar el movimiento por la interfaz
  const handleSensorData = (data) => {
    let newSelectedOption;
    setSensorData(data); //actualizo el objeto data
    if (data.value >= 50 && data.value <= 70) {
      newSelectedOption = (selectedOption + 1) % actions.length;
    } else {
      newSelectedOption = selectedOption;
    }
    setSelectedOption(newSelectedOption);
  };

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

  useEffect(() => {
    console.log("Selected option updated to: ", selectedOption);
    lastSelectedOption.current = selectedOption;
  }, [selectedOption]);

  //se utilioza memorizacion para no volver a renderizar innecesariamente
  const actionsElements = useMemo(
    () =>
      actions.map((action, index) =>
        React.cloneElement(action.element, {
          children: (
            <>
              <img
                src={action.images}
                alt={action.name}
                className="h-48 w-auto mx-auto"
                style={{ opacity: index === selectedOption ? 1 : 0.5 }}
              />
              <Link to={`/action/${action.id}`}>
                <ButtonsActions
                  actionName={action.name}
                  actionVoz={action.voz}
                  isSelected={index === selectedOption}
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
      <div className="">
        <div>
          <p>Valor del Sensor Muscular: {sensorData.value}</p>
        </div>
        <div className="absolute top-3 right-4 text-3xl bg-blue-500 rounded hover:bg-blue-700">
          <Help />
        </div>
        <div className="">
          <TitlePage nameTitle={"Menu"} />
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-3 gap-3 mx-46 my-2">
          {actionsElements}
        </div>
      </div>
    </div>
  );
}

export default ListActions;
