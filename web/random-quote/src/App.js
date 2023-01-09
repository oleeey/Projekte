import './App.css';
import {quotes} from './quotes.js';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotesList: quotes,
      quote: "",
      author: "",
      color: ""
    }
    this.getQuote = this.getQuote.bind(this);
    this.getRandomColor = this.getRandomColor.bind(this);
  }

  getQuote() {
    let index = Math.round(Math.random()*quotes.length);
    if (index === quotes.length) {
      this.getQuote()
    }
    else {
      this.setState({
        quote: this.state.quotesList[index][0],
        author: this.state.quotesList[index][1]
      })
    }
  }

  getRandomColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    this.setState({
      color: "#" + randomColor
    });
  }

  componentDidMount() {
    this.getQuote();
    this.getRandomColor();
  }


  
  render() {
    document.body.style.backgroundColor = this.state.color;
    return (
      <div className="App" id='quote-box'>
        <p id='text'>{this.state.quote}</p>
        <p id="author">{this.state.author}</p>
        <button id='new-quote' 
        onClick={() => {this.getQuote(); this.getRandomColor();}}
        style={{backgroundColor: this.state.color}}
        
        >New quote
        </button>
      </div>
    );
  }
}


export default App;
