import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [value, setValue] = useState("");

  const submitForm = (event) => {
    // event.preventDefault();
    alert(`${value}`);
  };

  return (
    <form class="form" onSubmit={submitForm}>
      <input type="int" class="formfield" placeholder="Enter the Number" />
      <button type="submit" className="button" onSubmit={submitForm}>
        Submit
      </button>
    </form>
  );
}

export default Form;
