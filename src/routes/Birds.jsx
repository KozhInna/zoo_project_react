import { useState } from "react";
import Card from "../components/Card";
import styles from "./Birds.module.css";

function Birds({
  search,
  removeFunction,
  likeHandler,
  birdList,
  searchHandler,
}) {
  const filteredBirds = birdList.filter((bird) =>
    bird.name.toLowerCase().includes(search)
  );
  const [quantity, setQuantity] = useState(5);

  return (
    <>
      <div className={styles.birdsContainer}>
        <div className={styles.inputContainer}>
          <h1>Birds</h1>
          <div>
            <label htmlFor="numbreOfCards">
              Selet how many cards of birds to display
            </label>
            <select
              id="numbreOfCards"
              className={styles.optionsWindow}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <input type="text" placeholder="Search" onChange={searchHandler} />
        </div>

        <ul
          className="cards"
          style={{ gridTemplateColumns: `repeat(${quantity}, 1fr)` }}
        >
          {" "}
          {filteredBirds.length !== 0 ? (
            filteredBirds.map((bird) => (
              <Card
                {...bird}
                key={bird.name}
                click={() => removeFunction(bird.name)}
                addLikes={() => likeHandler(bird.name, "add")}
                removeLikes={() => likeHandler(bird.name, "remove")}
                quantity={quantity}
              />
            ))
          ) : (
            <ul>
              Ups, not found{" "}
              <span className="material-symbols-outlined">
                sentiment_dissatisfied
              </span>
            </ul>
          )}
        </ul>
      </div>
    </>
  );
}

export default Birds;
