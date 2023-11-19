import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  if (pathname === "/") return null;
  return (
    <footer className="footer">
      <h2>text</h2>
    </footer>
  );
};
export default Footer;
