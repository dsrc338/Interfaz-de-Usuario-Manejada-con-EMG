import React from "react";
import { useParams } from "react-router-dom";
import { actions } from "../data/actions";
import AddButtonBack from "./AddButtonBack";
import ImgBack from "../images/back.png";
import TitlePage from "./TitlePage";
import AddButtons from "./AddButtons";
import Help from "./Help";

function ActionElected() {
  let { idaction } = useParams();
  const oneAction = actions.find((e) => e.id === Number(idaction));
  //console.log(actions[idaction].tipo);
  //console.log(actions[idaction].connector);
  //console.log(actions[idaction].voz);

  return (
    <div>
      <div className="">
        <div className="absolute top-3 right-4 text-3xl bg-blue-500 rounded hover:bg-blue-700">
          <Help />
        </div>
        <div className="">
          <TitlePage nameTitle={"Menu"} />
        </div>
      </div>
      <div className="my-2">
        <div className="grid grid-cols-2 gap-3 mx-46 my-1 ">
          <div className=" bg-gray-200 rounded-md p-4 mx-auto shadow-2xl">
            <img
              src={oneAction.images}
              alt={oneAction.name}
              className="h-48 w-auto mx-auto my-1"
            />
            <h3
              className="text-center text-2xl font-extrabold w-auto h-auto my-3 uppercase text-teal-500 
            rounded ring-teal-500 m-5"
            >
              {oneAction.name}
            </h3>
          </div>
          <div className=" bg-gray-200 rounded-md p-4 mx-auto shadow-2xl shadow-gray-500/50">
            <img
              src={ImgBack}
              alt="back"
              className="h-48 w-auto mx-auto my-1"
            />
            <AddButtonBack />
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-3 gap-3 mx-46 my-4">
            {actions[idaction].tipo
              ? Object.entries(actions[idaction].tipo).map(([key, value]) => {
                  return (
                    <div
                      key={key}
                      className="inline-block px-2 py-2 bg-gray-200 rounded-md p-4 mx-auto shadow-md shadow-gray-500/50"
                    >
                      <img
                        src={value.images}
                        className="h-48 w-auto mx-auto "
                      />
                      <AddButtons actionName={value.name} actionVoz ={value.voz}/>
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
