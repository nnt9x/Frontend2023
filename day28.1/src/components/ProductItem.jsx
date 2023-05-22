import { useContext } from "react";
import "./ProductItem.css";
import { AppContext } from "../context/AppContext";
/**
 * ProductItem component
 * @param {string} props.title Tên sản phẩm
 * @param {id} props.id Mã sản phẩm
 */
export function ProductItem(props) {

    const {getProduct} = useContext(AppContext);

    function handleClick(){
        getProduct(props.id);
    }
	return (
		<div className="product-item" onClick={handleClick}>
			<p>
				{props.title} - {props.id}
			</p>
		</div>
	);
}

ProductItem.defaultProps = {
	title: "Product",
	id: 0,
};
