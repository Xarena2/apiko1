import React, { Fragment } from "react";

import { Text } from "/src/components/lesson3-4/Text";
import { ToDoInput } from "/src/components/lesson3-4/ToDoInput";
import { ToDoItem } from "/src/components/lesson3-4/ToDoItem";
import { useTodosHook } from "./hooks/useTodoHook";

const App = () => {
  const { todos, onAdd, onEdit, onSwitch, onRemove } = useTodosHook();

  return (
    <Fragment>
      <div className="application">
        <Text size="20px">Todos</Text>
        <ToDoInput onAdd={onAdd} />
        <div className="ToDoListItem">
          {todos.map((todo) => (
            <ToDoItem
              key={todo._id}
              {...{ todo }}
              onSwitch={onSwitch}
              onRemove={onRemove}
             onEdit={onEdit}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default App;
