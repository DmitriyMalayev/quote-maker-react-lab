import {
  ADD_QUOTE,
  REMOVE_QUOTE,
  UPVOTE_QUOTE,
  DOWNVOTE_QUOTE,
} from "../actions/quotes";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_QUOTE:
      return [...state, action.quote];
    // return state.concat(action.quote)  ES5 alternative
    case REMOVE_QUOTE:
      return state.filter((quote) => quote.id !== quoteId);
    //If you call id on an array you will get undefined
    //We call action.quoteId to access what's passed in ??
    case UPVOTE_QUOTE:
      return state.map((quote) => {
        //quote is a reference of an object, we should not override it.
        if (quote.id === action.quoteId) {
          return {
            ...quote,
            votes: quote.votes + 1,
          };
        } else {
          return quote;
        }
        //ES7 Object Spread Syntax
        //id: quote.id, content: quote.content, author: quote.author
        //ES5 Object Assign Syntax
        //Object.assign({}, quote, {votes: quote.votes +1})
        //Note, state is an array of objects that we map over. Each object is a reference to that object so if we modify quote you're modifying the quote that was in the previous state. If you modify one object, all of the others will be modified via reference. When you are mapping over an array of objects, each object is passed as a reference so if we modify the object in the function we're modifying the object you have a reference to which would affect the original array. We are not creating a new object, we are referring to the object that already exists within state. This is why we need to make a new one without modifying it.
      });
    case DOWNVOTE_QUOTE:
      return state.map((quote) => {
        //quote is a reference of an object, we should not override it.
        if (quote.id === action.quoteId) {
          let newVoteValue = quote.votes === 0 ? 0 : quote.votes - 1;
          return {
            ...quote,
            votes: newVoteValue,
          };
        } else {
          return quote;
        }
      });
    default:
      return state;
  }
};

/*
addQuote function 
Needs to take in a quote as an argument and return an object with a type of add quote and then the quote as another key.  

quote: quote   
When you refer to a property name inside of an object literal and you don't give it a value it will assume we want the value of this key in the object to be the value of the variable with the matching name. 

UPVOTE_QUOTE
What would we need to change about the state after an upvote? vote count 

If we want to take the current state and turn it into what the state should be what function do we need?
When we upvote a quote we're not changing the number of quotes that are going to be in the store?
How can we create a new state object which is an array of objects based on the current state and this action?  We use map 

QUESTIONS??
Ability to rewind. 
Save vs. SaveAs 





*/
