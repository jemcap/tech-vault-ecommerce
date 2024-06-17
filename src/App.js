import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";
import Store from "./pages/Store";
import CartProvider from "./context/CartContext";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <CartProvider>
        <Container fluid>
          <NavbarComponent />
        </Container>
        <Container fluid>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="store" element={<Store />} />
              <Route path="success" element={<Success />} />
              <Route path="cancel" element={<Cancel />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </CartProvider>
    </>
  );
}

export default App;
