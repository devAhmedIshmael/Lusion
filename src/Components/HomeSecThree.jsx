import React, { Fragment } from "react";
import Container from "react-bootstrap/esm/Container";
import Img from "../images/home-sec-3.png";
import Button from "react-bootstrap/esm/Button";

const HomeSecThree = () => {
  return (
    <Container>
      <div className="sec-3 mb-5">
        <img src={Img} />
        <span className="banner">
          <p className="large">MERRY</p>
          <p className="bold">Christmas </p>
          <div className="off">
            <span>
              <p className="bold">40</p>
            </span>
            <span>
              <p className="medium">%</p>
              <p className="medium">Off</p>
            </span>
          </div>
          <Button className="shopnow medium" variant="transparent">
            Shop Now
          </Button>
        </span>
        <span className="banner-two">
          <p className="large">Your Next</p>
          <p className="bold">Purchase </p>
          <div className="off">
            <span>
              <p className="bold">10</p>
            </span>
            <span>
              <p className="medium">%</p>
              <p className="medium">Off</p>
            </span>
          </div>
          <Button className="shopnow medium" variant="transparent">
            Shop Now
          </Button>
        </span>
      </div>
    </Container>
  );
};

export default HomeSecThree;
