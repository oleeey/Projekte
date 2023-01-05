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

let quote = quotes[getIndex()][0];
let author = quotes[getIndex()][1];

function App() {
  return (
    <div className="App" id='quote-box'>
      <p id='text'>{quote}</p>
      <p id="author">{author}</p>
      <button id='new-quote'>New quote</button>
    </div>
  );
}


export default App;
