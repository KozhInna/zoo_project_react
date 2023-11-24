import { useNavigate, useParams } from "react-router-dom";
import styles from "./SingleBird.module.css";

const SingleBird = ({ birdList }) => {
  const params = useParams();

  const data = birdList.find((el) => el.name === params.name);

  const navigate = useNavigate();
  return (
    <>
      <main className={styles.oneBirdBox}>
        <section>
          <div>
            <h2>{data.name.toUpperCase()}</h2>

            <div className={styles.likes}>
              <span className="likes">{data.likes}</span>
              <span className="material-symbols-outlined">
                {data.likes >= 0 ? "favorite" : "heart_broken"}
              </span>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              natus debitis minus quos omnis repellendus harum deleniti quis
              culpa quo eum fugit eos amet hic commodi enim neque molestiae
              quidem veniam autem tempora, temporibus doloremque. Magni magnam
              dolorum quisquam ab veniam dolore vero totam optio dolor eos
              facilis sunt fugiat, sed rerum, impedit beatae soluta tempora ut
              fuga unde aliquid earum! Sapiente reprehenderit quasi alias
              repellat, quod tenetur nihil? Magni maiores sunt velit libero,
              dolor veritatis ad dolorum odio id cum ullam cumque perferendis
              sed, quidem facere ipsam eum reprehenderit animi hic eius harum
              tenetur dolorem dignissimos obcaecati. Esse, quia.
            </p>
            <button className={styles.goBackBtn} onClick={() => navigate(-1)}>
              {" "}
              Go back
            </button>
          </div>

          <img
            src={`https://source.unsplash.com/400x400/?${data.name}`}
            alt={data.name}
          />
        </section>
      </main>
    </>
  );
};

export default SingleBird;
