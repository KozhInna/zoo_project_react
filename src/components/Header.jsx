import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  if (pathname === "/") return null;
  return (
    <header className="header">
      <h1>Zoo app</h1>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/animals">Animals</NavLink>
          </li>
          <li>
            <NavLink to="/birds">Birds</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
