import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import AddToCart from "../images/add.svg";
import Context from "./Context";
import Alert from "react-bootstrap/esm/Alert";
import "../CSS/Shop.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const ShopBody = () => {
  return (
    <Context.Consumer>
      {({ shopProductsContext, addToCartContext, addedProductsContext }) => (
        <Container>
          <div className="body row mb-5">
            {shopProductsContext.map((e) => (
              <div key={e.id} className="col-lg-4 cards mb-5">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={e.productImg} />
                  <Card.Body>
                    <Card.Title>{e.productTitle}</Card.Title>

                    <Card.Text>
                      <span className="mt-2"> ${e.price}</span>
                      <Alert variant="danger" className="duplicated-product">
                        ok
                      </Alert>
                      <Button
                        onClick={() => {
                          addToCartContext(
                            e.id,
                            e.productImg,
                            e.productTitle,
                            e.price,
                            e.quantity
                          );
                        }}
                        variant="transparent"
                      >
                        <img className="add-to-cart" src={AddToCart} />
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      )}
    </Context.Consumer>
  );
};

export default ShopBody;
