import "../CSS/Footer.css";
import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import FacebookIcon from "../images/facebook.svg";
import TwitterIcon from "../images/twitter.svg";
import InstagramIcon from "../images/instagram.svg";

const Footer = () => {
  return (
    <div id="footer">
      <Container>
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
            <h4>Company</h4>
            <Link to="/">About Us</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Store Locations</Link>
            <Link to="/">Careers</Link>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
            <h4>Help</h4>
            <Link to="/">Order Tracking</Link>
            <Link to="/">FAQ's</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms & Conditions</Link>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
            <h4>Follow Us</h4>
            <p>And Get Free Shipping On All Your Orders!</p>
            <div id="social-media">
              <Link to="/" className="me-4">
                <img src={FacebookIcon} />
              </Link>
              <Link to="/" className="me-4">
                <img src={TwitterIcon} />
              </Link>
              <Link to="/">
                <img src={InstagramIcon} />
              </Link>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
            <h4>Sign up now and get 10% off</h4>
            <p>
              Be the first to know about our new arrivals and exclusive offers.
            </p>
            <form action="">
              <input id="email" type="email" placeholder="Your email address" />
              <input id="submit" type="submit" />
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
