import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const [iconExpanded, setExpanded] = useState({
    facebook: false,
    facebookAdress: "",
    youtube: false,
    youtubeAdress: "",
    email: false,
    emailAdress: "",
    phone: false,
    phoneAdress: "",
    any: false,
  });

  const icons = [
    {
      setTrue: () => {
        setExpanded((prev) => ({
          ...prev,
          facebook: true,
          any: true,
          facebookAddress: "John@facebook.com",
        }));
      },
      setFalse: () => {
        setExpanded((prev) => ({
          ...prev,
          facebook: false,
          any: false,
          facebookAddress: "",
        }));
      },
      service: "facebook",
      icon: faFacebookSquare,
    },
    {
      setTrue: () =>
        setExpanded((prev) => ({
          ...prev,
          youtube: true,
          any: true,
          youtubeAddress: "John@youtube.com",
        })),
      setFalse: () =>
        setExpanded((prev) => ({
          ...prev,
          youtube: false,
          any: false,
          youtubeAddress: "",
        })),
      service: "youtube",
      icon: faYoutube,
    },
    {
      setTrue: () =>
        setExpanded((prev) => ({
          ...prev,
          email: true,
          any: true,
          emailAddress: "John@ThorContracting.org",
        })),
      setFalse: () =>
        setExpanded((prev) => ({
          ...prev,
          email: false,
          any: false,
          emailAddress: "",
        })),
      service: "email",
      icon: faEnvelope,
    },
    {
      setTrue: () =>
        setExpanded((prev) => ({
          ...prev,
          phone: true,
          any: true,
          phoneAddress: "555-555-5555",
        })),
      setFalse: () =>
        setExpanded((prev) => ({
          ...prev,
          phone: false,
          any: false,
          phoneAddress: "",
        })),
      service: "phone",
      icon: faPhone,
      address: "",
    },
  ];

  return (
    <>
      <footer className="footer">
        <img
          className="logo"
          alt="Thor Contracting Logo"
          src="\images\John Thoreson Logo.png"
        />

        <div
          className={
            iconExpanded.any
              ? "footer-icon-container any-hovered"
              : "footer-icon-container none-hovered"
          }
        >
          <h2 className="footer-title-name">Thor Contracting</h2>
          <h2 className="footer-title-ccb">CCB#219680</h2>
          {icons.map((service) => (
            <div
              key={service.service}
              className="icon-div"
              onMouseEnter={service.setTrue}
              onMouseLeave={() => setTimeout(service.setFalse, 4000)}
            >
              <FontAwesomeIcon
                className={
                  iconExpanded[service.service]
                    ? "footer-icons hovered"
                    : "footer-icons not-hovered"
                }
                icon={service.icon}
                style={{ marginLeft: "2rem" }}
              ></FontAwesomeIcon>
              <span className="icon-text" style={{ display: "inline-block" }}>
                {iconExpanded[service.service + "Address"]}
              </span>
            </div>
          ))}
        </div>
      </footer>
    </>
  );
}
