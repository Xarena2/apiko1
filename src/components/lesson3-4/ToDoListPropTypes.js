import T from "prop-types";
export const toDoListPropTypes = {
  todo: T.shape({
    _id: T.string.isRequired,
    text: T.string.isRequired,
    completed: T.bool.isRequired
  }),
  onSwitch: T.func.isRequired
};
