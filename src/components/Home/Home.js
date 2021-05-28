import React from "react";
import { Carousel } from "react-bootstrap";
import HomeCarouselPictures from "./HomeCarouselPictures";

export default function Home() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="home-carousel-img"
            src={HomeCarouselPictures[0].image}
            alt={HomeCarouselPictures[0].alt}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="home-carousel-img"
            src={HomeCarouselPictures[1].image}
            alt={HomeCarouselPictures[1].alt}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="home-carousel-img"
            src={HomeCarouselPictures[2].image}
            alt={HomeCarouselPictures[2].alt}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="home-carousel-img"
            src={HomeCarouselPictures[3].image}
            alt={HomeCarouselPictures[3].alt}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="home-carousel-img"
            src={HomeCarouselPictures[4].image}
            alt={HomeCarouselPictures[4].alt}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="home-carousel-img"
            src={HomeCarouselPictures[5].image}
            alt={HomeCarouselPictures[5].alt}
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
