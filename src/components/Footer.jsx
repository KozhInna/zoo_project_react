import { useLocation } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  const { pathname } = useLocation();

  if (pathname === "/") return null;
  return (
    <footer className={styles.footer}>
      <p>&copy; Copyright {new Date().getFullYear()} by Inna Kozhina</p>
    </footer>
  );
};
export default Footer;
