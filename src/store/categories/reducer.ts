import { Action } from 'redux';
import { ICategoriesStore } from './types';

const initialState: ICategoriesStore = {
  list: [],
};

export default function boards(
  state = initialState,
  action: Action,
): ICategoriesStore {
  switch (action.type) {
    default:
      return state;
  }
}
