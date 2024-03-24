import { redirect } from "next/navigation";
import React from "react";

const ID = ({ params }) => {
  if (params.ID > 3) {
    redirect("/login");
  }
  return <div>{params.ID}</div>;
};

export default ID;
