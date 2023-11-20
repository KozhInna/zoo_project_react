import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <div className={styles.containerFrontpage}>
        <div className={styles.animalsFrontpage}>
          <Link to="/Animals">Animals</Link>
        </div>
        <div className={styles.birdsFrontpage}>
          <Link to="/Birds">Birds</Link>
        </div>
      </div>
    </>
  );
}
export default Home;
