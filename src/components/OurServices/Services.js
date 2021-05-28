import React from "react";
import ServiceImages from "./ServiceImages.js";
import { Card } from "react-bootstrap";

export default function Services() {
  return (
    <div className="services-container">
      {ServiceImages.map((image) => (
        <Card className="services-card">
          <img src={image.link} alt={image.alt} className="services-image" />
        </Card>
      ))}
    </div>
  );
}
