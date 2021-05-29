import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Heading() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="phantom-header" />
      <div className="header">
        <Navbar expanded={expanded} expand="lg" fixed="top" className="heading">
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Link
              className="navbar-item"
              onClick={() => setExpanded(false)}
              to="/"
            >
              <span className="navbar-text">Home</span>
            </Link>
            <Link
              className="navbar-item"
              onClick={() => setExpanded(false)}
              to="/about-us"
            >
              <span className="navbar-text">About Us</span>
            </Link>
            <Link
              className="navbar-item"
              onClick={() => setExpanded(false)}
              to="/contact"
            >
              <span className="navbar-text">Contact Us</span>
            </Link>
            <Link
              className="navbar-item"
              onClick={() => setExpanded(false)}
              to="/services"
            >
              <span className="navbar-text">Services</span>
            </Link>
            <Link
              className="navbar-item"
              onClick={() => setExpanded(false)}
              to="/gallery"
            >
              <span className="navbar-text">Our Work/Gallery</span>
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default Heading;
