import { useNavigate, useParams } from "react-router-dom";
import styles from "./SingleAnimal.module.css";

const SingleAnimal = ({ animalList }) => {
  const params = useParams();

  const data = animalList.find((el) => el.name === params.name);
  console.log(data);
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.oneAnimalBox}>
        <h2>{data.name.toUpperCase()}</h2>
        <div className={styles.singleAnimalImg}>
          <img
            src={`https://source.unsplash.com/400x400/?${data.name}`}
            alt={data.name}
          />
        </div>

        <h2>
          <span className="likes">{data.likes}</span>
          <span className="material-symbols-outlined">
            {data.likes >= 0 ? "favorite" : "heart_broken"}
          </span>
        </h2>
        <div className={styles.goBackBtn}>
          <button onClick={() => navigate(-1)}>Go back</button>
        </div>
      </div>
    </>
  );
};

export default SingleAnimal;
