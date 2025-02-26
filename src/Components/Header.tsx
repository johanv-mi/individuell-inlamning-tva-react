import { Nav, StyledHeader, StyledNavLink } from "./styles/Header.styled";

export default function Header() {
  return (
    <header>
      <StyledHeader>
        <Nav>
          <StyledNavLink to='/' end>
            HOME
          </StyledNavLink>

          <StyledNavLink to='/getintoit'>GET IN TO IT?</StyledNavLink>
          <StyledNavLink to='/discover'>DISCOVER</StyledNavLink>
        </Nav>
      </StyledHeader>
    </header>
  );
}
