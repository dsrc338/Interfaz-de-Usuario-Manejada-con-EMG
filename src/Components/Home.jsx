import { useState, useEffect } from "react";
import { actions as dataact } from "../data/actions";
import React from "react";
import NavButtons from "./NavButtons";
import { Link } from "react-router-dom";
import TitlePage from "./TitlePage";
import { FaQuestion } from "react-icons/fa";
import ImgBack from "../images/back.png";

function Home() {
  const [actions, setActions] = useState([]);

  useEffect(() => {
    setActions(dataact);
  });

  return (
    <div className="text-center">
      <div className="py-4">
        <TitlePage nameTitle={"MuscleMover"} />
      </div>
      <div className="m-1">
        <p className="leading-relaxed">
          ¡Bienvenido a MuscleMover!, te ayudare a comunicarte con tu asistente
          médico usando solo tus pensamientos, Te colocaran unos sensores que no
          te harán daño, estos sensores te ayudarán a controlar MuscleMover.
          Tengo 6 opciones para que elijas y le digas a tu asistente médico lo
          que necesitas, Tambien tengo una opción que te guiará por el menu "
          <FaQuestion
            icon="fa-regular fa-square-question"
            className="bg-blue-500 rounded text-white inline-block"
          />
          ". Sí eliges una opción, te llevare a una página donde verás lo que
          elegiste y un botón para volver al menú principal "
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
        <h2 className="text-2xl text-center font-bold tracking-wide font-monospace underline text-teal-500 py-2">
          Opciones
        </h2>
      </div>
      <div className="py-2">
        <ul
          role="list"
          className="grid grid-cols-3 mx-auto items-center px-5  marker:text-teal-400 list-disc pl-5 space-y-2 text-black list-inside text-justify p-2 divide-y divide-slate-200"
        >
          {actions.map((action, index) => (
            <li className="flex py-2 px-4 first:pt-0 last:pb-0" key={index}>
              <img
                className="h-12 w-12 rounded-full bg-gray-200"
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
      <div className="py-4">
        <Link to={"/menu"}>
          <NavButtons nameNav={"Menu"} />
        </Link>
      </div>
    </div>
  );
}

export default Home;
