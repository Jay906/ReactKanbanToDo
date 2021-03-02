import React, { useState } from "react";
import uuid from "react-uuid";

function Form({ onSubmit }) {
  const [value, setValue] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (value) {
          const newTask = {
            id: uuid(),
            content: value,
          };
          onSubmit(newTask);
          setValue("");
        }
      }}
    >
      <div className="container">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add task..."
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
