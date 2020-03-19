import { Action } from 'redux';
import { ITaskStore } from './types';

const initialState: ITaskStore = {
  list: [],
};

export default function tasks(
  state = initialState,
  action: Action,
): ITaskStore {
  switch (action.type) {
    default:
      return state;
  }
}
