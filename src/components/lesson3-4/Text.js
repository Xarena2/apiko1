import React from "react";
import T from "prop-types";
import "../../styles.css";

export const Text = ({ size, children, ...props }) => (
  <div className="text" style={{ fontSize: size, ...props }}>
    {children}
  </div>
);

Text.propTypes = {
  size: T.string,
  children: T.oneOfType([T.string, T.node, T.arrayOf(T.node)]).isRequired
};

Text.defaultProp = {
  size: "15px"
};
