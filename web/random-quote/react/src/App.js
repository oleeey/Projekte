import './App.css';
import raw from "./rawtext.txt";

let data = "";

function getData() {
  return fetch(raw)
  .then(Response => Response.text())
  .then(text => data = text)
}

data = getData();
console.log(data);














  




function App() {
  return (
    <div className="App">
      <textfield>Hello</textfield>
    </div>
  );
}


export default App;
