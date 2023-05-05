import { useState } from "react";
import "./App.css";
import data from "./animals.json";
import { Animal } from "./components/Animal";

function App() {
	const [name, setName] = useState("Chưa chọn con vật");

	function selectAnimal(newName) {
		setName(newName);
	}

	// Đọc dữ liệu từ file JSON
	const [animals, selectAnimals] = useState(data.animals);

	// Sử dụng hàm map -> biến đổi dữ liệu -> JSX (component)

  function removeItem(id){
    alert(id);
    // Tao ra 1 danh sanh animal mới -> ko chứa animal có id = id truyền vào
    const newAnimals = animals.filter((item)=> item.id !== id);
    // Cập nhật lại state
    selectAnimals(newAnimals);
  }

	const listAnimals = animals.map((animal) => (
		<Animal
      id = {animal.id}
			callBackApp={selectAnimal}
      removeItem={removeItem}
			key={animal.id}
			name={animal.name}
			src={animal.src}
		/>
	));

	return (
		<div className="container">
			<p className="display-4">Tên con vật được chọn - {name}</p>
			{/* Render ra dc 1 list -> phu thuoc vao so luong du lieu dang co */}
			{listAnimals}
		</div>
	);
}

export default App;
