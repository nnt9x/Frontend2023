// <Animal name, src/>
import "./Animal.css";
export function Animal(props) {
	return (
		<div className="animal" onClick={()=> props.callBackApp(props.name)}>
			<img className="img-fluid" src={props.src} 
            alt={props.name} />
            <p>{props.name}</p>
            <button onClick={()=>props.removeItem(props.id)} className="btn btn-danger">Xoá</button>
		</div>
	);
}
