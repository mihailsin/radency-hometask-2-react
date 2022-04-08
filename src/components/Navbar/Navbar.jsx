import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "./Navbar.styled";
import Wrapper from "../Wrapper";

// NavLink styles

const active = {
  color: "#d4c323",
  marginRight: "20px",
};

const link = {
  textDecoration: "none",
  color: "#3849ad",
  marginRight: "20px",
};

const Navbar = () => {
  return (
    <Wrapper>
      <Nav>
        <NavLink
          style={({ isActive }) => (isActive ? active : link)}
          to="/tasks"
        >
          Tasks
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? active : link)}
          to="/archived-tasks"
        >
          Archived Tasks
        </NavLink>
      </Nav>
    </Wrapper>
  );
};

export default Navbar;
