import { useReducer, useEffect } from "react";

import { todosActions } from "../actions/todosActions";
import { todosReducer, initialState } from "../reducers/todosReducer";
export const useTodosHook = () => {
  const [todos, dispatch] = useReducer(todosReducer, initialState());

  const onAdd = (text) =>
    dispatch({
      text,
      type: todosActions.ADD
    });

  const onSwitch = (_id) =>
    dispatch({
      _id,
      type: todosActions.COMPLETE
    });

  const onRemove = (_id) =>
    dispatch({
      _id,
      type: todosActions.REMOVE
    });
  
  const onEdit = newTodo => dispatch({
    newTodo,
    type: todosActions.EDIT
  })

  useEffect(() => {
    const todosStringified = JSON.stringify(todos);
    console.log(todosStringified);
    localStorage.setItem("todos", todosStringified);
  }, [todos]);
  return {
    todos,
    onAdd,
    onSwitch,
    onRemove,
    onEdit
  };
};
