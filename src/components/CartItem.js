import React, { useContext } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { getProductData } from "../context/productStore";

const CartItem = ({ product }) => {
  const cartContext = useContext(CartContext);
  const id = product.id;
  const quantity = product.quantity;
  const productData = getProductData(id);

  return (
    <Card className="mb-3">
      <Card.Body>
        <Row>
          <Col md={8}>
            <Card.Title>{productData.text}</Card.Title>
            <Card.Img src={productData.image} />
            <Card.Text className="mb-2">
              <strong>Quantity:</strong> {quantity}
            </Card.Text>
            <div className="d-flex align-items-center mb-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => cartContext.addOneToCart(id)}
                className="me-2"
              >
                +
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => cartContext.removeOneFromCart(id)}
                className="me-2"
              >
                -
              </Button>
            </div>
            <Card.Text className="mb-2">
              <strong>Total:</strong> £
              {(quantity * productData.price).toFixed(2)}
            </Card.Text>
          </Col>
          <Col md={4} className="d-flex align-items-center justify-content-end">
            <Button
              variant="danger"
              size="sm"
              onClick={() => cartContext.deleteFromCart(id)}
            >
              Remove
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
