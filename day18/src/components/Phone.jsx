/*
1 dien thoai: ten, gia, hinh anh, so luong
Nếu số lượng > 0: hiển thị nút đặt hàng
bằng 0: hiển thị nút liên hệ để đặt hàng
*/

import "./Phone.css";
/**
 * Phone component
 * @param {string} props.name Tên sản phẩm
 * @param {number} props.price Giá sản phẩm
 * @param {string} props.image Link hình ảnh
 * @param {number} props.quantity Số lượng
 */
function Phone(props) {
  // 1000000 -> format 1.000.000 VND
  const mPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.price);

  // Tao dong button
  let vButton;
  if(props.quantity > 0){
    vButton = <button className="btn btn-primary">Đặt hàng</button>;
  }
  else{
    vButton = <button className="btn btn-danger">Liên hệ để đặt hàng</button>
  }
  return (
    <div className="phone">
      <p>{props.name}</p>
      <img src={props.image} className="img-fluid" alt="" />
      <p>{mPrice}</p>
      {vButton}
    </div>
  );
}
export { Phone };
