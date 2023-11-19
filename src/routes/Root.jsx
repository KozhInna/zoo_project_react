import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function Rout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default Rout;
