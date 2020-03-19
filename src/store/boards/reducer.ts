import { Action } from 'redux';
import { IBoardsStore } from './types';

const initialState: IBoardsStore = {
  list: [],
};

export default function boards(
  state = initialState,
  action: Action,
): IBoardsStore {
  switch (action.type) {
    default:
      return state;
  }
}
