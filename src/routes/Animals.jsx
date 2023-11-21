import Card from "../components/Card";
import styles from "./Animals.module.css";
import { useState } from "react";

function Animals({
  search,
  removeFunction,
  likeHandler,
  animalList,
  searchHandler,
}) {
  const filteredAnimals = animalList.filter((animal) =>
    animal.name.toLowerCase().includes(search)
  );
  const [quantity, setQuantity] = useState(5);
  return (
    <>
      <div className={styles.animalsContainer}>
        <div className={styles.inputContainer}>
          <h1>Animals</h1>
          <div>
            <label htmlFor="numbreOfCards">
              Selet how many cards of animals to display
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
          {filteredAnimals.length !== 0 ? (
            filteredAnimals.map((animal) => (
              <Card
                {...animal}
                key={animal.name}
                click={() => removeFunction(animal.name)}
                addLikes={() => likeHandler(animal.name, "add")}
                removeLikes={() => likeHandler(animal.name, "remove")}
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

export default Animals;
