import React, { useContext, useEffect, useState } from "react";
import { Card, Button, Form, Col, Row } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(false);
  const cartContext = useContext(CartContext);
  const productQuantity = cartContext.getProductQuantity(product.id);
  const wishListQuantity = cartContext.wishListItems;
  const { description } = product;

  useEffect(() => {
    setIsSaveButtonDisabled(
      wishListQuantity.some((item) => item.id === product.id)
    );
  }, [wishListQuantity, product.id]);

  function handleClickSave(id) {
    console.log("Adding to wishlist:", id);
    cartContext.addToWishList(id);
    console.log("Updated wishlist:", wishListQuantity);
    console.log("Product ID:", product.id);
  }

  return (
    <Card className="mb-3 shadow product-card">
      <Card.Body>
        <Card.Title className="mb-2">{product.text}</Card.Title>
        <Card.Text>
          <img src={product.image} className="product-image" alt="Hello" />
        </Card.Text>
        <Card.Text>
          <ul align="start">
            {description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </Card.Text>
        <Card.Text className="mb-3">
          <strong>Price:</strong> £{product.price.toFixed(2)}
        </Card.Text>
        {productQuantity > 0 ? (
          <>
            <Form as={Row} className="align-items-center mb-3">
              <Form.Label column="true" sm="6">
                In Cart: {productQuantity}
              </Form.Label>
              <Col sm="6" className="d-flex justify-content-end">
                <Button
                  variant="secondary"
                  size="sm"
                  className="me-2"
                  onClick={() => cartContext.addOneToCart(product.id)}
                >
                  +
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="me-2"
                  onClick={() => cartContext.removeOneFromCart(product.id)}
                >
                  -
                </Button>
              </Col>
            </Form>
            <Button
              variant="danger"
              className="w-100"
              onClick={() => cartContext.deleteFromCart(product.id)}
            >
              Remove from Cart
            </Button>
          </>
        ) : (
          <>
            <div className="d-flex">
              <Button
                variant="secondary"
                className="me-2 flex-fill"
                onClick={() => handleClickSave(product.id)}
                disabled={isSaveButtonDisabled}
              >
                Save
              </Button>
              <Button
                variant="primary"
                className="flex-fill"
                onClick={() => cartContext.addOneToCart(product.id)}
              >
                Add to Cart
              </Button>
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
