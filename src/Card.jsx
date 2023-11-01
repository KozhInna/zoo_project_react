const Card = (props) => {
  return (
    <div className="animalCard">
      {" "}
      <img
        className="animalImg"
        src="https://source.unsplash.com/random/"
        alt=""
      />
      <h2>Animal name</h2>
      <button>close</button>
      <button>-</button>
      <span className="material-symbols-outlined">favorite</span>
      <span className="material-symbols-outlined">heart_broken</span>
      <button>+</button>
    </div>
  );
};

export default Card;
