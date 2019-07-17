import styled from "styled-components/macro";

export const BaseApp = styled.div`
  width: 100%;
  max-width: 100vw;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
`;

export const FlexChild = styled.div``;

export const Navbar = styled(FlexBox)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
  margin: 1em 1.5em;
`;

export const Logo = styled.img`
  width: 132px;
  height: 30px;
`;

export const LeftNavItem = styled.div`
  flex: 1 0 auto;
`;

export const RightNavItem = styled(FlexBox)`
  flex: 1 0 auto;
`;

export const NavLink = styled.div`
  width: 100%;
`;

export const BodyContent = styled.div`
  width: 100%;
  max-width: 950px;
  margin-left: auto;
  margin-right: auto;
  padding: 1em 1.5em;
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

export const CallToActionWrapper = styled.div`
  width: 100%;
  background-color: #005aaa;
  color: #eee;
  padding: 2.5em 0;
`;

export const CallToActionContent = styled.p`
  width: 100%;
  max-width: 950px;
  margin-left: auto;
  margin-right: auto;
  padding: 1em 1.5em;
`;

export const CallToActionMessaging = styled.p`
  width: 100%;
  font-size: 1.5rem;
  line-height: 2.25rem;
`;

export const CallToActionButton = styled.button`
  height: 50px;
  padding-right: 15px;
  padding-left: 15px;
  background-color: #eee;
  color: #005aaa;
  border: none;
  font-size: 1.25rem;
  line-height: 2.25rem;
  &:hover {
    background-color: blue;
  }
`;
