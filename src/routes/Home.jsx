import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.containerFrontpage}>
      <div className={styles.animals}>
        <Link to="/animals">Animals</Link>
      </div>
      <div className={styles.birds}>
        <Link to="/birds">Birds</Link>
      </div>

      <div className={styles.fishes}>
        <Link to="/fishes">Fishes</Link>
      </div>
      <div className={styles.reptiles}>
        <Link to="/reptiles">Reptiles</Link>
      </div>
    </div>
  );
}
export default Home;
