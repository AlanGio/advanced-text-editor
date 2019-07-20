import { combineReducers } from 'redux';
import text from './text';
import synonyms from './synonyms';

export default combineReducers({
  text,
  synonyms,
});
