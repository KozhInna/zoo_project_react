import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ name, likes, click, addLikes, removeLikes }) => {
  return (
    <li className={styles.card}>
      <div>
        <img
          className={styles.image}
          src={`https://source.unsplash.com/400x400/?${name}`}
          alt={name}
        />
      </div>

      <div className={styles.details}>
        <h2>{name.charAt(0).toLowerCase() + name.slice(1)}</h2>
        <span
          id={styles.closeCard}
          onClick={click}
          className="material-symbols-outlined"
        >
          close
        </span>
        <div className={styles.likesInfoBox}>
          <button onClick={removeLikes}>
            <span className="material-symbols-outlined">heart_minus</span>
          </button>

          <div className={styles.likes_container}>
            <span className="likes">{likes}</span>
            <span className="material-symbols-outlined hearts">
              {likes >= 0 ? "favorite" : "heart_broken"}
            </span>
          </div>

          <button onClick={addLikes}>
            <span className="material-symbols-outlined">heart_plus</span>
          </button>
        </div>
        <Link to={`${name}`} className={styles.seeMoreLink}>
          See more
        </Link>
      </div>
    </li>
  );
};

export default Card;
