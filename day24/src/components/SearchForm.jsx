import { useState } from "react";

export function SearchForm(props) {

    const [keyword, setKeyword] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        props.onHandleSearch(keyword);
    }

	return (
		<div className="container">
			<form onSubmit={handleSubmit}>
				<div className="input-group mb-3">
					<input
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
						type="text"
						className="form-control"
						placeholder="Nhập từ khoá cần tìm kiếm..."
					/>
					<button className="btn btn-success" type="submit">
						Tìm kiếm
					</button>
				</div>
			</form>
		</div>
	);
}
