import { useState } from "react";

/**
 * Style - Component
 * @param {string} color mã màu hex
 * @param {string} shape khối hình - "circle or square"
 * @returns
 */
export function Style(props) {
    const [color, setColor] = useState(props.color);
    const [shape, setShape] = useState(props.shape);

    function updateToParent() {
        // console.log("Shape:",shape);
        props.updateStyle(color,shape);
        console.log(color);
        console.log(shape);
    }

    return (
        <div className="container">
            <label>Chọn màu:</label>
            <input
                className="form-control"
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
            <br />
            <label>Chọn hình:</label>
            <select
                className="form-control"
                value={shape}
                onChange={(e) => setShape(e.target.value)}>
                <option value="circle">Circle</option>
                <option value="square">Square</option>
            </select>
            <br />
            <button onClick={updateToParent} className="btn btn-primary">
                Update
            </button>
        </div>
    );
}
Style.defaultProps = {
    color: "#FFFFFF",
    shape: "circle",
};
