import { combineReducers } from 'redux';

import modal from './modal'
import object from './object'

const rootReducer = combineReducers({
  modal,
  object
});

export default rootReducer;