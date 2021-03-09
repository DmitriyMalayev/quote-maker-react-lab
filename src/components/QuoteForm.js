import React, { Component } from "react";
import uuid from "uuid";
import { connect } from "react-redux";
import { addQuote } from "../actions/quotes";

class QuoteForm extends Component {
  state = {
    content: "",
    author: "",

    //set up a controlled form with internal state
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });

    /* 
    Handle Updating Component State
    If we know the property names of state (content and author) and they match the key and state that we want to update then what we do do is use that fact in setState. We don't know which property and state we are going to update when this event happensbecause we are attaching the event handler to multiple inputs. We are adding multiple on change event listeners and using the same handler. This is why we need to use a computed property. 
    We use brackets to we run the javascript before we compute the key, that lets the property and event.target.name is going to be the name of the input that actually changed. Therefore the property and state that we want to update and then event.target.value is going to be the value we want to update it to. */
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    let quote = {
      content: this.state.content,
      author: this.state.author,
    };
    this.props.addQuote(quote);
    this.setState({
      content: "",
      author: "",
    });
  };

  /*
  This is not an action creator function. This is the function that's attached to dispatch. 
  In order for this function to be in props, it needs to be in the second argument of connect. 
  Handle Form Submit event default. Create quote object from state. Pass quote object to action creator. 
  Update component state to return to default state.  */

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form
                  className="form-horizontal"
                  onSubmit={this.handleOnSubmit}
                >
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">
                      Quote
                    </label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        name="content"
                        value={this.state.content} //The value is set to the state and it's set to an empty string.
                        onChange={this.handleOnChange} //attached to both the textarea and the input. Doesn't change unless the state is updated.
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">
                      Author
                    </label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        name="author"
                        value={this.state.author}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">
                        Add
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addQuote: (quote) => dispatch(addQuote(quote)), //WHY NO CURLY BRACKETS
  };
};

export default connect(null, mapDispatchToProps)(QuoteForm);
/*
mapDispatchToProps
returns an object that will be props for the component 
If we want to be able to call add quote on this.props then our key (the property name) needs to be addQuote: 
The purpose of mapDispatchToProps is to allow access to store dispatch  

mapDispatchToProps is a function that takes dispatch from the store and then returns an object and it becomes part of the props that you pass to QuoteForm and then the object has keys in it each one points to a function. The function takes an argument and returns some value that is dispatched.  



addQuote 
This is a name of a property and because we're invoking this property name we need it to be a function.
When we call addQuote we pass in a quote then the function that we map to props needs to accept a quote.  

What is it that updates the store? => The dispatch
What we want to happen when mapDispatchToProps is called? 
We want it for it to call the action creator function and then dispatch the return value. 

When we call dispatch(addQuote) we pass in a quote and it will dispatch the return value of add quote so that this object will get dispatched and patched through all the reducers. 

add arguments to connect as needed
export default connect(null, mapDispatchToProps)(QuoteForm);

The first argument is null because we don't need anything from the state. 
The second argument is mapDispatchToProps
*/

//Reducers vs. Action Creator ??