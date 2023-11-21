import { useParams } from "react-router-dom";

const SingleAnimal = ({ animalList, birdList }) => {
  const params = useParams();

  const data = animalList.find((el) => el.name === params.name);

  /*   const data2 = birdList.find((el) => el.name === params.name); */
  console.log(data);
  return <h2>{data.name}</h2>;

  /*  return <h2>{data2.name}</h2>; */
};

export default SingleAnimal;
