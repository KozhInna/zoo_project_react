import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import Card from "./Card";

//named export
import { animals, birds } from "./animalsList";

function App() {
  const [animalList, setAnimals] = useState(animals);
  const [birdList, setBirds] = useState(birds);
  const [search, setSearch] = useState("");
  /* const [hearts, setHearts] = useState(birds.likes); */
  /*   const [likesM, setLikes] = useState(animals.likes); */

  function removeFunction(name) {
    const updatedArray = birdList.filter((bird) => bird.name !== name);
    const updatedArray2 = animalList.filter((animal) => animal.name !== name);
    setBirds(updatedArray);
    setAnimals(updatedArray2);
  }

  function searchHandler(e) {
    setSearch(e.target.value.toLowerCase());
  }

  function likeHandler(name, action) {
    const updatedArr = birdList.map((bird) => {
      if (bird.name === name) {
        if (action === "add") {
          return { ...bird, likes: bird.likes + 1 };
        }
        if (action === "remove") {
          return { ...bird, likes: bird.likes - 1 };
        }
      } else {
        return bird;
      }
    });
    setBirds(updatedArr);

    const updatedArr2 = animalList.map((animal) => {
      if (animal.name === name) {
        if (action === "add") {
          return { ...animal, likes: animal.likes + 1 };
        }
        if (action === "remove") {
          return { ...animal, likes: animal.likes - 1 };
        }
      } else {
        return animal;
      }
    });
    setAnimals(updatedArr2);
  }
  return (
    <>
      <div className="container">
        <Header onchange={searchHandler} />
        <main>
          <h1>Animals</h1>

          <ul className="cards">
            {" "}
            {birdList
              .filter((bird) => bird.name.toLowerCase().includes(search))
              .map((bird) => (
                <Card
                  {...bird}
                  key={bird.name}
                  click={() => removeFunction(bird.name)}
                  addLikes={() => likeHandler(bird.name, "add")}
                  removeLikes={() => likeHandler(bird.name, "remove")}
                />
              ))}
            {animalList
              .filter((animal) => animal.name.toLowerCase().includes(search))
              .map((animal) => (
                <Card
                  {...animal}
                  key={animal.name}
                  click={() => removeFunction(animal.name)}
                  addLikes={() => likeHandler(animal.name, "add")}
                  removeLikes={() => likeHandler(animal.name, "remove")}
                />
              ))}
          </ul>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
/* function likeHandler(name, action) {
  const updatedArray = birds.map((bird) => {
    if (animal.name === name) {
      if (action === "add") {
        return { ...animal, likes: animal.likes + 1 };
      }
      if (action === "remove") {
        return { ...animal, likes: animal.likes - 1 };
      }
    } else {
      return animal;
    }
  }); */
