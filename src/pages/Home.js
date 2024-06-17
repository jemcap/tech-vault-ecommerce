import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProductCarousel from "../components/ProductCarousel";
import PromoBar from "../components/PromoBar";
import { productsArr } from "../context/productStore";
import CameraBanner from "../components/CameraBanner";
import Footer from "../components/Footer";
import "../components/Home.css";

const getRandomProducts = (numProducts) => {
  const shuffledProducts = [...productsArr].sort(() => 0.5 - Math.random());
  return shuffledProducts.slice(0, numProducts);
};

const Home = () => {
  const randomProducts = getRandomProducts(3);
  return (
    <>
      <Container fluid>
        <PromoBar />
        <ProductCarousel />
        <ul>
          <Row xs={1} md={3} className="g-4 my-3 product-row">
            {randomProducts.map((product, index) => (
              <Col key={index} className="product-col">
                <Card className="product-card-home">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.text}
                    className="product-image"
                  />
                  <Card.Body>
                    <Card.Title className="text-center mb-2">
                      <h5>{product.text}</h5>
                    </Card.Title>
                    <Card.Text className="text-center mb-3">
                      <strong>Price:</strong> £{product.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </ul>
        <div align="center">
          <Button href="/store">View All</Button>
        </div>
        <CameraBanner />

        <Footer />
      </Container>
    </>
  );
};

export default Home;
