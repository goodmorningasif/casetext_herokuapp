import styled from "styled-components/macro";
import { COLOR_ENUMS } from "../enums";

const maxWidth = "950px";

export const flexBoxStyler = ({
  a = "flex",
  b = "flex-start",
  c = "flex-start",
  d = "nowrap"
}) => `
  display: ${a};
  justify-content: ${b};
  align-items: ${c};
  flex-wrap: ${d};
`;

export const flexChildStyler = ({ a = "1", b = "0", c = "auto" }) => `
  flex: ${a} ${b} ${c};
`;

export const centerByMargin = `
  margin-left: auto;
  margin-right: auto;
`;

export const BaseApp = styled.div`
  width: 100%;
  max-width: 100vw;
`;

export const FlexBox = styled.div`
  ${flexBoxStyler({ b: "space-between" })};
`;

export const Navbar = styled.div`
  ${flexBoxStyler({ b: "space-between" })};
  margin: 1em 1.5em;
`;

export const Logo = styled.img`
  width: 132px;
  height: 30px;
`;

export const LeftNavItem = styled.div`
  ${flexChildStyler({})};
`;

export const RightNavItem = styled.div`
  ${flexBoxStyler({ b: "space-between" })};
  ${flexChildStyler({ a: "0", c: "50rem" })};
`;

export const NavLink = styled.a`
  width: auto;
  color: ${props => (props.primary ? COLOR_ENUMS.grey : COLOR_ENUMS.black)};
  background-color: ${props =>
    props.primary ? COLOR_ENUMS.blue : COLOR_ENUMS.white};
  padding: 0.7rem;
  text-decoration: none;
  border-radius: 0.3rem;
`;

export const BodyContent = styled.div`
  ${centerByMargin}
  width: 100%;
  max-width: ${maxWidth};
  padding: 8em 1.5em;
`;

export const ValueProp = styled.p`
  width: 100%;
  font-size: 2.5rem;
`;

export const ProofPoints = styled.p`
  width: 100%;
  font-size: 1.25rem;
  line-height: 2.25rem;
`;

export const CTAWrapper = styled.div`
  width: 100%;
  background-color: ${COLOR_ENUMS.blue};
  color: ${COLOR_ENUMS.grey};
  padding: 8em 0 10em;
`;

export const CTAContent = styled.div`
  ${centerByMargin}
  width: 100%;
  max-width: ${maxWidth};
  padding: 1em 1.5em;
`;

export const CTAMessaging = styled.p`
  width: 100%;
  font-size: 1.5rem;
  line-height: 2.25rem;
`;

export const CTAButton = styled.button`
  height: 3rem;
  border-radius: 0.3rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  background-color: ${COLOR_ENUMS.blue};
  border: 2px solid ${COLOR_ENUMS.grey};
  color: ${COLOR_ENUMS.grey};
  font-size: 1.25rem;
  line-height: 2.25rem;
  &:hover {
    background-color: ${COLOR_ENUMS.grey};
    color: ${COLOR_ENUMS.blue};
  }
`;
