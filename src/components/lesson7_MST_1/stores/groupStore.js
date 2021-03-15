import React from "react";
import { types as t } from "mobx-state-tree";
import { v4 as uuid } from "uuid";
// import { prettyPrint } from "./utils";
import { TodoModel } from "./todoStore";

const state = {
  list: [
    {
      id: uuid(),
      title: "potato",
      isCompleted: t.optional(t.boolean, false)
    }
  ]
};

const GroupModel = t
  .model("GroupModel", {
    id: t.string,
    title: t.string,
    todos: t.array(t.reference(TodoModel))
  })
  .actions((store) => ({
    addTodo(todo) {
      store.todos.push(todo);
    }
  }));

const GroupListModel = t
  .model("GroupListModel", {
    list: t.array(GroupModel)
  })
  .actions((store) => ({
    add(title) {
      const group = {
        id: uuid(),
        title
      };
      store.list.unshift(group);
    }
  }));

const run = () => {
  const group = GroupModel.create({
    id: uuid(),
    title: "egg"
  });
  const groupList = GroupListModel.create(group);
  groupList.add(state);

  return (
    <div>
      {groupList.list.map((list) => (
        <div>
          <h3>
            {list.title} - #{list.id}
          </h3>
        </div>
      ))}
    </div>
  );
};
export { run, GroupListModel };
