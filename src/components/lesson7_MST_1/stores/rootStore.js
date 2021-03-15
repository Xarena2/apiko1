import React from "react";
import "../../../../src/styles.css";
import { types as t } from "mobx-state-tree";
// import { v4 as uuid } from "uuid";
import { prettyPrint } from "./utils";
import { TodoListModel } from "./todoStore";
import { GroupListModel } from "./groupStore";
import { autorun } from "mobx";
import { observer } from "mobx-react";

const RootModel = t.model("RootModel", {
  todos: t.optional(TodoListModel, {}),
  groups: t.optional(GroupListModel, {})
});

const Train = observer(
  (props) => (
    console.log("render item"),
    (<h4 key={props.list.id}>{props.list.title}</h4>)
  )
);
const Train1 = observer(
  (props) => (
    console.log("completed " + props.list.Completed),
    props.list.Completed === "false" ? (
      <h4 key={props.list.id}>''</h4>
    ) : (
      <h4>{props.list.title}</h4>
    )
  )
);

export const rootStore = RootModel.create({});
function work() {
  const rootStore = RootModel.create({});
  const todo = rootStore.todos.list;
  autorun(() => prettyPrint(rootStore));
  rootStore.todos.add("potato");
  rootStore.groups.add("shopping list");
  rootStore.todos.add("oil");
  rootStore.groups.add("Movies list");
  rootStore.todos.add("banana");
  rootStore.groups.add("Show list");
  rootStore.todos.add("apple");
  rootStore.groups.add("Music list");
  const group = rootStore.groups.list[1];
  // group.addTodo(clone(todo));
  let t = todo[3];
  t.toggleCompleted();
  t.toggleFavorite();
  group.addTodo(t);

  // group.addTodo(todo);

  autorun(() => prettyPrint(rootStore));
  autorun(() => prettyPrint(group));
  autorun(() => prettyPrint(todo[1]));
  autorun(() => prettyPrint(group.todos[0]));
  return (
    <div className="r2d1">
      <div className="r2d2">
        <div className="r2d21">
          <h2>Groups</h2>
          <div>
            {rootStore.groups.list.map((item) => (
              <h4 key={item.id}>{item.title}</h4>
            ))}
          </div>
        </div>
        <div className="r2d22">
          <h2>Todos</h2>
          <div>
            {rootStore.todos.list.map((item) => (
              <Train list={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="r2d3">
        <div className="r2d23">
          <h2>Favorite Todos</h2>
          <div>
            {rootStore.todos.list.map((item) => (
              <Train1 list={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default work;
