import Card from "../components/Card";

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
  return (
    <>
      <h1>Animals</h1>
      <div>
        <input type="text" placeholder="Type" onChange={searchHandler} />
      </div>

      <ul className="cards">
        {" "}
        {filteredAnimals.length !== 0 ? (
          filteredAnimals.map((animal) => (
            <Card
              {...animal}
              key={animal.name}
              click={() => removeFunction(animal.name)}
              addLikes={() => likeHandler(animal.name, "add")}
              removeLikes={() => likeHandler(animal.name, "remove")}
            />
          ))
        ) : (
          <ul>
            Ups, there is no such a creature in our collection. Try again.
          </ul>
        )}
      </ul>
    </>
  );
}

export default Animals;
