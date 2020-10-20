import React, { Fragment, useReducer, useEffect } from "react";

import { Text } from "/src/components/lesson3-4/Text";
import { ToDoInput } from "/src/components/lesson3-4/ToDoInput";
import { ToDoItem } from "/src/components/lesson3-4/ToDoItem";
import { todosActions } from "./actions/todosActions";
import { todosReducer, initialState } from "./reducers/todosReducer";

const App = () => {
  const [todos, dispatch] = useReducer(todosReducer, initialState());

  const onAdd = (text) =>
    dispatch({
      text,
      type: todosActions.ADD
    });

  const onSwitch = (todoId) =>
    dispatch({
      todoId,
      type: todosActions.COMPLETE
    });

  const onRemove = (todoId) =>
    dispatch({
      todoId,
      type: todosActions.REMOVE
    });

  useEffect(() => {
    const todosStringified = JSON.stringify(todos);
    console.log(todosStringified);
    localStorage.setItem("todos", todosStringified);
  }, [todos]);
  return (
    <Fragment>
      <div className="application">
        <Text size="20px">Todos</Text>
        <ToDoInput onAdd={onAdd} />
        {console.log(todos.todoId)}
        <div className="ToDoListItem">
          {todos ||
            todos.map((todo) => (
              <ToDoItem
                key={todo._id}
                {...{ todo }}
                onSwitch={onSwitch}
                onRemove={onRemove}
              />
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default App;
