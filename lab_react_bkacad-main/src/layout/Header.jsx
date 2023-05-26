import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export function Header(props) {

	const [input, setInput] = useState("");

	const {searchUser} = useContext(AppContext);

	function handleSubmit(e) {
		// Ngan ko cho form => lam reload trang
		e.preventDefault();
		// Gui du lieu input -> App qua context
		searchUser(input);
	}

	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container-fluid">
				<span className="navbar-brand">BKACAD</span>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink className="nav-link" to={"/user"}>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to={"/about"}>
								Abouts
							</NavLink>
						</li>
					</ul>
					<form
						className="d-flex"
						role="search"
						onSubmit={(e) => handleSubmit(e)}>
						<input
							value={input}
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
							onChange={(e)=> setInput(e.target.value)}
						/>
						<button
							className="btn btn-outline-success"
							type="submit">
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
}
