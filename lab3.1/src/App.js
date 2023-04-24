import { useState } from 'react';
import './App.css';
import { Dice } from './components/Dice';
import { NewDice } from './components/NewDice';

function App() {

  const [value, setValue] = useState(0);

  function randomDice(){
     const rd = Math.floor(Math.random() * 6) + 1;
     setValue(rd);
  }

  return (
    <div className="App">
      <div onClick={randomDice} style={{width:"400px"}}>
        {/* <p style={{color:"red", fontSize:"40px"}}>{value}</p>
        <Dice value={"" + value}/> */}
        
        <NewDice value="1"/>
        <NewDice value="2"/>
      </div>
    </div>
  );
}

export default App;
