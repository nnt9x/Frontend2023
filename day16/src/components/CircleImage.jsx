
/**
 * 
 * @param {string} url Link hình ảnh 
 * @returns 
 */
function CircleImage(props) {
  return <div>
    <img className="img-fluid rounded-circle" src={props.url} alt="" />
  </div>;
}

export { CircleImage };
