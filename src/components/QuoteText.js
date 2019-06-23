import React from 'react';

const QuoteText = (props) => {

  return(
    <div className="quote-text">
      
      <i className="fa fa-quote-left"></i>
      <span id="text">{props.text}</span>
    </div>
  );

};

export default QuoteText;