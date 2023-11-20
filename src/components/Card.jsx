import styles from "./Card.module.css";

const Card = ({ name, likes, click, addLikes, removeLikes }) => {
  return (
    <li className="animalCard">
      <div>
        <img
          className="image"
          src={`https://source.unsplash.com/400x400/?${name}`}
          alt={name}
        />
      </div>

      <div className="details">
        <h2>{name}</h2>

        <span
          id={styles.closeCard}
          onClick={click}
          className="material-symbols-outlined close"
        >
          close
        </span>
        <div className={styles.likesInfoBox}>
          <button onClick={removeLikes}>
            <span className="material-symbols-outlined">heart_minus</span>
          </button>

          <div className="likes_container">
            <span className="likes">{likes}</span>
            <span className="material-symbols-outlined">
              {likes >= 0 ? "favorite" : "heart_broken"}
            </span>
          </div>

          <button onClick={addLikes}>
            <span className="material-symbols-outlined">heart_plus</span>
          </button>
        </div>
      </div>
    </li>
  );
};

export default Card;
