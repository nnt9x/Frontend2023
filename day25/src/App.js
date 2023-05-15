import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { TodoList } from "./pages/todo";
import { UpdateTodo } from "./pages/todo/update_todo";
import { CreateTodo } from "./pages/todo/create_todo";

function App() {
	return (
		<BrowserRouter>
			<div className="App container">
        {/* MENU DIEU HUONG */}
				<nav className="navbar navbar-expand-lg bg-light">
					<div className="container-fluid">
						<span className="navbar-brand">Todo App</span>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNavAltMarkup"
							aria-controls="navbarNavAltMarkup"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarNavAltMarkup">
							<div className="navbar-nav">
								{/* Thay the a > link hoac navink */}
								{/* <a
									className="nav-link active"
									aria-current="page"
									href="/">
									Danh sách công việc
								</a> */}

								<NavLink to="/" className="nav-link">
									Danh sách công việc
								</NavLink>

								<NavLink className="nav-link" to="/create">
									Thêm công việc
								</NavLink>

								<NavLink className="nav-link" to="/update">
									Cập nhật công việc
								</NavLink>
							</div>
						</div>
					</div>
				</nav>
         {/* MENU DIEU HUONG */}

         {/* Noi dung hien thi dong */}
          <Routes>
            <Route extact path="/" element={<TodoList/>} />
            <Route extact path="/create" element={<CreateTodo />} />
            <Route extact path="/update" element={<UpdateTodo />} />
            <Route path="*" element={<p> Error 404</p>} />
          </Routes>

			</div>
    
		</BrowserRouter>
	);
}

export default App;
