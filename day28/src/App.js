import { createContext, useState } from 'react';
import './App.css';
import { Parent } from './components/Parent';

const AppContext = createContext();

function App() {
  const [color, setColor] = useState('red');
  
  function updateFromChild(msg){
    alert(msg);
  }

  return (
    <div className="App">
      <input type='color' onChange={(e)=>setColor(e.target.value)} />
      <AppContext.Provider value={{color, updateFromChild}}>
          <Parent/>
      </AppContext.Provider>
    </div>
  );
}

export {App, AppContext};
