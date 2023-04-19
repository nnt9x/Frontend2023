import "./App.css";
import { Box } from "./components/Box";

function App() {
  return (
    <div className="App">
      <Box />
      <Box width="200px" bg="red" />
      <Box>
        <p>Hello world</p>
      </Box>

      {/* Tao box 500x500 mau vang,
       ben trong box 200x200 mau xanh blue */}

       <Box width="500px" height="500px" bg="yellow">
          <Box width="200px" height="200px" bg="blue">
            Hello - Blue box
          </Box>
       </Box>

    </div>
  );
}

export default App;
