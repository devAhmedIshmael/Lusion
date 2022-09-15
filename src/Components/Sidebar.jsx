import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Context from "./Context";
import "../CSS/Sidebar.css";
import { FaTrashAlt } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";

const Sidebar = () => {
  return (
    <Context.Consumer>
      {({
        showContext,
        handleCloseContext,
        addedProductsContext,
        incrementContext,
        decrementContext,
        removeContext,
        totalItemsContext,
        totalPriceContext,
      }) => (
        <Offcanvas
          show={showContext}
          onHide={handleCloseContext}
          placement={`end`}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Your Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>
              {addedProductsContext.map((e) => (
                <div key={e.id} id="product-row" className="mb-1">
                  <img
                    src={e.img}
                    style={{
                      display: `inline`,
                      width: `50px`,
                      height: `50px`,
                    }}
                  />
                  <span>{e.title}</span>
                  <span>${e.price}</span>
                  <FaPlusSquare
                    id="plus"
                    onClick={() => {
                      incrementContext(e.id);
                    }}
                  />
                  <span>{e.quantity}</span>
                  <FaMinusSquare
                    id="minus"
                    onClick={() => {
                      decrementContext(e.id);
                    }}
                  />
                  <FaTrashAlt
                    id="remove"
                    onClick={() => {
                      removeContext(e.id);
                    }}
                  />
                </div>
              ))}
              <p>
                Sub Total ({totalItemsContext} item) : $ {totalPriceContext}{" "}
              </p>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </Context.Consumer>
  );
};

export default Sidebar;
