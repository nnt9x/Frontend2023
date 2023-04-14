import "./Car.css";

function Car(props){
    return <div className="car" style={{backgroundColor:props.bg}}>
        <p className="car-name">
            {props.name}
        </p>
        <img className="car-image" src={props.image} alt="" />
        <p>
            <i>{props.price}</i>
        </p>
    </div>
}

export {Car};