import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Logo from "../images/Logo.png";
import Cart from "../images/Cart.svg";
import { NavLink } from "react-router-dom";
import Context from "./Context";

const NavBar = () => {
  return (
    <Context.Consumer>
      {({ handleShowContext, countContext }) => (
        <Navbar bg="light" expand="lg" dir="rtl">
          <Container>
            <Navbar.Brand href="#home" id="cart-parent">
              <Badge bg="dark" id="cart-counter">
                {countContext}
              </Badge>
              <img
                onClick={() => {
                  handleShowContext();
                }}
                src={Cart}
              />
            </Navbar.Brand>
            <Navbar.Brand href="#home">
              <img src={Logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav dir="ltr" className="text-center">
                <NavLink to="/" className="nav-link">
                  <h5 className="nav-link">Home</h5>
                </NavLink>
                <NavLink to="/shop" className="nav-link">
                  <h5 className="nav-link">Shop</h5>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </Context.Consumer>
  );
};

export default NavBar;
