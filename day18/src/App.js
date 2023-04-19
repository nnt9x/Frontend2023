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

      {/* Tao 1box mau hottrend2022-2023 kich thuoc 
       800x800 , 
       chua 1 hinh anh co kich thuoc 500x500 
       Canh can giua box
       */}
      <Box bg="#BB2649" height="800px" width="800px">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <img
            className="box-image"
            src="https://www.elephantsforafrica.org/wp-content/uploads/2012/11/baby-african-elephant-facts.jpg"
            width={"500px"}
            height={"500px"}
            alt=""
          />
        </div>
      </Box>
    </div>
  );
}

export default App;
