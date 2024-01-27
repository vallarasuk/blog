import React, { useState } from "react";
import {
  Navbar as RSNavbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <RSNavbar color="dark" dark expand="md">
      <Container fluid className="justify-content-between d-flex">
        <NavbarBrand href="https://vallarasuk.com" target="_blank">
          Vallarasu K
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
      </Container>
      <Collapse isOpen={isOpen} navbar>
        <Container fluid>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about">
                About
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Collapse>
    </RSNavbar>
  );
};

export default Navbar;
