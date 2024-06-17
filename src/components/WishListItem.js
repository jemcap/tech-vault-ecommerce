import React, { useContext } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { getProductData } from "../context/productStore";

const WishListItem = ({ product }) => {
  const cartContext = useContext(CartContext);
  const id = product.id;
  const productData = getProductData(id);
  return (
    <Card className="mb-3">
      <Card.Body>
        <Row>
          <Col md={8}>
            <Card.Title>{productData.text}</Card.Title>
            <Card.Img src={productData.image} />
            <Card.Text className="mb-2">
              <strong>Price:</strong> £{productData.price.toFixed(2)}
            </Card.Text>
          </Col>
          <Col
            md={4}
            className="d-flex flex-column align-items-center justify-content-center gap-1"
          >
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                cartContext.addOneToCart(id);
                cartContext.deleteFromWishlist(id);
              }}
            >
              Add to Cart
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={() => cartContext.deleteFromWishlist(id)}
            >
              Remove
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default WishListItem;
