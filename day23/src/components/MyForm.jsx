import { useState } from "react";

export function MyForm(props) {

    const [city, setCity] = useState();
    function handlingForm(e){
        // Hieeur don gian giup form ko reload khi submit
        e.preventDefault();
        // Gui du lieu ve app
        props.getCity(city);
    }
	return (
		<div className="my-form">
			<form onSubmit={handlingForm}>
				<div className="input-group">
					<input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
						type="text"
						className="form-control"
						placeholder="Nhập tên thành phố"
					/>
					<button className="btn btn-success" type="submit">
						Tìm kiếm
					</button>
				</div>
			</form>
		</div>
	);
}
