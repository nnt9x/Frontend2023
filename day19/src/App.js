import './App.css';
import { Box } from './components/Box';

function App() {

  const row = 8;
  const col = 8;

  let arrBox = [];

  for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      if((i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0 )){
        arrBox.push(<Box/>)
      }
      else{
        arrBox.push(<Box color="white"/>)
      }
    }
    arrBox.push(<div style={{clear:"both"}}></div>)
  }

  return (
    <div className="App">
        {arrBox}
    </div>
  );
}

export default App;
