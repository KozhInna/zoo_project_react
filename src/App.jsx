/* import { useState } from "react"; */
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import Card from "./Card";
import "./App.css";
//named export
import { animals, birds } from "./animalsList";

function App() {
  const [animalList, setAnimals] = useState(animals);
  const [birdList, setBirds] = useState(birds);
  /*   const [animals, setAnimals] = useState([{}, {}]);
   */

  function removeFunction(name) {
    const updatedArray = birds.filter((bird) => bird.name !== name);
    setBirds(updatedArray);
  }

  return (
    <>
      <div className="container">
        <Header />
        <main>
          <h1>Animals</h1>
          <ul className="cards">
            {" "}
            {birdList.map((bird) => (
              <Card
                {...bird}
                key={bird.name}
                click={() => removeFunction(bird.name)}
              />
            ))}
          </ul>
          <ul className="cards">
            {" "}
            {animalList.map((animal) => (
              <Card
                {...animal}
                key={animal.name}
                click={() => removeFunction(animal.name)}
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
