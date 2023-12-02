import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({ resetSearch }) => {
  const { pathname } = useLocation();

  if (pathname === "/") return null;

  return (
    <header className={styles.header}>
      <h1>
        {" "}
        <Link to="/">ZOO app</Link>
      </h1>

      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/animals" onClick={resetSearch}>
              Animals
            </NavLink>
          </li>
          <li>
            <NavLink to="/birds" onClick={resetSearch}>
              Birds
            </NavLink>
          </li>
          <li>
            <NavLink to="/fishes" onClick={resetSearch}>
              Fishes
            </NavLink>
          </li>
          <li>
            <NavLink to="/reptiles" onClick={resetSearch}>
              Reptiles
            </NavLink>
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
