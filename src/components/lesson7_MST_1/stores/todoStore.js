import React from "react";
import { types as t } from "mobx-state-tree";
import { v4 as uuid } from "uuid";
import { prettyPrint } from "./utils";

const state = {
  list: [
    {
      id: uuid(),
      title: "potato",
      isCompleted: t.optional(t.boolean, false)
    }
  ]
};

const TodoModel = t
  .model("TodoModel", {
    id: t.identifier,
    title: t.string,
    Completed: t.optional(t.boolean, false),
    Favorite: t.optional(t.boolean, false)
  })
  .actions((store) => ({
    toggleCompleted() {
      store.Completed = !store.Completed;
    },
    toggleFavorite() {
      store.Favorite = !store.Favorite;
    }
  }));

const TodoListModel = t
  .model("TodoListModel", {
    list: t.array(TodoModel)
  })
  .views((store) => ({
    get FavoriteList() {
      return store.list.filter((item) => item.Favorite);
    }
  }))
  .actions((store) => ({
    add(title) {
      const todo = TodoModel.create({
        id: uuid().toString(),
        title
      });

      store.list.unshift(todo);
    }
  }));

const run = () => {
  const todo = TodoModel.create({
    id: uuid(),
    title: "egg"
  });
  const todoList = TodoListModel.create(state);
  // prettyPrint(state);
  prettyPrint(todo);
  todo.toggleCompleted();
  prettyPrint(todo);
  prettyPrint(todoList);
  todoList.add("apple");
  todoList.add("pineapple");
  todoList.add("oil");
  prettyPrint(todoList);
  prettyPrint(todoList);
  todoList.list[0].toggleCompleted();
  todoList.list[0].toggleFavorite();
  todoList.list[1].toggleFavorite();
  todoList.list[2].toggleFavorite();
  prettyPrint(todoList);
  prettyPrint(todoList.FavoriteList);
  return (
    <div>
      {todoList.list.map((list) => (
        <div>
          <h3>
            {list.title} - #{list.id}
          </h3>
        </div>
      ))}
    </div>
  );
};
export { run, TodoModel, TodoListModel };
