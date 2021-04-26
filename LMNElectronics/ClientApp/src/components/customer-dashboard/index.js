import React from "react";
import { useHistory } from "react-router";
import {
  Card,
  CardColumns,
  CardText,
  CardTitle,
  Col,
  Row,
  Button,
} from "reactstrap";

const CustomerDashboard = () => {
  const history = useHistory();
  return (
    <div>
      <Row>
        <Col>
          <Card
            tag="button"
            body
            style={{ backgroundColor: "#cfd4d1" }}
            onClick={() => history.push("/orders")}
          >
            <CardTitle tag="h6">
              Pending <br /> Orders
            </CardTitle>
            <CardText tag="h1">292</CardText>
          </Card>
        </Col>
        <Col>
          <Card
            tag="button"
            body
            style={{ backgroundColor: "#cfd4d1" }}
            onClick={() => history.push("/orders")}
          >
            <CardTitle tag="h6">
              Delivered <br /> Orders
            </CardTitle>
            <CardText tag="h1">292</CardText>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CustomerDashboard;
