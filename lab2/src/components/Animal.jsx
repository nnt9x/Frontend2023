/**
 * 
 * @param {string} name Tên con vật
 * @param {string} image Link hình ảnh
 * @param {string} props.children Mô tả
 * @returns 
 */
function Animal(props) {
  return (
    <div class="animal">
      <p className="display-4">
        <b>{props.name}</b>
      </p>
      <img src={props.image} className="img-fluid rounded-circle" alt="" />
      <hr />
      <p style={{ textAlign: "justify" }}>{props.children}</p>
    </div>
  );
}

export {Animal};