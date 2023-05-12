import { useState } from "react";
import "./App.css";
import { City } from "./components/City";
import { MyForm } from "./components/MyForm";

function App() {
	const [cityWeather, setCityWeather] = useState({
			name: "Hà Nội - mặc định",
			src: "https://placeholder.pics/svg/300",
			temp: 0,
			hump: 0,
			desc: "Trời quang đãng",
	});

	function getWeather(city) {
		// tao url
		const api_key = "928133397391e6af373468b74849e7ab";
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric&lang=vi`;
		// call api
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
        // Tao state mơi -> render lai
        setCityWeather({
          name: data.name,
          src: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
          temp: data.main.temp,
          hump: data.main.humidity,
          desc: data.weather[0].description,
        });

      })
			.catch((error) => {
				alert("Không có dữ liệu");
			});
	}
	return (
		<div className="container">
			<h1 className="text-center">Open weather</h1>

			<MyForm getCity={getWeather} />
			<br />
			<br />
			<City data={cityWeather} />
		</div>
	);
}

export default App;
