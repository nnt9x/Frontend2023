import unknown from "../assets/unknows.svg";
import dice1 from "../assets/dice-1.svg";
import dice2 from "../assets/dice-2.svg";
import dice3 from "../assets/dice-3.svg";
import dice4 from "../assets/dice-4.svg";
import dice5 from "../assets/dice-5.svg";
import dice6 from "../assets/dice-6.svg";

const DICE = [unknown, dice1, dice2, dice3, dice4, dice5, dice6];

/**
 * Dice - component
 * @param {number} props.value - giá trị xúc xắc 
 * @returns 
 */
export function Dice(props) {
    let imgDice;
    if (props.value >= 1 && props.value <= 6) {
        imgDice = DICE[props.value];
    } else {
        imgDice = DICE[0];
    }
    return (
        <div className="dice">
            <img src={imgDice} alt="" />
        </div>
    );
}

Dice.defaultProps = {
    value: 0,
};
