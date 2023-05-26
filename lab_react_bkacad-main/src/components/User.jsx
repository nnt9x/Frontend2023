import { NavLink } from "react-router-dom";
import "./User.css";

export function User({ user }) {
	return (
		<div className="user">
			<p>Fullname: {`${user.firstName} ${user.lastName}`} </p>
			<p>Gender: {user.gender}</p>
			<NavLink to={`/user/${user.id}`}>
				<img
					className="img-fluid rounded-circle"
					alt={user.firstName}
					src={user.image}
				/>
			</NavLink>
		</div>
	);
}

User.defaultProps = {
	user: {
		id: 0,
		firstName: "Nguyễn",
		lastName: "Văn A",
		gender: "Nam",
		image: "https://robohash.org/hicveldicta.png",
	},
};
