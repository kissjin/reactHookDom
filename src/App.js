import logo from './logo.svg';
import './App.css';
import { Example } from "./example1";
import { Example2 } from "./example2";
import { Example3 } from "./example3";


function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Example></Example>
        <Example2></Example2>
        <Example3></Example3>
      </header>
    </div>
  );
}

export default App;
