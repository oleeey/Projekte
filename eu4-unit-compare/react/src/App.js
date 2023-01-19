import './App.css';
import React from 'react';
import Unit from './Unit.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infData: [],
      cavData: []
    }
  };

  // Verbindung mit dem Express Server, Daten anpassen für Anwendung
  componentDidMount() {
    fetch("http://localhost:5000/inf")
    .then(res => res.json())
    .then(
      (result) => {
        result.data.shift();
        let newData = [];
        result.data.map(item => newData.push(String(item).split(";")))
        
        this.setState({
          infData: newData
        });
      },
      (error) => {
        this.setState({
          error
        });
      }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>EU4 Unit Compare</h1>
        <Unit data={this.state.infData}/>
      </div>
    )
  }
}



export default App;
