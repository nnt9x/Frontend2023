import { useEffect, useState } from "react";
import "./App.css";
import { Quote } from "./components/Quote";

function App() {
	const [quotes, setQuotes] = useState([]);
  const [keyword, setKeyword] = useState(''); 


	useEffect(() => {
		fetch("https://dummyjson.com/quotes?limit=100")
			.then((response) => response.json())
			.then((data) => {
				const newQuotes = data.quotes;
				setQuotes(newQuotes);
			})
			.catch((error) => console.log(error));
	}, []);

	let viewQuotes;
	if (quotes.length === 0) {
		viewQuotes = <div className="alert alert-info">Loading...</div>;
	} else {
		viewQuotes = quotes.map((item, index) => {
			return (
				<Quote key={index} quote={item.quote} author={item.author} />
			);
		});
	}

  function handleFormSubmit(e){
    e.preventDefault();
   
    // Request -> lay list moi nhat
    // Loc list theo keyword
    // Hien thi list moi
    fetch("https://dummyjson.com/quotes?limit=100")
			.then((response) => response.json())
			.then((data) => {
				let newQuotes = data.quotes;
        newQuotes = newQuotes.filter(
          (item) => item.quote.includes(keyword) || item.author.includes(keyword)
        );
        setQuotes(newQuotes);

			})
			.catch((error) => console.log(error));
    
  }

	return (
		<div className="App container">
      <h1 className="display-1">Quotes</h1>
			<form onSubmit={handleFormSubmit}>
				<div className="input-group mb-3">
					<input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
						type="text"
						class="form-control"
						placeholder="Keywords content, author..."
					/>
					<button className="btn btn-success" type="submit">
						Find
					</button>
				</div>
			</form>
      <br/>
			{viewQuotes}
		</div>
	);
}

export default App;
