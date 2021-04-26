import React from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Jumbotron,
  Label,
  Row,
} from "reactstrap";

function Register() {
  return (
    <div>
      <Container>
        <Row>
          <Col />
          <Col lg="8">
            <Jumbotron>
              <h3>Registration Form</h3>
              <br />
              <Card>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <Label for="exampleEmail">Username</Label>
                      <Input
                        type="text"
                        name="username"
                        id="exampleUsername"
                        placeholder="with a placeholder"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="with a placeholder"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="password placeholder"
                      />
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Jumbotron>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
}

export default Register;
