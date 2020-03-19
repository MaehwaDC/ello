import { combineReducers } from 'redux';

import tasks from './tasks/reducer';

const rootReducer = combineReducers({
  tasks,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
