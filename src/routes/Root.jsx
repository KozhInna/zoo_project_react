import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function Root(props) {
  return (
    <>
      <Header {...props} />
      <Outlet />
      <Footer />
    </>
  );
}
export default Root;
