import { combineReducers } from 'redux';
import PostReducer from './reducer_posts';

// This is the App State definition
const rootReducer = combineReducers({
  posts: PostReducer
});

export default rootReducer;
