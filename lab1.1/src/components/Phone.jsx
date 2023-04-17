import "./Phone.css";

/**
 * Component Phone
 * @param {string} image - đường link hình ảnh
 * @param {string} name - tên sản phẩm
 * @param {number} screenSize - kích thước màn hình
 * @param {string} resolution - độ phân giải HD, FullHD...
 * @param {number} price - giá sản phẩm
 * @returns 
 */
function Phone(props){
    return (
        <div className="phone">
            <img className="myImg" src="" alt=""/>
            <img className="phone-image" src={props.image} alt="" />
            <br />
            <p className="phone-name">{props.name}</p>
            <span className="phone-screen">{props.screenSize}</span>
            <span className="phone-resolution">{props.resolution}</span>
            <p className="phone-price">{props.price}</p>
        </div>
    )
}
export {Phone};
