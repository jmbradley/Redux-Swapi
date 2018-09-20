// import /* we need our action types here*/ '../actions';
import { FETCHING_CHARS, CHARS_FETCHING_SUCCESS, CHARS_FETCHING_ERROR } from '../actions';

const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [], fetchingChars: false, error: null, fetched: false
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARS:
      return Object.assign({}, state, { fetchingChars: true });
    case CHARS_FETCHING_SUCCESS:
      return Object.assign({}, state, {
        chars:[...state.chars, ...action.payload],
        fetchingChars: false,
        fetched: true
      });
    case CHARS_FETCHING_ERROR:
      return Object.assign({}, state, {
        fetchingChars: false,
        error: "Error fetching Chars"
      });
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};

