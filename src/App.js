import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import HelloWithoutJsx from './components/HelloWithoutJsx';

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <HelloWithoutJsx />
    </div>
  );
}

export default App;
