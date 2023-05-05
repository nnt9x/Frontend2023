import './App.css';
import data from './animals.json';
import { Animal } from './components/Animal';

function App() {
  // Đọc dữ liệu từ file JSON
  const animals = data.animals;
  // Sử dụng hàm map -> biến đổi dữ liệu -> JSX (component)
  const listAnimals = animals.map((animal) => <Animal key={animal.id} name={animal.name} src={animal.src}/>)

  return (
    <div className="container">
      {/* Render ra dc 1 list -> phu thuoc vao so luong du lieu dang co */}
      {listAnimals}
    </div>
  );
}

export default App;
