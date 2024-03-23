"use client";
import React from "react";

const project = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h1> project ==={params.all}</h1>
      <br />
      all routes
      <ul>
        {params.all.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default project;
