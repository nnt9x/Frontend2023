import { CircleImage } from "./CircleImage";

/**
 * 
 * @param {string} name Tên xe
 * @param {string} image Link ảnh xe
 * @returns 
 */
function Car(props) {
  return <div>
    <p>{props.name}</p>
    <CircleImage url={props.image} />
  </div>;
}

export { Car };
