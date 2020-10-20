import React, { useState, useEffect } from "react";
import { ToDoListPropTypes } from "/src/components/lesson3-4/ToDoListPropTypes";

export const Checkbox = ({ todo, onSwitch }) => {
  const [checked, setChecked] = useState(false);
  const onChange = (event) => {
    onSwitch(event.target.value);
    setChecked(!checked);
    //  console.log(checked);
  };

  useEffect(() => {
    setChecked(todo.completed);
  }, [todo.completed]);

  return (
    <input
      type="checkbox"
      value={todo._id}
      onChange={onChange}
      {...{ checked }}
    />
  );
};

Checkbox.propTypes = ToDoListPropTypes;
