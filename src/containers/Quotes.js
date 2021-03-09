import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import {removeQuote, upvoteQuote, downvoteQuote} from "../actions/quotes"

class Quotes extends Component {
  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map((quote) => (
                <QuoteCard
                  quote={quote} //curly brackets because it's an object not a literal value
                  removeQuote={this.props.removeQuote}
                  upvoteQuote={this.props.upvoteQuote}
                  downvoteQuote={this.props.downvoteQuote}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ quotes }) => {
  return {
    quotes: quotes,
  };
};

//add arguments to connect as needed
//Shorthand for mapDispatchToProps. These are not the Action Creators.  
export default connect(mapStateToProps, {removeQuote, upvoteQuote, downvoteQuote})(Quotes);

/*
mapStateToProps 
If we have quotes in the store already they would not be displayed, but if you filled it in they would be. We need to access to what's in the state. 
quotes is a key in state 
*/

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: (quoteId) => dispatch(removeQuote(quoteId)),
    upvoteQuote: (quoteId) => dispatch(upvoteQuote(quoteId)),
    downvoteQuote: (quoteId) => dispatch(downvoteQuote(quoteId))
  }
}

