import { useParams } from "react-router-dom";
import styles from "./CategoryPage.module.css";

/* import styles from "./Animals.module.css"; */
import Card from "../components/Card";
import { useState } from "react";

function CategoryPage(props) {
  console.log("props", props);
  const urlParams = useParams();
  console.log("url", urlParams);
  const category = props[urlParams.category];
  console.log("category", category);

  const filteredArray = category.filter((el) =>
    el.name.toLowerCase().includes(props.search)
  );

  console.log("filteredArray", filteredArray);
  const [quantity, setQuantity] = useState(5);
  return (
    <>
      <div className={styles.cardsContainer}>
        <div className={styles.inputContainer}>
          <h1>{category.name}</h1>
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
          <input
            type="text"
            placeholder="Search"
            onChange={props.searchHandler}
          />
        </div>

        <ul
          className="cards"
          style={{ gridTemplateColumns: `repeat(${quantity}, 1fr)` }}
        >
          {" "}
          {filteredArray.length !== 0 ? (
            filteredArray.map((el) => (
              <Card
                {...el}
                key={el.name}
                click={() => props.removeFunction(el.name, urlParams.category)}
                addLikes={() =>
                  props.likeHandler(el.name, "add", urlParams.category)
                }
                removeLikes={() =>
                  props.likeHandler(el.name, "remove", urlParams.category)
                }
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

export default CategoryPage;
