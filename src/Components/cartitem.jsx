import React from "react";
import { Card, CardImg, CardText, CardTitle, Button } from "reactstrap";

const CartItem = ({ product, addInCart }) => {
  return (
    <Card className="mt-2 mb-1">
      <CardImg top height="250" width="100%" src={product.smallImage} />
      <CardTitle> {product.name} </CardTitle>
      <CardText className="secondery">Price RS: {product.price} </CardText>
      <Button color="success" onClick={() => addInCart(product)} >Buy Now</Button>
    </Card>
  );
};

export default CartItem;
