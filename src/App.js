import logo from './logo.svg';
import './App.css';
import { Example } from "./example1";
import { Example2 } from "./example2";
import { Example3 } from "./example3";
import Example4 from "./example4";
import { Example5 } from "./example5";
// import  Example5  from "./example5";
import Example6 from "./example6";
import { Example7 } from "./example7";



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
        <Example4></Example4>
        <Example4></Example4>
        <Example5></Example5>
        <Example6 isLoggedIn={false}></Example6>
        <Example7></Example7>
        {/* <ActionLink></ActionLink> */}
      </header>
    </div>
  );
}

export default App;
