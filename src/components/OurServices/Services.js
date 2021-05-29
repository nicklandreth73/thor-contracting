import React from "react";
import ServiceImages from "./ServiceImages.js";
import { Card } from "react-bootstrap";

export default function Services() {
  return (
    <div className="services-container">
      {ServiceImages.map((image) => (
        <Card className="services-card">
          <h3 className="services-title">{image.title}</h3>
          <img src={image.link} alt={image.alt} className="services-image" />
          <ul className="services-service-list">
            {image.services.map((service) => (
              <li className="services-service">{service}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
