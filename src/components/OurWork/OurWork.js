import React from "react";
import OurWorkImages from "./OurWorkImages";

export default function OurWork() {
  return (
    <div className="our-work-container">
      {OurWorkImages.map((img) => (
        <img className="our-work-card" src={img.link} alt={img.alt} />
      ))}
    </div>
  );
}
