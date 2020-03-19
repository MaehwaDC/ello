import { Board } from './types';
import { RootState } from '../rootReducer';

export const selectBoards = (state: RootState): Board[] => {
  return state.boards.list;
};
