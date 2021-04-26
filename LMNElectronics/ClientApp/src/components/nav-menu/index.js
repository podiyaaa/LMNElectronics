import React, { useContext, useState } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledTooltip,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./index.css";
import { CartContext } from "../../contexts/cart/cart-context";
import { CartIcon, CheckGrid, Profile, SignOut } from "../icons";

const NavMenu = () => {
  const [navCollapsed, setNavCollapsed] = useState(true);
  const { itemCount } = useContext(CartContext);

  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
        light
      >
        <Container>
          <NavbarBrand tag={Link} to="/">
            LMNElectronics
          </NavbarBrand>
          <NavbarToggler
            // onClick={setNavCollapsed(navCollapsed)}
            className="mr-2"
          />
          <Collapse
            className="d-sm-inline-flex flex-sm-row-reverse"
            isOpen={!navCollapsed}
            navbar
          >
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/login">
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/register">
                  Register
                </NavLink>
              </NavItem>
              <NavItem id="orders">
                <NavLink tag={Link} className="text-dark" to="/orders">
                  <CheckGrid width={"20px"} />{" "}
                </NavLink>
              </NavItem>
              <UncontrolledTooltip placement="bottom" target="orders">
                Orders
              </UncontrolledTooltip>
              <NavItem id="cart">
                <NavLink tag={Link} className="text-dark" to="/cart">
                  <span>
                    <CartIcon width={"20px"} />{" "}
                    <span style={{ verticalAlign: "middle" }}>
                      ({itemCount})
                    </span>
                  </span>
                </NavLink>
              </NavItem>
              <UncontrolledTooltip placement="bottom" target="cart">
                Cart
              </UncontrolledTooltip>
              <NavItem id="profile">
                <NavLink tag={Link} className="text-dark" to="/profile">
                  <Profile width={"20"} />
                </NavLink>
              </NavItem>
              <UncontrolledTooltip placement="bottom" target="profile">
                Profile
              </UncontrolledTooltip>
              <NavItem id="logout">
                <NavLink tag={Link} className="text-dark" to="/logout">
                  <SignOut width={"20"} />
                </NavLink>
              </NavItem>
              <UncontrolledTooltip placement="bottom" target="logout">
                Logout
              </UncontrolledTooltip>
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavMenu;
