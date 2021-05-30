import React from "react";
import { Carousel } from "react-bootstrap";
import HomeCarouselPictures from "./HomeCarouselPictures";

export default function Home() {
  return (
    <>
      <Carousel fade>
        {HomeCarouselPictures.map((image) => (
          <Carousel.Item key={image.image}>
            <Carousel.Caption>
              <h1>{image.text}</h1>
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
