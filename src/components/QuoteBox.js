import React, { Component } from 'react';

import quotesData from '../quotesData';

import QuoteText from './QuoteText';
import QuoteAuthor from './QuoteAuthor';
import Buttons from './Buttons';



class QuoteBox extends Component {

    state = {
      quotes: quotesData
    }

    nextHandler = () => {
     let rand = Math.floor(Math.random() * quotesData.length);
     this.setState({ quotes: quotesData[rand]})
    }

    componentDidMount(){
      this.nextHandler();
    }
  
    render() {
       const quote = this.state.quotes;
        
        return(
          <div id="quote-box">      
                <QuoteText   text={quote.quote}/>
                <QuoteAuthor author={quote.author}/>
                <Buttons nextHandler={this.nextHandler} quote={quote}/>
          </div>
        )
    }
};



export default QuoteBox;