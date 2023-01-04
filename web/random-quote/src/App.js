import './App.css';
import {quotes} from './quotes.js';

const getIndex = () => {
  let num = Math.round(Math.random()*quotes.length);
  if (num == quotes.length) {
    getIndex()
  }
  console.log(num);
  return num;
}

let quote = quotes[getIndex()];

console.log();

function App() {
  return (
    <div className="App">
      <textfield>{quote}</textfield>
    </div>
  );
}


export default App;
