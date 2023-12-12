import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { animals, birds, fishes, reptiles } from "./animalsList";
import Home from "./routes/Home";
import Root from "./routes/Root";
import About from "./routes/About";
import PageNotFound from "./routes/PageNotFound";
import CategoryPage from "./routes/CategoryPage";
import SinglePage from "./routes/SinglePage";

function App() {
  const [zoo, setZoo] = useState({
    animals: animals,
    birds: birds,
    fishes: fishes,
    reptiles: reptiles,
  });
  const [search, setSearch] = useState("");

  function removeFunction(name, category) {
    const updatedArray = zoo[category].filter((el) => el.name !== name);
    setZoo({ ...zoo, [category]: updatedArray });
  }

  function searchHandler(e) {
    setSearch(e.target.value.toLowerCase());
  }
  function resetSearch() {
    setSearch("");
    console.log("reset");
  }

  function likeHandler(name, action, category) {
    const updatedArr = zoo[category].map((el) => {
      if (el.name === name) {
        if (action === "add") {
          return { ...el, likes: el.likes + 1 };
        }
        if (action === "remove") {
          return { ...el, likes: el.likes - 1 };
        }
      } else {
        return el;
      }
    });
    setZoo({ ...zoo, [category]: updatedArr });
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root resetSearch={resetSearch} />,
      errorElement: <PageNotFound />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/:category",
          element: (
            <CategoryPage
              {...zoo}
              removeFunction={removeFunction}
              search={search}
              likeHandler={likeHandler}
              searchHandler={searchHandler}
            />
          ),
        },
        { path: ":category/:name", element: <SinglePage {...zoo} /> },

        { path: "/about", element: <About /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
