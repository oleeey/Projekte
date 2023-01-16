import './App.css';
import React from 'react';
import Infantry from './Infantry.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  };

  // Verbindung mit dem Express Server
  componentDidMount() {
    fetch("http://192.168.178.69:5000/units")
    .then(res => res.json())
    .then(
      (result) => {
        //console.log(result);
        this.setState({
          data:result
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
        <Infantry data={this.state.data}/>
      </div>
    )
  }
}



export default App;
