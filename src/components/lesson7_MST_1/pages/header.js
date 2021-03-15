import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/routes.config";
import { rootStore } from "../stores/rootStore";
import { Addable, List } from "../components/Addgroup";

export const Header = () => {
  return (
    <div className="r2d13">
      {console.log("rootStore")}
      {console.log(rootStore)}
      <div className="r2d11">
        <ul>
          <li>
            <Link to={routes.HOME}>Home</Link>
          </li>
          <li>
            <Link to={routes.ABOUT}>About</Link>
          </li>
          <li>
            <Link to={routes.LISTS}>Lists</Link>
          </li>
          <li>
            <Link to={routes.CUSTOMLISTS}>CustomLists</Link>
          </li>
          <List list={rootStore.groups.list} />

          <li>
            <Addable props={rootStore} />
          </li>
        </ul>
      </div>
    </div>
  );
};
