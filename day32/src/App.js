import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { Product } from "./components/Product";

function App() {
	return (
		<Container>
			<Row>
				<Col>
					<Product
						name="Iphone 14"
						image="https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/t/_/t_m_18.png">
						iPhone 14 Pro Max (128GB) | Ưu đãi 7 triệu, nhiều hàng
						giá tốt
					</Product>
				</Col>
				<Col>
					<Product
						name="Iphone 14"
						image="https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/t/_/t_m_18.png">
						iPhone 14 Pro Max (128GB) | Ưu đãi 7 triệu, nhiều hàng
						giá tốt
					</Product>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
