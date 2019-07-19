import React from "react";
import logo from "./assets/ct-logo-dark.webp";
import { Navbar, Logo, NavLink, LeftNavItem, RightNavItem } from "./App.style";
import { NAV_LINKS } from "./enums";

const Navigation = () => (
  <Navbar>
    <LeftNavItem>
      <Logo src={logo} className="App-logo" alt="logo" />
    </LeftNavItem>
    <RightNavItem>
      {NAV_LINKS.map(link => (
        <NavLink primary={link.primary} href={link.url}>
          {link.title}
        </NavLink>
      ))}
    </RightNavItem>
  </Navbar>
);

export default Navigation;
