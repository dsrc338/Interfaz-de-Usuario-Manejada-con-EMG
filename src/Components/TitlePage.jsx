import React from "react";

function TitlePage({ nameTitle }) {
  return (
    <div className="text-4xl text-center font-bold tracking-wide font-monospace underline text-teal-500">
      <h1>
        {nameTitle}
      </h1>
    </div>
  );
}

export default TitlePage;
