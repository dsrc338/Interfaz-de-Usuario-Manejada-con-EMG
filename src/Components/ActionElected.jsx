import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { actions } from "../data/actions";
import TitlePage from "./TitlePage";
import AddButtons from "./AddButtons";
import Help from "./Help";
import { SensorContext } from "../App.jsx";

function ActionElected() {
  let { idaction } = useParams();
  const oneAction = actions.find((e) => e.id === Number(idaction));
  const [selectedOption, setSelectedOption] = useState(0);
  const { sensorData } = useContext(SensorContext);
  const { peakData } = useContext(SensorContext);
  //console.log(actions[6]);
  //console.log(oneAction.id)
  //console.log(actions[idaction].tipo);
  //console.log(actions[idaction].connector);
  //console.log(actions[idaction].tipo.length);
  /*
  if (Object.keys(oneAction.tipo).length === 3) {
    console.log('tiene');
    console.log(Object.keys(oneAction.tipo).length);
  } else {
    console.log('no tiene');
  }
*/
console.log(peakData);
  let newOption = [];

  if (actions[idaction].type) {
    const options = actions[idaction].type;
    for (const option of Object.values(options)) {
      //console.log(option);
      newOption.push(option);
    }
    newOption.push(actions[6].name);
    //console.log('actions',newOption);
    //console.log(newOption.length);
    //console.log(newOption)
  } else {
    newOption.push(actions[6].name);
    //console.log(newOption)
    //console.log("No se encontró el objeto correspondiente a este ID de acción.");
  }
  useEffect(() => {
    let newSelectedOption;
    if (newOption && sensorData.value >= peakData - 50 && sensorData.value <= peakData - 20) {
      newSelectedOption = (selectedOption + 1) % Object.keys(newOption).length;
      setSelectedOption(newSelectedOption);
    }

    console.log("selectedOption:", selectedOption);
  }, [sensorData.value]);

  return (
    <div className="">
      <div className="">
        <div className="absolute top-2 right-4 text-3xl bg-blue-500 rounded hover:bg-blue-700">
          <Help />
        </div>
      </div>
      <div className="my-1">
        <div className="grid grid-cols-2 gap-4 mx-40 my-1 ">
          <div className=" bg-gray-200 rounded-md p-2 mx-auto shadow-2xl">
            <img
              src={oneAction.images}
              alt={oneAction.name}
              className="h-40 w-auto mx-auto my-0"
            />
            <h3
              className="text-center text-2xl font-extrabold w-auto h-auto my-0 uppercase text-teal-500 
            rounded ring-teal-500 m-5"
            >
              {oneAction.name}
            </h3>
          </div>
          <div className=" bg-gray-200 rounded-md p-1 mx-auto shadow-2xl shadow-gray-500/50">
            <img
              src={actions[6].images}
              alt="atras"
              className="h-40 w-auto mx-auto my-0"
            />
            <Link to={"/menu"}>
              <AddButtons
                actionName={actions[6].name}
                isSelected={newOption.length - 1 === selectedOption}
              />
            </Link>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-3 gap-3 mx-40 my-3">
            {newOption.length > 0
              ? newOption.slice(0, length - 1).map((option, index) => {
                  if (newOption.length === 2 && index > 1) {
                    return null;
                  }
                  return (
                    <div
                      key={option.id}
                      className="inline-block px-1 py-1 bg-gray-200 rounded-md p-0 mx-auto shadow-md shadow-gray-500/50"
                    >
                      <img
                        src={option.images}
                        className="h-40 w-auto mx-auto"
                        style={{ opacity: index === selectedOption ? 1 : 0.5 }}
                      />
                      <AddButtons
                        actionName={option.name}
                        actionVoz={option.voz}
                        actionId={option.id}
                        isSelected={option.id === selectedOption}
                        optionSelect={selectedOption}
                      />
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActionElected;
