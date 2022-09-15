import React, { Fragment } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import eye from "../images/eye.svg";
import Context from "./Context";

const HomeSecTwo = () => {
  return (
    <Context.Consumer>
      {({ bestSellingContext }) => (
        <Container>
          <div id="bestselling" className="mb-3">
            <h2>Best Selling</h2>
            Lorem Ibsum is simply dummy text of the printing and typesetting
          </div>
          <div className="bestselling mb-5">
            {bestSellingContext.map((e) => (
              <Card key={e.id} style={{ width: "15rem" }}>
                <Card.Img variant="top" src={e.productImg} />
                <Card.Body>
                  <Card.Title className="product-title">
                    {e.productTitle}
                  </Card.Title>
                  <Card.Text>
                    ${e.price}
                    <Button variant="transparent">
                      <img src={eye} />
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Container>
      )}
    </Context.Consumer>
  );
};

export default HomeSecTwo;
