import React from "react";
import { rootStore } from "../stores/rootStore";
import { List } from "./Addgroup";

export const Input = () => {
  return (
    <div className="r2d15">
      <List list={rootStore.groups.list} />
    </div>
  );
};
