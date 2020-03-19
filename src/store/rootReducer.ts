import { combineReducers } from 'redux';

import boards from './boards/reducer';

const rootReducer = combineReducers({
  boards,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
