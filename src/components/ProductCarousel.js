import React from "react";
import { Carousel } from "react-bootstrap";
import imgVinyl from "../assets/travis-yewell-F-B7kWlkxDQ-unsplash.jpg";
import imgCamera from "../assets/nicola-perantoni-irUQaBK3ydI-unsplash.jpg";
import imgTele from "../assets/annie-spratt-goholCAVTRs-unsplash.jpg";
import "./ProductCarousel.css";

const ProductCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item className="carousel-item">
        <img src={imgVinyl} alt="Discover Timeless Classics" />
        <Carousel.Caption>
          <h3>Discover Timeless Classics</h3>
          <p>Explore our curated collection of vintage tech treasures.</p>
          <a href="/store">Shop Now</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imgCamera} alt="Relive the Golden Era" />
        <Carousel.Caption>
          <h3>Relive the Golden Era</h3>
          <p>Find unique and nostalgic items that bring back memories.</p>
          <a href="/store">Shop Now</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imgTele} alt="Shop Rare Finds" />
        <Carousel.Caption>
          <h3>Shop Rare Finds</h3>
          <p>Get your hands on exclusive vintage pieces today.</p>
          <a href="/store">Shop Now</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarousel;
