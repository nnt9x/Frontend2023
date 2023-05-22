import { ProductItem } from "./ProductItem";

export function ProductList(props) {
	const products = props.data;

	return (
		<ul>
			{products.map((product) => (
				<ProductItem
					key={product.id}
					id={product.id}
					title={product.title}
				/>
			))}
		</ul>
	);
}

ProductList.defaultProps = {
    data: [],
}
