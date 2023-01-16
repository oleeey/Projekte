import './App.css';
import React from 'react';
import Infantry from './Infantry.js';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <h1>EU4 Unit Compare</h1>
        <Infantry />
      </div>
    )
  }
}



export default App;
