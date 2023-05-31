import { Button, Rating } from "@mui/material";
import "./App.css";
import { useState } from "react";
import { ZoomImage } from "./component/ZoomImage";

function App() {
	const [value, setValue] = useState(1);

	return (
		<div className="App">
			<h1>Material UI</h1>
			<Button variant="contained" color="primary">
				Hello world
			</Button>
      <br/>
			{/* Rating bar */}
      <p>Điểm đánh giá: {value}</p>
			<Rating
				name="Đánh giá sản phẩm"
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			/>
      <br/>
      <ZoomImage src="https://cdn.sanity.io/images/0vv8moc6/dvm360/0efdfab43ab36c3432ced2ceb2d52daae6a93c96-500x500.jpg?fit=crop&auto=format"/>

		</div>
	);
}

export default App;
