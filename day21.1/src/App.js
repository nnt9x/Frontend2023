import { useState } from "react";
import "./App.css";
import { Shape } from "./components/Shape";
import { Style } from "./components/Style";

function App() {
    const [color, setColor] = useState("#2E2E2E");
    const [isCircle, setShape] = useState(false);
    const shape = isCircle === true ? "circle" : "square";

    function handleUpdateShape(c, s) {
        setColor(c);
        setShape(s === "circle" ? true : false);
    }

    return (
        <div className="container">
            <h1 className="display-1">Pass data between components</h1>
            <div className="row">
                <div className="col-3">
                    <Style
                        color={color}
                        shape={shape}
                        updateStyle={handleUpdateShape}
                    />
                </div>
                <div className="col-6"></div>
                <div className="col-3">
                    <Shape color={color} isCircle={isCircle} />
                </div>
            </div>
        </div>
    );
}

export default App;
