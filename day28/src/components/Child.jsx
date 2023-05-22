import { useContext } from "react";
import { AppContext } from "../App";
import "./Child.css";
import { NestedComponents } from "./NestedComponents";
export function Child() {
    
    const {color, updateFromChild } = useContext(AppContext);

	return (
		<div className="child" style={{ backgroundColor: color }}>
            <p>Child component</p>
            <NestedComponents/>
            <button onClick={()=>updateFromChild("Hello from child")}>Send to app.js</button>
        </div>
	);
}
Child.defaultProps = {
    color: "red",
}