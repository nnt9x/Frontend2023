import { useEffect, useState } from "react";
import "./App.css";
import { ProductList } from "./components/ProductList";
import { ProductDetail } from "./components/ProductDetail";
import { AppContext } from "./context/AppContext";

function App() {
	// use Effect lay du lieu
	const [products, setProducts] = useState([]);
  const [phone, setPhone] = useState({});


	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((data) => {
				// Set du lieu products
				setProducts(data.products);
			})
			.catch((err) => {
				alert(err.message);
			});
	}, []);

	function getProduct(id) {
		// alert("From Child: " + id);
		//load product ve
		fetch("https://dummyjson.com/products/" + id)
			.then((res) => res.json())
			.then((data) => {
        setPhone(
          {
            id: data.id,
            title: data.title,
            description: data.description,
            price: data.price,
            img: data.images[0],
          }
        )
      })
			.catch((err) => {
				alert(err.message);
			});
	}

	return (
		<div className="App container">
			<AppContext.Provider value={{ getProduct }}>
				<h1 className="display-1 text-center">Product</h1>
				<div className="row">
					<div className="col text-center">
						<p className="display-4">Product List</p>
						<ProductList data={products} />
					</div>
					<div className="col text-center">
						<p className="display-4">Product details</p>
						<ProductDetail phone={phone}/>
					</div>
				</div>
			</AppContext.Provider>
		</div>
	);
}

export default App;
