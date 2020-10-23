import { v4 as uuidv4 } from "uuid";
import { todosActions } from "../actions/todosActions";

export const initialState = () => {
  const todosFromStorage = localStorage.getItem("todos");
  const todoParse = JSON.parse(todosFromStorage);
  return todoParse || [];
};

export const todosReducer = (todos, action) => {
  const { type, text, _id, newTodo } = action;
  switch (type) {
    case todosActions.ADD:
      return [
        ...todos,
        {
          _id: uuidv4(),
          text,
          completed: false
        }
      ];
    case todosActions.COMPLETE:
      return todos.map((todo) =>
        _id === todo._id ? { ...todo, completed: !todo.completed } : todo
      );
    case todosActions.REMOVE:
      return todos.filter((todo) => _id !== todo._id);
    case todosActions.EDIT:
      return todos.map((todo) => (todo._id === newTodo._id ? newTodo : todo));
    default:
      break;
  }
};
