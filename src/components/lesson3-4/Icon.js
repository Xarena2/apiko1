import React from "react";
import T from "prop-types";
import { iconsConfig } from "/src/components/lesson3-4/iconsConfig";
export const Icon = ({ name, ...props }) => {
  const IconC = iconsConfig[name];
  return <IconC {...props} />;
};
Icon.propTypes = {
  name: T.string.isRequired,
  size: T.string,
  color: T.string
};

Icon.defaultProp = {
  size: "14px",
  color: "#000"
};
