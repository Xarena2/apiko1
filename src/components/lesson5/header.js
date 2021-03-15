import React from "react";
import { Link } from "react-router-dom";
import { routes } from "./routes";
export const Header = () => (
  <ul>
    <li>
      <Link to={routes.HOME}>Home Page</Link>
    </li>
    <li>
      <Link to={routes.ABOUT}>About Page</Link>
    </li>
    <li>
      <Link to={routes.FAQ}>FAQ Page</Link>
    </li>
  </ul>
);
