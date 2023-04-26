import { useState } from "react";
import { Child } from "./Child";

export function Parent(props){

    const rdNumber = Math.floor(Math.random()*10); // 0-9

    const [myNumber, setMyNumber] = useState(rdNumber);

    // Ham callBack
    function updateNumber(lastNumber){
        setMyNumber(lastNumber);
    }

    return <div className="container">
        <p>Parent: {myNumber}</p>
        <Child number={rdNumber} updateNumberToParent={updateNumber}/>
    </div>
}