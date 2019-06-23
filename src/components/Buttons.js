import React from 'react';

const Buttons = (props) => {
  return (

    <div className="buttons">

      <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank" href="https://twitter.com/intent/tweet" rel="noopener noreferrer"  data-size="large"><i className="fa fa-twitter"></i></a>

      <button className="button" id="new-quote" onClick={() => {
        props.nextHandler();  
        
      }}>Next Quote</button>

    </div>
  );
}

export default Buttons;