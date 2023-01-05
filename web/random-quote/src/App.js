import './App.css';
import {quotes} from './quotes.js';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotesList: quotes,
      quote: "",
      author: ""
    }
    this.getQuote = this.getQuote.bind(this);
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

  componentDidMount() {
    this.getQuote();
  }

  render() {
    return (
      <div className="App" id='quote-box'>
        <p id='text'>{this.state.quote}</p>
        <p id="author">{this.state.author}</p>
        <button id='new-quote' onClick={this.getQuote}>New quote</button>
      </div>
    );
  }
}


export default App;
