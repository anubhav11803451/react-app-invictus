import React, { useState } from "react";
import "./Form.css";

function Form({ fetchData, sendValue }) {
  const [value, setValue] = useState();

  function submitForm() {
    if (!value) return;
    fetchData();
    sendValue(value);
    // setValue("");
  }

  return (
    <div>
      <input
        type="number"
        className="formfield"
        value={value}
        placeholder="Enter the Number"
        onChange={(e) => {
          setValue(e.target.value);
          // sendValue(e.target.value);
        }}
      />
      <button type="submit" className="button" onClick={submitForm}>
        Submit
      </button>
    </div>
  );
}

export default Form;
