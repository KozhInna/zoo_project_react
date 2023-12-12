import { useParams } from "react-router-dom";
import styles from "./CategoryPage.module.css";
import Card from "../components/Card";
import { useState } from "react";
import BackToTopButton from "../components/BackToTopButton";

function CategoryPage(props) {
  const urlParams = useParams();

  const category = props[urlParams.category];

  const filteredArray = category.filter((el) =>
    el.name.toLowerCase().includes(props.search)
  );

  const [quantity, setQuantity] = useState(5);
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.inputContainer}>
        <span>
          <span className={styles.numberOfCards}>{category.length} </span>
          creatures
        </span>
        <div>
          <label htmlFor="numbreOfCards">
            How many photoes of{" "}
            {urlParams.category.charAt(0).toUpperCase() +
              urlParams.category.slice(1)}{" "}
            to show in one line (2-5)
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
          value={props.search}
        />
      </div>

      <ul
        className="cards"
        style={{ gridTemplateColumns: `repeat(${quantity}, 1fr)` }}
      >
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
      <BackToTopButton />
    </div>
  );
}

export default CategoryPage;
