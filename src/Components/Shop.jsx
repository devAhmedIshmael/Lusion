import React, { Fragment } from "react";
import Container from "react-bootstrap/esm/Container";
import ShopHeader from "../images/shop-header.jpg";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import ShopBody from "./ShopBody";
import "../CSS/Shop.css";

const Shop = () => {
  return (
    <Fragment>
      <Container>
        <div className="shop mb-5">
          <img src={ShopHeader} />
          <span>
            <p>Shop</p>
            <h5>
              <Link to="/">Home</Link> / Shop
            </h5>
          </span>
        </div>
      </Container>
      <ShopBody />
    </Fragment>
  );
};

export default Shop;
