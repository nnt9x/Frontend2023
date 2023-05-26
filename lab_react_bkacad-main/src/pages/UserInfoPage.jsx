import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function UserInfoPage() {
	const { id = -1 } = useParams();
	// Da co id roi => goi api lay thong tin user

    const [maidenName, setMaidenName] = useState("");

	useEffect(() => {
		if (id !== -1) {
			fetch(`https://dummyjson.com/users/${id}`)
				.then((res) => res.json())
				.then((data) => {
                    setMaidenName(data.maidenName);
                })
				.catch((err) => {
					alert(err.message);
				});
		}
	}, [id]);

	return (
		<div className="user-page">
			<p>Người dùng {id} </p>
            <p>{maidenName}</p>
		</div>
	);
}
