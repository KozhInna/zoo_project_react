import styles from "./Card.module.css";

const Card = ({ name, likes, click, addLikes, removeLikes }) => {
  return (
    <li className="animalCard">
      <img
        className="image"
        src={`https://source.unsplash.com/400x400/?${name}`}
        alt={name}
      />
      <div className="details">
        <h2>{name}</h2>
        <button onClick={click}>
          <span className="material-symbols-outlined close">close</span>
        </button>

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
    </li>
  );
};

export default Card;
