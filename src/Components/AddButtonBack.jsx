import React from "react";
import { Link } from "react-router-dom";

function AddButtonBack() {
  return (
    <div>
      <Link to={'/menu'}>
        <button className="bg-teal-500 hover:opacity-25 rounded w-24 h-12 text-xl my-0 font-semibold text-white display: block mr-auto ml-auto">
          Atras
        </button>
      </Link>
    </div>
  );
}

export default AddButtonBack;
