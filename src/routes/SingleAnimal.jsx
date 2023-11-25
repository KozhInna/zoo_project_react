import { useNavigate, useParams } from "react-router-dom";
import styles from "./SingleAnimal.module.css";

const SingleAnimal = ({ animalList }) => {
  const params = useParams();
  console.log(params);

  const data = animalList.find((el) => el.name === params.name);
  console.log(data);
  const navigate = useNavigate();
  return (
    <>
      <main className={styles.oneAnimalBox}>
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perspiciatis quae sequi voluptates sit quisquam repellendus.
              Inventore voluptatum rerum sint quidem quae nemo vitae. Provident
              laudantium velit minima, eos, distinctio amet, ab quasi corrupti
              laboriosam odit est. Neque impedit corporis minus aperiam incidunt
              hic laboriosam aspernatur minima nulla, laudantium, consequatur
              vitae. Delectus, asperiores molestias ipsa sit voluptas officiis
              nulla velit optio excepturi dolores cum similique laudantium et
              illo soluta laboriosam totam reiciendis quam obcaecati vero
              doloribus atque repellendus ratione. Voluptatum reprehenderit
              ipsum error necessitatibus, adipisci facere eos hic illum dolores
              mollitia, dolor, sapiente assumenda corporis vitae recusandae
              voluptates quisquam ipsa culpa.
            </p>
            <button className={styles.goBackBtn} onClick={() => navigate(-1)}>
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

export default SingleAnimal;
