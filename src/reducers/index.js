import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import matchesReducer from './reducer_matches';
import charactersReducer from './reducer_characters';

export default combineReducers({
  routing: routerReducer,
  matches: matchesReducer,
  characters: charactersReducer
})
