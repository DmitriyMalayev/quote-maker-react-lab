export const ADD_QUOTE = "ADD_QUOTE"
export const addQuote = (quote) => {
    return {
        type: ADD_QUOTE, 
        quote
    }
}

export const REMOVE_QUOTE = "REMOVE_QUOTE";
export const removeQuote = (quote) => {
  return {
    type: REMOVE_QUOTE,
    quote
  };
};

export const UPDATE_QUOTE = "UPDATE_QUOTE";
export const updateQuote = (quote) => {
  return {
    type: UPDATE_QUOTE,
    quote
  };
};