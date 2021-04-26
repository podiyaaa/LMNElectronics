import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Table,
} from "reactstrap";
import { Edit, Plus, TrashIcon } from "../icons";

async function fetchProducts() {
  const res = await fetch("https://localhost:5001/api/electronicitems", {
    method: "GET",
    headers: {},
  });
  return await res.json();
}

async function deleteProduct(id) {
  const res = await fetch("https://localhost:5001/api/electronicitems/" + id, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoicmF2aW5kdWtzZW5ldmlyYXRobmEiLCJqdGkiOiI4MjdkZjJmNC1lZjNhLTRhMzItYWViNS02OWE4MWNkMWJmNTYiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTYxODg1ODA0MywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo2MTk1NSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJ9.wNiB-YEplWiGey_Bmge-zAMnmso6XjHpjGh7q-u7Jow",
    },
  });
  return res;
}

async function addEditProduct(product) {
  let url = "https://localhost:5001/api/electronicitems";
  if (product.id) {
    url = "https://localhost:5001/api/electronicitems/" + product.id;
  }
  const res = await fetch(url, {
    method: product.id ? "PUT" : "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoicmF2aW5kdWtzZW5ldmlyYXRobmEiLCJqdGkiOiI4MjdkZjJmNC1lZjNhLTRhMzItYWViNS02OWE4MWNkMWJmNTYiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTYxODg1ODA0MywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo2MTk1NSIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJ9.wNiB-YEplWiGey_Bmge-zAMnmso6XjHpjGh7q-u7Jow",
    },
    body: JSON.stringify(product),
  });
  return res;
}

async function fetchElectronicItemCategories() {
  const res = fetch("https://localhost:5001/api/electronicitemcategory", {
    method: "GET",
    headers: {},
  });
  return (await res).json();
}

const Products = () => {
  const [productCategories, setProductCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState({});

  const toggle = () => setModal(!modal);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, [setProducts]);

  useEffect(() => {
    fetchElectronicItemCategories().then(setProductCategories);
  }, [setProductCategories]);

  return (
    <div>
      <Row className="mt-5 mb-5">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-right">
          <Button
            color="success"
            onClick={() => {
              setProduct({});
              toggle();
            }}
          >
            <Plus width={"20px"} />
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                {/* <th>Image</th> */}
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => {
                return (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.price}</td>
                    <td>{p.quantity}</td>
                    {/* <td>
                      <img
                        height="50px"
                        width="50px"
                        src={
                          "https://i2.wp.com/nilambaraelectronics.com/wp-content/uploads/2019/10/Best-Hvac-Multimeters-list.jpg?resize=300%2C300&ssl=1"
                        }
                      />
                    </td> */}
                    <td>
                      <Button
                        color="warning"
                        onClick={() => {
                          setProduct(p);
                          toggle();
                        }}
                      >
                        <Edit width={"20px"} />
                      </Button>
                    </td>
                    <td>
                      <Button
                        color="danger"
                        onClick={() =>
                          deleteProduct(p.id).then(
                            fetchProducts().then(setProducts)
                          )
                        }
                      >
                        <TrashIcon width={"20px"} />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add or Edit</ModalHeader>
        <ModalBody>
          <Row>
            <Col>
              <FormGroup>
                <Label for="exampleCategory">Select Category</Label>
                <Input
                  type="select"
                  name="select"
                  id="exampleCategory"
                  defaultValue={product.category && product.category.id}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      category: parseInt(e.target.value),
                    })
                  }
                >
                  {productCategories.map((category) => {
                    return (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    );
                  })}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleName">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="exampleName"
                  value={product.name}
                  onChange={(e) =>
                    setProduct({ ...product, name: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePrice">Price</Label>
                <Input
                  type="text"
                  name="price"
                  id="examplePrice"
                  value={product.price}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      price: parseFloat(e.target.value),
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleQuantity">Quantity</Label>
                <Input
                  type="text"
                  name="quantity"
                  id="exampleQuantity"
                  value={product.quantity}
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      quantity: parseInt(e.target.value),
                    })
                  }
                />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => {
              if (product)
                addEditProduct(product)
                  .then((res) => {
                    fetchProducts().then(setProducts);
                    toggle();
                  })
                  .catch((e) => {
                    fetchProducts().then(setProducts);
                    toggle();
                  });
            }}
          >
            {product.id ? "Update" : "Add"}
          </Button>{" "}
          <Button color="light" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Products;
