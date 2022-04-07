import React from "react";
import { Button } from "./TableButton.styled";

const TableButton = ({ children }) => {
  return <Button type="button">{children}</Button>;
};

export default TableButton;
