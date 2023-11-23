import { useState } from "react";
import { animals, birds } from "./animalsList"; //named export
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./routes/Home";
import Root from "./routes/Root";
import Birds from "./routes/Birds";
import Animals from "./routes/Animals";
import About from "./routes/About";
import SingleAnimal from "./routes/SingleAnimal";
import SingleBird from "./routes/SingleBird";
/* import CategoryPage from "./routes/CategoryPage"; */

function App() {
  const [animalList, setAnimals] = useState(animals);
  const [birdList, setBirds] = useState(birds);
  const [search, setSearch] = useState("");

  function removeFunction(name) {
    const updatedArray = birdList.filter((bird) => bird.name !== name);
    const updatedArray2 = animalList.filter((animal) => animal.name !== name);
    setBirds(updatedArray);
    setAnimals(updatedArray2);
  }

  function searchHandler(e) {
    setSearch(e.target.value.toLowerCase());
  }
  function resetSearch() {
    setSearch("");
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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root resetSearch={resetSearch} />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/animals/:name",
          element: <SingleAnimal animalList={animalList} />,
        },
        { path: "/birds/:name", element: <SingleBird birdList={birdList} /> },

        {
          path: "/birds",
          element: (
            <Birds
              removeFunction={removeFunction}
              birdList={birdList}
              search={search}
              likeHandler={likeHandler}
              searchHandler={searchHandler}
            />
          ),
        },
        {
          path: "/animals",
          element: (
            <Animals
              removeFunction={removeFunction}
              animalList={animalList}
              search={search}
              likeHandler={likeHandler}
              searchHandler={searchHandler}
            />
          ),
        },
        { path: "/about", element: <About /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      {/*       <div className="container">
        <Header onchange={searchHandler} />
        <main>
          <h1>Animals</h1>

          <ul className="cards">
            {" "}
            {filteredBirds.length !== 0 ? (
              filteredBirds.map((bird) => (
                <Card
                  {...bird}
                  key={bird.name}
                  click={() => removeFunction(bird.name)}
                  addLikes={() => likeHandler(bird.name, "add")}
                  removeLikes={() => likeHandler(bird.name, "remove")}
                />
              ))
            ) : (
              <ul style={{ gridTemplateColumns: "1" }}>
                Ups, there is no such a creature in our collection. Try again.
              </ul>
            )}
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
      </div> */}
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
