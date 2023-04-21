import "./App.css";
import { ColorBox } from "./components/ColorBox";

function App() {
    return (
        <div className="App container">
            <p className="display-1">Color Box</p>
            <div className="row">
                <div className="col-3">
                    <ColorBox isCircle={true} color="royalblue" />
                </div>
                <div className="col-3">
                    <ColorBox />
                </div>
                <div className="col-3">
                    <ColorBox color="red" />
                </div>
                <div className="col-3">
                    <ColorBox isCircle={true} />
                </div>
            </div>
        </div>
    );
}

export default App;
