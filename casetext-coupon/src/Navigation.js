import React from "react";
import logo from "./assets/ct-logo-dark.webp";
import { Navbar, NavLink, LeftNavItem, RightNavItem } from "./App.style";

const Navigation = () => (
  <Navbar>
    <LeftNavItem>
      <img src={logo} className="App-logo" alt="logo" />
    </LeftNavItem>
    <RightNavItem>
      <NavLink>Product</NavLink>
      <NavLink>Pricing</NavLink>
      <NavLink>Tour</NavLink>
      <NavLink>Coverage</NavLink>
      <NavLink>Switch</NavLink>
      <NavLink>Big Firm</NavLink>
      <NavLink>Law Schools</NavLink>
      <NavLink>Sign In</NavLink>
      <NavLink>Free Trial</NavLink>
    </RightNavItem>
  </Navbar>
);

export default Navigation;
