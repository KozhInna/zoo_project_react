import Card from "../components/Card";

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
  return (
    <>
      <h1>Birds</h1>
      <div>
        <input type="text" placeholder="Type" onChange={searchHandler} />
      </div>

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
          <ul>
            Ups, there is no such a creature in our collection. Try again.
          </ul>
        )}
      </ul>
    </>
  );
}

export default Birds;
