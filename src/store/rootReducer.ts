import { combineReducers } from 'redux';

import categories from './categories/reducer';

const rootReducer = combineReducers({
  categories,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
