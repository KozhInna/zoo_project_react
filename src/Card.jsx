const Card = ({ name, likes, click }) => {
  return (
    <li className="animalCard">
      {" "}
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

        <button>-</button>
        <span className="material-symbols-outlined">favorite</span>
        <span>{likes}</span>
        <span className="material-symbols-outlined">heart_broken</span>
        <button>+</button>
      </div>
    </li>
  );
};

export default Card;
