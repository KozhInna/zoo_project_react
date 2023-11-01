/* import { useState } from "react"; */
import Footer from "./Footer";
import Header from "./Header";
import Card from "./Card";
import "./App.css";

function App() {
  /*   const [animals, setAnimals] = useState([{}, {}]);
   */
  return (
    <>
      <div>
        <Header />
        <main>
          <h1>Animals</h1>
          <div className="cards">
            {" "}
            <Card />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
