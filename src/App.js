import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import Buy from "./Components/Buy";
import Cart from "./Components/Cart";
import { Container, Row, Col } from "reactstrap";

function App() {
  const [cartItem, setCartItem] = useState([]);
  const addInCart = (item) => {
    const isAdded = cartItem.findIndex((array) => array.id === item.id);
    if (isAdded !== -1) {
      toast("Allready added!", { type: "error" });
    } else setCartItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCartItem([]);
    toast("Purchase complete!", { type: "success" });
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter((i) => i.id !== item.id));
  };
  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md="8">
          <Buy addInCart={addInCart} />
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
