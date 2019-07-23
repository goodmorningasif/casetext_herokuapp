import React, { PureComponent } from "react";
import logo from "../assets/ct-logo-dark.webp";
import { Navbar, Logo, NavLink, LeftNavItem, RightNavItem } from "./App.style";
import { NAV_LINKS } from "../enums";

class Navigation extends PureComponent {
  render() {
    return (
      <Navbar
        ref={ref => {
          this.ref_NavBar = ref;
        }}
      >
        <LeftNavItem
          ref={ref => {
            this.ref_LeftNavItem = ref;
          }}
        >
          <Logo
            ref={ref => {
              this.ref_Logo = ref;
            }}
            src={logo}
            className="App-logo"
            alt="logo"
          />
        </LeftNavItem>
        <RightNavItem
          ref={ref => {
            this.ref_RightNavItem = ref;
          }}
        >
          {NAV_LINKS.map(link => (
            <NavLink
              ref={ref => {
                this[`ref_NavLink${link.title}`] = ref;
              }}
              key={link.title}
              primary={link.primary}
              href={link.url}
            >
              {link.title}
            </NavLink>
          ))}
        </RightNavItem>
      </Navbar>
    );
  }
}

export default Navigation;
