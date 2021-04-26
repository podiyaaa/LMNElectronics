import React, { Component, useContext } from "react";
import { CardColumns, Col, Row } from "reactstrap";
import { SearchContext } from "../contexts/search/search-context";
import CustomerDashboard from "./customer-dashboard";
import ElectronicItem from "./electronic-item";

const HomeItemContainer = () => {
  const { products } = useContext(SearchContext);
  return (
    <div>
      <Row className="mb-5">
        <CustomerDashboard />
      </Row>
      <Row>
        <Row className="mb-3">
          <Col>
            <h5 className="text-muted">Products</h5>
          </Col>
        </Row>
        <CardColumns>
          {products &&
            products.map((product) => {
              return <ElectronicItem key={product.id} item={product} />;
            })}
        </CardColumns>
      </Row>
    </div>
  );
};

export default HomeItemContainer;
