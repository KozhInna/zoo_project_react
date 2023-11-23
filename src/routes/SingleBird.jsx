import { useNavigate, useParams } from "react-router-dom";
import styles from "./SingleAnimal.module.css";

const SingleBird = ({ birdList }) => {
  const params = useParams();

  const data = birdList.find((el) => el.name === params.name);

  const navigate = useNavigate();
  return (
    <>
      <h2>{data.name}</h2>
      <img
        className={styles.SingleAnimalImg}
        src={`https://source.unsplash.com/400x400/?${data.name}`}
        alt={data.name}
      />
      <h2>{data.likes}</h2>
      <button className={styles.goBackBtn} onClick={() => navigate(-1)}>
        {" "}
        Go back
      </button>
    </>
  );
};

export default SingleBird;
