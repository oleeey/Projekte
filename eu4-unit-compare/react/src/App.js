import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/units")
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
        this.setState({
          data:result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    return  <div className="App">
      <h1>EU4 Unit Compare</h1>
    </div>
  }
}


export default App;
