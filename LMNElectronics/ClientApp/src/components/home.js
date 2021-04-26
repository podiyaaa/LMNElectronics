import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import { FAKE_API } from "../constant";
import SearchContextProvider from "../contexts/search/search-context";
import HomeItemContainer from "./home-item-container";
import HomeSideMenu from "./home-side-menu";

export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <SearchContextProvider>
          <Row>
            <Col md={3} className="p-4">
              <HomeSideMenu />
            </Col>
            <Col md={9} className="p-4">
              <HomeItemContainer />
            </Col>
          </Row>
        </SearchContextProvider>
      </>
    );
  }
}
