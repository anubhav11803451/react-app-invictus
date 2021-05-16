import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [value, setValue] = useState("");

  const submitForm = (event) => {
    // event.preventDefault();
    alert(`${value}`);
  };

  return (
    <form className="form" onSubmit={submitForm}>
      <input
        type="number"
        className="formfield"
        value={value}
        placeholder="Enter the Number"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="button" onSubmit={submitForm}>
        Submit
      </button>
    </form>
  );
}

export default Form;
