import { Category } from './types';
import { RootState } from '../rootReducer';

export const selectCategory = (state: RootState): Category[] => {
  return state.categories.list;
};
