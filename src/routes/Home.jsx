import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home will be here</h1>
      <Link to="/Birds">Birds</Link>
      <Link to="/Animals">Animals</Link>
    </>
  );
}
export default Home;
