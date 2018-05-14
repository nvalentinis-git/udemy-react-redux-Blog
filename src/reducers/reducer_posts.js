import { FETCH_POST, FETCH_POST_ID } from '../actions';

const INITIAL_STATE = { all: [], post: null };

// Reducer should always return a new object state,
//  current state should not be mutated, it always
//  be a new object.
export default function(state = INITIAL_STATE, action) {

  switch (action.type) {
    case FETCH_POST:
      return { ...state, all: action.payload.data };

    case FETCH_POST_ID:
      return { ... state, post: action.payload.data }

    default:
      return state;
  }
}
