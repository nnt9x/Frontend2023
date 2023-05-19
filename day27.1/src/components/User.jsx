import "./User.css";

export function User(props) {

    function getTodo(id){
        const url = "https://dummyjson.com/users/"+id+"/todos";
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => { console.log(err) });
    }

	return (
		<div className="user" onClick={()=>getTodo(props.id)}>
			<p>Mã người dùng {props.id}</p>
			<p>Tên người dùng {props.fullName}</p>
			<p>Tuổi: {props.age}</p>
			<p>Giới tính: {props.gender === "male" ? "nam" : "nữ"} </p>
            <p>Email: {props.email}</p>
            <p>
                <img className="img-fluid" src={props.image} alt="avatar" />
            </p>
		</div>
	);
}

User.defaultProps = {
    id: 0,
    fullName: "Nguyễn Văn A",
    age: 18,
    gender: "male",
    email: "abc@gmail.com",
    image: "https://picsum.photos/200/300",
}
