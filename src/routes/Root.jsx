import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function Root({ resetSearch }) {
  return (
    <>
      <Header resetSearch={resetSearch} />
      <Outlet />
      <Footer />
    </>
  );
}
export default Root;
