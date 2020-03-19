import { Task } from './types';
import { RootState } from '../rootReducer';

export const selectTasks = (state: RootState): Task[] => {
  return state.tasks.list;
};
