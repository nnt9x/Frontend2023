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

	const [page, setPage] = useState(1);

	const limit = 45;

	const [total_page, setTotalPage] = useState(-1);

	let skip = (page - 1) * limit;

	useEffect(() => {
		fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)
			.then((response) => response.json())
			.then((data) => {
				const newUser = data.users;
				const sortedUser = newUser.sort((a, b) => {
					if (a.firstName < b.firstName) {
						return -1;
					} else if (a.firstName > b.firstName) {
						return 1;
					} else {
						return 0;
					}
				});
				setUsers(sortedUser);

				setTotalPage(Math.ceil(parseFloat(data.total) / limit));
			})
			.catch((error) => console.log(error));
	}, [skip]);

	function searchUser(kw) {
		fetch(`https://dummyjson.com/users/search?q=${kw}&limit=${limit}`)
			.then((response) => response.json())
			.then((data) => setUsers(data.users))
			.catch((error) => console.log(error));
	}

	function nextPreviousPage(c) {
		if (c === "next") {
			const newPage = page + 1;
			// Page co vuot qua total page hay ko?
			if (newPage <= total_page) {
				setPage(newPage);
			}
		} else if (c === "previous") {
			const newPage = page - 1;
			// Page toi thieu bang 1
			if (newPage >= 1) {
				setPage(newPage);
			}
		}
	}

	return (
		<BrowserRouter>
			<AppContext.Provider
				value={{ users, searchUser, nextPreviousPage, page }}>
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
