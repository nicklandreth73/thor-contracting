import React from "react";
import { Carousel, Button } from "react-bootstrap";
import HomeCarouselPictures from "./HomeCarouselPictures";

export default function Home() {
  return (
    <>
      <Carousel fade>
        {HomeCarouselPictures.map((image) => (
          <Carousel.Item key={image.image}>
            <Carousel.Caption>
              <h1>{image.text}</h1>
              <a href="tel:971-332-2151">
              <Button className="btn-lg btn-block mt-3">Call Us Now 971-332-2151</Button>
              </a>
            </Carousel.Caption>
            <img
              className="home-carousel-img"
              src={image.image}
              alt={image.alt}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
