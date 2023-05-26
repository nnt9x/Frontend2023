import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppContext } from "./context/AppContext";
import { Header } from "./layout/Header";
import { AboutPage } from "./pages/AboutPage";
import { UserInfoPage } from "./pages/UserInfoPage";
import { UserPage } from "./pages/UserPage";

function App() {
	const [users, setUsers] = useState([]);
	const limit = 12;

	useEffect(() => {
		fetch(`https://dummyjson.com/users?limit=${limit}`)
			.then((response) => response.json())
			.then((data) => {
				const newUser = data.users;
				const sortedUser = newUser.sort((a, b) => {
					if(a.firstName < b.firstName) { return -1; }
					else if(a.firstName > b.firstName) { return 1; }
					else { return 0; }
				});
				setUsers(sortedUser);
			})
			.catch((error) => console.log(error));
	}, []);

	function searchUser(kw){
		fetch(`https://dummyjson.com/users/search?q=${kw}&limit=${limit}`)
		.then((response) => response.json())
		.then((data) => setUsers(data.users))
		.catch((error) => console.log(error));
	}

	return (
		<BrowserRouter>
			<AppContext.Provider value={{ users, searchUser }}>
				<div className="app container">
					<Header />
					{/* Content */}
					<Routes>
						<Route exact path="/" element={<UserPage />} />
						<Route exact path="/user" element={<UserPage />} />
						<Route path="/user/:id" element={<UserInfoPage />} />
						<Route exact path="/about" element={<AboutPage />} />
						<Route path="*" element={<h1>Not Found</h1>} />
					</Routes>
					{/* Content */}
				</div>
			</AppContext.Provider>
		</BrowserRouter>
	);
}

export default App;
