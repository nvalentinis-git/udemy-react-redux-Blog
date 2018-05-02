import { combineReducers } from 'redux';
import PostReducer from './reducer_posts';

// This ES6 syntax say get reducer function from redux-form and
//  put it into the reducer variable, and ten create a new
// variable formReducer
import { reducer as formReducer } from 'redux-form';

// This is the App State definition
const rootReducer = combineReducers({
  posts: PostReducer,
  form: formReducer
});

export default rootReducer;
