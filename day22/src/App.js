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
	const animals = data.animals;
	// Sử dụng hàm map -> biến đổi dữ liệu -> JSX (component)
	const listAnimals = animals.map((animal) => (
		<Animal
			callBackApp={selectAnimal}
			key={animal.id}
			name={animal.name}
			src={animal.src}
		/>
	));

	return (
		<div className="container">
			<p className="display-1">Tên con vật được chọn - {name}</p>
			{/* Render ra dc 1 list -> phu thuoc vao so luong du lieu dang co */}
			{listAnimals}
		</div>
	);
}

export default App;
