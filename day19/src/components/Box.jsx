import { useState } from "react";
import "./Box.css";
export function Box(props){

    // Mặc đinh state color -> Giống màu ngừoi dùng truyền vào
    const [stateColor, setColor] = useState(props.color);

    function changeColor(){
        if(stateColor === "white"){
            setColor("black");
        }
        else{
            setColor("white");
        }
    }

    return <div onMouseOver={changeColor} className="box" 
    style={{backgroundColor: stateColor}}>
        
    </div>
}
// Mau mac dinh la mau trang
Box.defaultProps = {
    color:"white",
}