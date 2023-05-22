import { useContext } from "react"
import { AppContext } from "../App";

export function NestedComponents(){

    const {color} = useContext(AppContext);

    return (<div>
        <p>Nested Components</p>
        <p>From app: {color}</p>
    </div>)
}