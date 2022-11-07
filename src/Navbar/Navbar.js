import styled from "styled-components";
import SearchBar from "./Searchbar";
import Hamburger from "../Hamburger/Hamburger";
import { MobileView, DesktopView } from "../View/View";
import NavbarDropdown from "./NavbarDropdown";
import { LogoSVG } from "../svgs";

const Nav = styled.nav`
  height: 72px;
  padding: 16px 0px;
  width: 100vw;
`;

const Container = styled.div`
  height: 100%;
  margin: 0px auto;
  width: 100vw;
  max-width: 1280px;
  padding: 0px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  height: 34px;
  width: 48px;
`;

const Logo = styled.a`
  fill: white;
  cursor: pointer;
`;

const AuthButton = styled.a`
  background: none;
  color: white;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 1.5;
`;

const SignInButton = styled(AuthButton)`
  margin-right: 16px;
`;

const SignUpButton = styled(AuthButton)`
  padding: 4px 8px;
  border: 1px solid white;
  color: white;
  border-radius: 6px;
`;

const Section = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const NavbarMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <MobileView>
          <SignUpButton>Sign up</SignUpButton>
        </MobileView>
        <LogoContainer>
          <Logo>{LogoSVG}</Logo>
        </LogoContainer>
        <DesktopView style={{ width: "100%" }}>
          <NavbarMain>
            <Section>
              <NavbarDropdown />
            </Section>
            <Section>
              <SearchBar />
              <SignInButton>Sign in</SignInButton>
              <SignUpButton>Sign up</SignUpButton>
            </Section>
          </NavbarMain>
        </DesktopView>
        <MobileView>
          <Hamburger />
        </MobileView>
      </Container>
    </Nav>
  );
};

export default Navbar;
