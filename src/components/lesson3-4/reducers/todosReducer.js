import { v4 as uuidv4 } from "uuid";
import { todosActions } from "../actions/todosActions";

export const initialState = () => {
  const todosFromStorage = localStorage.getItem("todos");
  const todoParse = JSON.parse(todosFromStorage);
  console.log("initialState: ", todosFromStorage);
  console.log("initialState: ", todoParse);
  return [];
};

export const todosReducer = (todos, action) => {
  switch (action.type) {
    case todosActions.ADD:
      return [
        ...todos,
        {
          _id: uuidv4(),
          text: action.text,
          completed: false
        }
      ];
    case todosActions.COMPLETE:
      todos.map((todo) =>
        action._id === todo._id ? { ...todo, completed: !todo.completed } : todo
      );
      break;
    case todosActions.REMOVE:
      return todos.filter((todo) => action._id !== todo._id);
    default:
      break;
  }
};
