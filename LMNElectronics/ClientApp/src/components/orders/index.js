import React, { useState } from "react";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
  UncontrolledCollapse,
} from "reactstrap";
import { formatNumber } from "../../helpers/utils";

const Orders = () => {
  return (
    <div>
      <h1 className="mt-5 mb-5">Orders</h1>
      {/* <CustomerOrders /> */}
      <AdminOrders />
    </div>
  );
};

export default Orders;

const AdminOrders = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropDownItem, setDropDownItem] = useState("All");
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const onClickDropdownItem = (event) => {
    setDropDownItem(event.target.value);
  };
  return (
    <>
      <Row className=".clearfix">
        <Col>
          <Dropdown
            className="float-right"
            isOpen={dropdownOpen}
            toggle={toggle}
            size="sm"
          >
            <DropdownToggle caret>{dropDownItem}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={(e) => onClickDropdownItem(e)} value="All">
                All
              </DropdownItem>
              <DropdownItem
                onClick={(e) => onClickDropdownItem(e)}
                value="Wrapping"
              >
                Wrapping
              </DropdownItem>
              <DropdownItem
                onClick={(e) => onClickDropdownItem(e)}
                value="Shipped"
              >
                Shipped
              </DropdownItem>
              <DropdownItem
                onClick={(e) => onClickDropdownItem(e)}
                value="Delivered"
              >
                Delivered
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

const CustomerOrders = () => {
  return (
    <>
      <Row className="mt-3">
        <Col sm={12}>
          <h4 className="text-muted">PENDING</h4>
          <Alert color="warning" id="toggler">
            <Row>
              <Col>
                <span>Order Id - {"OI-93823"}</span>
              </Col>
              <Col style={{ textAlign: "center" }}>
                <span>Checkout Date - {"2021-04-09"}</span>
              </Col>
              <Col style={{ textAlign: "center" }}>
                <span>Est delivery - {"2021-04-09"}</span>
              </Col>
              <Col style={{ textAlign: "right" }}>
                <span>Total - {formatNumber(4200)}</span>
              </Col>
            </Row>
          </Alert>
          <Alert color="warning" id="toggler">
            <Row>
              <Col>
                <span>Order Id - {"OI-93823"}</span>
              </Col>
              <Col style={{ textAlign: "center" }}>
                <span>Checkout Date - {"2021-04-09"}</span>
              </Col>
              <Col style={{ textAlign: "center" }}>
                <span>Est delivery - {"2021-04-09"}</span>
              </Col>
              <Col style={{ textAlign: "right" }}>
                <span>Total - {formatNumber(4200)}</span>
              </Col>
            </Row>
          </Alert>
          <UncontrolledCollapse toggler="#toggler">
            <Card>
              <CardBody>
                <Progress multi>
                  <Progress bar animated value="100" color="success">
                    <span className="p-6">Delivered</span>
                    {
                      //Check out
                      //Wrapping
                      //Shipped
                      //Delivered
                    }
                  </Progress>
                </Progress>
              </CardBody>
              <CardFooter>
                <Row className="pt-2">
                  <Col sm={3}>
                    <img
                      alt={""}
                      style={{ margin: "0 auto", maxHeight: "50px" }}
                      src={"product.photo"}
                      className="img-fluid d-block"
                    />
                  </Col>
                  <Col>
                    <h5 className="mb-1">{"Sterio"}</h5>
                  </Col>
                  <Col sm={1}>
                    <p className="mb-0">Qty: {1}</p>
                  </Col>
                  <Col sm={2} style={{ textAlign: "right" }}>
                    <p className="mb-1">{formatNumber(2100)} </p>
                  </Col>
                </Row>
                {/* <Row className="pt-2">
                  <Col sm={3}>
                    <img
                      alt={""}
                      style={{ margin: "0 auto", maxHeight: "50px" }}
                      src={"product.photo"}
                      className="img-fluid d-block"
                    />
                  </Col>
                  <Col>
                    <h5 className="mb-1">{"Sterio"}</h5>
                  </Col>
                  <Col sm={1}>
                    <p className="mb-0">Qty: {1}</p>
                  </Col>
                  <Col sm={2} style={{ textAlign: "right" }}>
                    <p className="mb-1">{formatNumber(2100)} </p>
                  </Col>
                </Row> */}
              </CardFooter>
            </Card>
          </UncontrolledCollapse>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={12}>
          <h4 className="text-muted">DELIVERED</h4>
          <Alert color="success" id="toggler">
            <Row>
              <Col>
                <span>Order Id - {"OI-93823"}</span>
              </Col>
              <Col style={{ textAlign: "center" }}>
                <span>Checkout Date - {"2021-04-09"}</span>
              </Col>
              <Col style={{ textAlign: "center" }}>
                <span>Est delivery - {"2021-04-09"}</span>
              </Col>
              <Col style={{ textAlign: "right" }}>
                <span>Total - {formatNumber(4200)}</span>
              </Col>
            </Row>
          </Alert>
          <Alert color="success" id="toggler">
            <Row>
              <Col>
                <span>Order Id - {"OI-93823"}</span>
              </Col>
              <Col style={{ textAlign: "center" }}>
                <span>Checkout Date - {"2021-04-09"}</span>
              </Col>
              <Col style={{ textAlign: "center" }}>
                <span>Est delivery - {"2021-04-09"}</span>
              </Col>
              <Col style={{ textAlign: "right" }}>
                <span>Total - {formatNumber(4200)}</span>
              </Col>
            </Row>
          </Alert>
          <UncontrolledCollapse toggler="#toggler">
            <Card>
              <CardBody>
                <Progress multi>
                  <Progress bar animated value="100" color="success">
                    <span className="p-6">Delivered</span>
                    {
                      //Check out
                      //Wrapping
                      //Shipped
                      //Delivered
                    }
                  </Progress>
                </Progress>
              </CardBody>
              <CardFooter>
                <Row className="pt-2">
                  <Col sm={3}>
                    <img
                      alt={""}
                      style={{ margin: "0 auto", maxHeight: "50px" }}
                      src={"product.photo"}
                      className="img-fluid d-block"
                    />
                  </Col>
                  <Col>
                    <h5 className="mb-1">{"Sterio"}</h5>
                  </Col>
                  <Col sm={1}>
                    <p className="mb-0">Qty: {1}</p>
                  </Col>
                  <Col sm={2} style={{ textAlign: "right" }}>
                    <p className="mb-1">{formatNumber(2100)} </p>
                  </Col>
                </Row>
                {/* <Row className="pt-2">
                  <Col sm={3}>
                    <img
                      alt={""}
                      style={{ margin: "0 auto", maxHeight: "50px" }}
                      src={"product.photo"}
                      className="img-fluid d-block"
                    />
                  </Col>
                  <Col>
                    <h5 className="mb-1">{"Sterio"}</h5>
                  </Col>
                  <Col sm={1}>
                    <p className="mb-0">Qty: {1}</p>
                  </Col>
                  <Col sm={2} style={{ textAlign: "right" }}>
                    <p className="mb-1">{formatNumber(2100)} </p>
                  </Col>
                </Row> */}
              </CardFooter>
            </Card>
          </UncontrolledCollapse>
        </Col>
      </Row>
    </>
  );
};
