// Đây là component hiển thị danh sách user

import { User } from "./User";

export function ListUser(props) {
	let viewUser;
	if (props.data.length === 0) {
		viewUser = (
			<div className="spinner-border text-danger" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		);
	} else {
		viewUser = props.data.map((user) => (
			<div className="col-3" key={user.id}>
				<User
					id={user.id}
					fullName={user.lastName + " " + user.firstName}
					age={user.age}
					gender={user.gender}
					email={user.email}
					image={user.image}
				/>
			</div>
		));
	}

	return (
		<div>
			<div className="row">{viewUser}</div>
		</div>
	);
}
ListUser.defaultProps = {
	data: [],
};
