import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { CartContext } from "../../contexts/cart/cart-context";
import { formatNumber } from "../../helpers/utils";
import CartProducts from "./cart-products";

const Cart = () => {
  const {
    total,
    cartItems,
    itemCount,
    clearCart,
    checkout,
    handleCheckout,
  } = useContext(CartContext);

  const history = useHistory();

  if (checkout) {
    history.push("/orders");
  }

  return (
    <div>
      <h1 className="mt-5">Cart</h1>
      <Row noGutters className="justify-content-center">
        <Col sm={9} className="p-3">
          {cartItems.length > 0 ? (
            <CartProducts />
          ) : (
            <div className="p-3 text-center text-muted">Your cart is empty</div>
          )}
        </Col>
        {cartItems.length > 0 && (
          <div className="col-sm-3 p-3">
            <div className="card card-body">
              <p className="mb-1">Total Items</p>
              <h4 className=" mb-3 txt-right">{itemCount}</h4>
              <p className="mb-1">Total Payment</p>
              <h3 className="m-0 txt-right">{formatNumber(total)}</h3>
              <hr className="my-4" />
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-primary mb-2"
                  onClick={handleCheckout}
                >
                  CHECKOUT
                </button>
                <button
                  type="button"
                  className="btn btn-outlineprimary btn-sm"
                  onClick={clearCart}
                >
                  CLEAR
                </button>
              </div>
            </div>
          </div>
        )}
      </Row>
    </div>
  );
};

export default Cart;
