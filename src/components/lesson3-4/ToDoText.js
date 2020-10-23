import React, { useState } from "react";

import { Text } from "/src/components/lesson3-4/Text";
import { ToDoInput } from "/src/components/lesson3-4/ToDoInput";

export const ToDoText = ({ todo, onEdit, additionalStyles }) => {
  const [isEditable, setIsEditable] = useState(false);

  const onClick = () => (todo.completed ? null : setIsEditable(true));

  const onSaveChanges = (text) => {
    setIsEditable(false);
    onEdit({ ...todo, text });
  };

  return isEditable ? (
    <ToDoInput onAdd={onSaveChanges} initialValue={todo.text} />
  ) : (
    <Text size="10px" {...additionalStyles} onClick={onClick}>
      {todo.text}
    </Text>
  );
};
