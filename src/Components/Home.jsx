import React, { Fragment } from "react";
import WhiteHeader from "../images/header_white.png";
import BlackHeader from "../images/header_black.png";
import Carousel from "react-bootstrap/Carousel";
import HomeSecOne from "./HomeSecOne";
import HomeSecTwo from "./HomeSecTwo";
import HomeSecThree from "./HomeSecThree";
import HomeSecFour from "./HomeSecFour";

const Home = () => {
  return (
    <Fragment>
      <Carousel id="carousel" className="mb-5">
        <Carousel.Item>
          <img className="d-block w-100" src={WhiteHeader} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={BlackHeader} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
      <HomeSecOne />
      <HomeSecTwo />
      <HomeSecThree />
      <HomeSecFour />
    </Fragment>
  );
};

export default Home;
