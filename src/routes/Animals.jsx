import Card from "../components/Card";
import styles from "./Animals.module.css";
import { useState } from "react";

<<<<<<< Updated upstream:src/routes/Animals.jsx
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
=======
function CategoryPage(props) {
  /* console.log("props", props); */
  const urlParams = useParams();
  /*  console.log("url", urlParams); */
  const category = props[urlParams.category];
  /*  console.log("category", category); */

  const filteredArray = category.filter((el) =>
    el.name.toLowerCase().includes(props.search)
  );

  /* console.log("filteredArray", filteredArray); */
>>>>>>> Stashed changes:src/routes/CategoryPage.jsx
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
<<<<<<< Updated upstream:src/routes/Animals.jsx
                {...animal}
                key={animal.name}
                click={() => removeFunction(animal.name)}
                addLikes={() => likeHandler(animal.name, "add")}
                removeLikes={() => likeHandler(animal.name, "remove")}
=======
                {...el}
                key={el.name}
                category={urlParams.category}
                click={() => props.removeFunction(el.name, urlParams.category)}
                addLikes={() =>
                  props.likeHandler(el.name, "add", urlParams.category)
                }
                removeLikes={() =>
                  props.likeHandler(el.name, "remove", urlParams.category)
                }
>>>>>>> Stashed changes:src/routes/CategoryPage.jsx
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
