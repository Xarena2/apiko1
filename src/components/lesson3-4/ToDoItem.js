import React from "react";
import T from "prop-types";

import { ToDoListPropTypes } from "./ToDoListPropTypes";
import { withCheckedStyles } from "./withCheckedstyles";
import { Icon } from "/src/components/lesson3-4/Icon";
import { Text } from "/src/components/lesson3-4/Text";
import { Checkbox } from "/src/components/lesson3-4/Checkbox";

import "../../styles.css";

export const ToDoItem = withCheckedStyles(
  ({ todo, onSwitch, onRemove, additionalStyles }) => {
    return (
      !!todo && (
        <div className="toDoItem">
          <Checkbox {...{ todo, onSwitch }} />
          {console.log(todo.completed)}
          <Text size="10px" {...additionalStyles}>
            {todo.text}
          </Text>
          <button onClick={() => onRemove(todo._id)}>
            <Icon name="remove" size="15px" />
          </button>
        </div>
      )
    );
  }
);
ToDoItem.propTypes = {
  ...ToDoListPropTypes,
  onRemove: T.func.isRequired,
  additionalStyles: T.shape({
    color: T.string,
    textDecoration: T.string
  })
};
