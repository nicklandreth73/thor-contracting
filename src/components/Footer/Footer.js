import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <img
          className="logo"
          alt="Thor Contracting Logo"
          src="\images\John Thoreson Logo.png"
        />

        <div className="footer-icon-container">
          <h2 className="footer-title-name">Thor Contracting</h2>
          <h2 className="footer-title-ccb">CCB#219680</h2>
          <FontAwesomeIcon className="footer-icons" icon={faFacebookSquare} />
          <FontAwesomeIcon className="footer-icons" icon={faYoutube} />
          <FontAwesomeIcon className="footer-icons" icon={faEnvelope} />
          <FontAwesomeIcon className="footer-icons" icon={faPhone} />
        </div>
      </footer>
    </>
  );
}
