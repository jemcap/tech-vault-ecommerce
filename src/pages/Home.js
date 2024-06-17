import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProductCarousel from "../components/ProductCarousel";
import PromoBar from "../components/PromoBar";
import { productsArr } from "../context/productStore";
import CameraBanner from "../components/CameraBanner";
import Footer from "../components/Footer";

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
          <Row xs={1} md={3} className="g-4 my-3">
            {randomProducts.map((product, index) => (
              <Col key={index}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.text}
                  />
                  <Card.Body>
                    <Card.Title>{product.text}</Card.Title>
                    <Card.Text>Price: {product.price}</Card.Text>
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
