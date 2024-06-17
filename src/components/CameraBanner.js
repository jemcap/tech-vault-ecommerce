import React from "react";
import { Card, Button } from "react-bootstrap";
import "./CameraBanner.css";
import FilmCameraShelf from "../assets/2d3be849-93eb-4458-9e5d-e57546016b8f.jpeg";

const CameraBanner = () => {
  return (
    <Card className="text-white my-5" id="card">
      <Card.Img src={FilmCameraShelf} alt="Card image" id="camera-banner" />
      <Card.ImgOverlay>
        <Card.Title className="banner-title">
          Discover Rare Film Cameras!
        </Card.Title>
        <Card.Text>
          Explore our collection of vintage film cameras. Perfect for collectors
          and photography enthusiasts.
        </Card.Text>
        <div align="start">
          <Button href="/store">View All</Button>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
};

export default CameraBanner;
