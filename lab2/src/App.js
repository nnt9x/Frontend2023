import "./App.css";
import { Animal } from "./components/Animal";
import data from "./data.json";

function App() {

  const listAnimal = data.animals.map((animal, index) => 
      <div className="col" key={index}>
        <Animal name={animal.name} image={animal.image} > {animal.description} </Animal>
      </div>
  )

  return (
    <div className="App container">
      <div className="row">
        {/* Lấy nguồn từ file, internet -> tạo động view */}
        {listAnimal}
      </div>
    </div>
  );
}

export default App;
