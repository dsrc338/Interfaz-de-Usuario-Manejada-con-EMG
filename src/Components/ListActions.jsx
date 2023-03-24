import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useContext,
} from "react";
import { actions as dataact } from "../data/actions";
import ButtonsActions from "./AddButtons";
import { Link } from "react-router-dom";
import TitlePage from "./TitlePage";
import Help from "./Help";
import "./styles.css";
import { SensorContext } from "../App.jsx";


function ListActions(props) {

  //const [actions, setActions] = useState([]);
  const { sensorData } = useContext(SensorContext);
  const [selectedOption, setSelectedOption] = useState(0);
  const lastSelectedOption = useRef(0);


    //obtengo las opciones disponibles del arreglo de objeto "actions.js".
    const actions = dataact.map((action, index) => {
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
              <ButtonsActions actionName={action.name} actionVoz={action.voz}/>
            </Link>
          </div>
        ),
      };
    });



  //funcion para ir actualizando los datos que van llegando y realizar el movimiento por la interfaz
  useEffect(() => {
    let newSelectedOption;
    if (sensorData.value >= 50 && sensorData.value <= 70) {
      newSelectedOption = (selectedOption + 1) % actions.length;
    }

    else {
      newSelectedOption = selectedOption;
    }
    if (newSelectedOption !== selectedOption) {
      setSelectedOption(newSelectedOption);
    }
  }, [sensorData.value]);

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
                  optionSelect = {selectedOption}
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
