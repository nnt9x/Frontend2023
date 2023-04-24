import unknown from "../assets/unknows.svg";
import dice1 from "../assets/dice-1.svg";
import dice2 from "../assets/dice-2.svg";
import dice3 from "../assets/dice-3.svg";
import dice4 from "../assets/dice-4.svg";
import dice5 from "../assets/dice-5.svg";
import dice6 from "../assets/dice-6.svg";
import { useState } from "react";

const DICE = [unknown, dice1, dice2, dice3, dice4, dice5, dice6];

/**
 * NewDice - component
 * @param {number} props.value - giá trị xúc xắc 
 * @returns 
 */
export function NewDice(props) {
    const [currentValue, setNewValue] = useState(props.value);

    let imgDice;
    if (currentValue >= 1 && currentValue <= 6) {
        imgDice = DICE[currentValue];
    } else {
        imgDice = DICE[0];
    }

    function randomDice(){
        const rd = Math.floor(Math.random()*6) + 1;
        setNewValue(rd);
    }

    return (
        <div className="new-dice" onClick={randomDice}>
            <img src={imgDice} alt="" />
        </div>
    );
}

NewDice.defaultProps = {
    value: 0,
};
