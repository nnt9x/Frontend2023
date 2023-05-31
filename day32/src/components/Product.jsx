import { Button, Card } from "react-bootstrap";
import { Card as MyCard } from "./Card";
import Swal from "sweetalert2";

export function Product(props) {

    function showAlert(){
        Swal.fire({
            title: 'Bạn có muốn thêm sản phẩm này vào giỏ hàng không?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Thêm`,
            denyButtonText: `Không`,
            
        })
    }

	return (
		<div>
			<MyCard />
			<Card style={{ width: "18rem" }}>
				<Card.Img onClick={()=>alert(`Click ${props.name}` )} variant="top" src={props.image} />
				<Card.Body>
					<Card.Title>{props.name}</Card.Title>
					<Card.Text>{props.children}</Card.Text>
					<Button onClick={showAlert} variant="primary">Thêm vào giỏ hàng</Button>
				</Card.Body>
			</Card>
		</div>
	);
}
