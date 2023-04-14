import logo from './logo.svg';
import './App.css';
import { Car } from './components/Car';

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <td>
            <Car bg="grey" name="Vinfast VF8" image="https://vinfast-newway.com/wp-content/uploads/2019/05/4-2.jpg" price="800.000.000 VND"  />
          </td>
           <Car bg="yellow" name="Vinfast VF8" image="https://vinfast-newway.com/wp-content/uploads/2019/05/4-2.jpg" price="800.000.000 VND"  />
          <td>

          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
