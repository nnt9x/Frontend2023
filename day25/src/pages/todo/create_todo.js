// Tạo công việc

import { useState } from "react";
import { Todo } from "../../components/Todo";

export function CreateTodo() {
	const [todos, setTodos] = useState([]);

	const [inputTodo, setInputTodo] = useState("");
	const [inputCompleted, setInputCompleted] = useState(false);
	const [inputUserId, setInputUserId] = useState(5);

	let viewTodos;

	if (todos.length === 0) {
		viewTodos = <p>Danh sách công việc rỗng</p>;
	} else {
		viewTodos = todos.map((item, index) => (
			<li key={index}>
				<Todo todo={item.todo} completed={item.completed} />
			</li>
		));
	}

	function handleSubmitForm(e) {
		e.preventDefault();
		// Gửi dữ liệu lên server
		fetch("https://dummyjson.com/todos/add", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				todo: inputTodo,
				completed: inputCompleted,
				userId: inputUserId,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				let newTodo = [...todos];
				newTodo.push(data);
				setTodos(newTodo);
                console.log(newTodo);
			})
			.catch((err) => {
				alert("Co loi xay ra");
			});
	}
	return (
		<div>
			<p className="display-1">Tạo công việc</p>

			<form onSubmit={handleSubmitForm}>
				<input
					value={inputTodo}
					onChange={(e) => setInputTodo(e.target.value)}
					className="form-control"
					type="text"
					placeholder="Nhập công việc"
				/>
				<br />
				<select
					onChange={(e) => setInputCompleted(e.target.value)}
					defaultValue={inputCompleted}
					className="form-select">
					<option value={true}>Đã hoàn thành</option>
					<option value={false}>
						Chưa hoàn thành
					</option>
				</select>
				<br />
				<input
					onChange={(e) => setInputUserId(e.target.value)}
					value={inputUserId}
					className="form-control"
					type="number"
					placeholder="ID người tạo"
				/>
				<br />
				<button className="btn btn-primary">Tạo công việc</button>
			</form>
			<ol>{viewTodos}</ol>
		</div>
	);
}
