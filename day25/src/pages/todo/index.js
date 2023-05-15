// Hiển thị danh sách công việc

import { useEffect, useState } from "react";
import { Todo } from "../../components/Todo";

export function TodoList(props) {
	// Lay du lieu tu internet ve?

	// Sau khi lay xong => tra ve todo

	const [todos, setTodos] = useState([]);
    const [countCompleted, setCountCompleted] = useState(0);

	useEffect(() => {
		// Lay du lieu tu DummyJSON ve
		fetch("https://dummyjson.com/todos")
			.then((res) => res.json())
			.then((data) => {
				setTodos(data.todos);
                const count = data.todos.filter((item) => item.completed === true).length;
                setCountCompleted(count);
            })
			.catch((err) => {
				alert("Co loi xay ra");
			});
	}, []);

	let vTodoList;
	if (todos.length === 0) {
		vTodoList = (
			<div className="spinner-border text-danger" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		);
	} else {
		vTodoList = todos.map((item) => (
			<li key={item.id}>
				<Todo todo={item.todo} completed={item.completed} />
			</li>
		));
	}

	return (
		<div>
			<p className="display-1">Danh sách công việc</p>
            <p>Số lượng đã hoàn thành: {countCompleted}</p>
			<ol>{vTodoList}</ol>
		</div>
	);
}
