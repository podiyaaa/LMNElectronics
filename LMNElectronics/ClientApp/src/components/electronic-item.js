import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import { CartContext } from "../contexts/cart/cart-context";

const ElectronicItem = ({ item }) => {
  const { addProduct, cartItems, increase } = useContext(CartContext);

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <Card key={item.id}>
      <CardImg
        top
        width="100%"
        // src="https://i2.wp.com/nilambaraelectronics.com/wp-content/uploads/2019/10/Best-Hvac-Multimeters-list.jpg?resize=300%2C300&ssl=1"
      />
      <CardBody>
        <CardTitle tag="h4">{item.name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {item.price} {"LKR"}
        </CardSubtitle>
        <CardText>{item.category && item.category.name}</CardText>

        {isInCart(item) && (
          <Button color="primary" outline onClick={() => increase(item)}>
            Add more
          </Button>
        )}

        {!isInCart(item) && (
          <Button color="primary" onClick={() => addProduct(item)}>
            Add to cart
          </Button>
        )}
      </CardBody>
    </Card>
  );
};

export default ElectronicItem;
