import { useState } from "react"
// <Child number="3"/>

export function Child(props){
    const [number, setNumber] = useState(props.number);
    function plus(){
        const tmp = number + 1;
        setNumber(tmp);
    }
    function minus(){
        const tmp = number - 1;
        setNumber(tmp);
    }
    return <div>
        <p>Child: {number}</p>
        <button onClick={plus} className="btn btn-primary">+</button>
        <br/>
        <button onClick={minus} className="btn btn-secondary">-</button>
        {/* Xử lý phần update sau */}
        <br/>
        <button onClick={()=>props.updateNumberToParent(number)} className="btn btn-success">Update to Parent</button>
    </div>
}