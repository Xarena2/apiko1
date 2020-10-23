import React from "react";
import T from "prop-types";
import "../../styles.css";

export const Text = ({ size, children, onClick, ...props }) => (
  <div className="text" {...{ onClick }} style={{ fontSize: size, ...props }}>
    {children}
  </div>
);

Text.propTypes = {
  size: T.string,
  onClick: T.func,
  children: T.oneOfType([T.string, T.node, T.arrayOf(T.node)]).isRequired
};

Text.defaultProp = {
  size: "15px",
  onClick: () => null
};
