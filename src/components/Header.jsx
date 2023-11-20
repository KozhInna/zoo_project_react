import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const { pathname } = useLocation();

  if (pathname === "/") return null;
  return (
    <header className={styles.header}>
      <h1>Zoo app</h1>

      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
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
