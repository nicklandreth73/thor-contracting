import React from "react";
import { Card } from "react-bootstrap";

export default function AboutUs() {
  return (
    <>
      <Card className="article-container">
        <div className="article">
          <h2 className="article-title">About Us</h2>
          <hr className="article-line"></hr>
          <p className="article-content">
            At Thor Contracting we care about helping people complete their
            dream projects. When a customer sees their abandoned space become
            the most beautiful part of their home our dreams are realized as
            well.
            <br />
            <br />
            The customer is the most important employee at our company. We make
            sure that all of our customers goals and preferences are addressed
            in every job
            <br />
            <br />
            We specialize in helping renovate homes. We install tile, drywall,
            paint, roof and install appliances among many other services. We
            transform spaces to match our customers' vision.
            <br />
            <br />
            Through thirty years of construction experience our owner John
            Thoreson has learned to take on all types of projects big and small.
            But seeing customers' dreams realized in improving their own homes
            has always been where he has found the most rewarding.
            <br />
            <br />
            That is why Thor Contracting does quality work and stands behind it.
          </p>
        </div>
      </Card>

      <div className="aboutus-img-container">
        <Card className="aboutus-img">
          <img
            src="\images\John at beach.jpg"
            alt="John Thoreson at beach in coos bay with sunglasses"
            className="aboutus-imgs"
          />
        </Card>
        <Card className="aboutus-img">
          <img
            src="\images\John black and white glasses.jpg"
            alt="Black and white of John Thoreson with glasses"
            className="aboutus-imgs"
          />
        </Card>
        <Card className="aboutus-img">
          <img
            src="\images\John Ethiopian Resteraunt.jpg"
            alt="John Thoreson at an Ethiopian resteraunt"
            className="aboutus-imgs"
          />
        </Card>
      </div>
    </>
  );
}
