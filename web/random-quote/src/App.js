import './App.css';
import {quotes} from './quotes.js';

let index;

const getIndex = () => {
  index = Math.round(Math.random()*quotes.length);
  console.log(index);
  if (index === quotes.length) {
    getIndex()
  }
  return index;
}

let quote = quotes[getIndex()];

function App() {
  return (
    <div className="App">
      <textfield>{quote}</textfield>
    </div>
  );
}


export default App;
