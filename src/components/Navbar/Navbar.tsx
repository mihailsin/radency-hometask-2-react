import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "./Navbar.styled";
import Wrapper from "../Wrapper";

// NavLink styles

const active = {
  color: "#fff",
  textDecoration: "none",
  marginRight: "20px",
  fontStyle: "italic",
};

const link = {
  textDecoration: "none",
  color: "#fff",
  marginRight: "20px",
};

const Navbar: React.FC = () => {
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
