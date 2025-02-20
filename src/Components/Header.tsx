import { NavLink } from "react-router";

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to='/' end>
          Home
        </NavLink>
        <NavLink to='/search'>Search</NavLink>
        <NavLink to='/getintoit'>Get in to it?</NavLink>
        <NavLink to='/discover'>Discover</NavLink>
      </nav>
    </header>
  );
}
