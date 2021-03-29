import { combineReducers } from 'redux';

import displayReducer from './display.reducer';

const rootReducer = combineReducers({
  displayReducer,
});

export default rootReducer;
