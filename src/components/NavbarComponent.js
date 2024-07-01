import React, { useContext, useState } from "react";
import logo from "../assets/TechVault_transparent.png";
import { Nav, Navbar, Button, Modal } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import WishListItem from "./WishListItem";
import "./NavbarComponent.css";

const NavbarComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const cartContext = useContext(CartContext);
  const productQuantity = cartContext.items.reduce(
    (acc, num) => acc + num.quantity,
    0
  );

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseWishlistModal = () => {
    setShowWishlist(false);
  };
  const handleShowWishlistModal = () => {
    setShowWishlist(true);
  };
  return (
    <>
      <Navbar expand="sm" className="navbar-custom">
        <Navbar.Brand href="/" className="navbar-brand">
          <img src={logo} width={120} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Item>
              <Nav.Link href="/">HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/store">PRODUCTS</Nav.Link>
            </Nav.Item>
          </Nav>
          <Button
            onClick={handleShowWishlistModal}
            className="mx-3 button-custom"
          >
            <FontAwesomeIcon icon={faHeart} />
          </Button>
          <Button onClick={handleShowModal} className="button-custom">
            <FontAwesomeIcon icon={faCartShopping} />
            {productQuantity ? `(${productQuantity})` : undefined}
          </Button>
        </Navbar.Collapse>
      </Navbar>

      {/* Cart modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          {productQuantity > 0 ? (
            <>
              <p>Items in cart:</p>
              {cartContext.items.map((item, index) => (
                <CartItem product={item} key={index} />
              ))}
              <h1>Total: £{cartContext.getTotalCost().toFixed(2)}</h1>
              <Button variant="success" className="button-checkout">
                Checkout
              </Button>
            </>
          ) : (
            <h3>There are no items in your cart.</h3>
          )}
        </Modal.Body>
      </Modal>

      {/* Wishlist modal */}
      <Modal show={showWishlist} onHide={handleCloseWishlistModal}>
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>Saved</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          {cartContext.wishListItems.map((item, index) => (
            <WishListItem product={item} key={index} />
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NavbarComponent;
