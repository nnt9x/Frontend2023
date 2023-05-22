export function ProductDetail({ phone }) {
	const { id, title, price, img, description } = phone;
	return (
		<div className="product-detail">
			<p>
				{title} - {id}
			</p>
			<p>{price}</p>
			<img src={img} alt="" className="img-fluid" />
			<p>{description}</p>
		</div>
	);
}
