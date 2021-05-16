import React from "react";
import "./Container.css";
import Form from "../Form/Form";

function Container({ fetchData, sendValue }) {
  return (
    <div className="container-small">
      <Form fetchData={fetchData} sendValue={sendValue} />
    </div>
  );
}

export default Container;
