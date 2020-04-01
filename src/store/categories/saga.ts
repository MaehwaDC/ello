import { takeEvery, call, put } from 'redux-saga/effects';
import { CategoryTypes } from './types';
import * as api from 'api';
import { Action } from 'redux';

export function* wathcFetchCategories() {
  yield takeEvery(CategoryTypes.REQUSET_CATEGORIES, fetchCategories);
}

const requestCategories = (): Action => ({
  type: CategoryTypes.REQUSET_CATEGORIES,
});
const receivCategories = <T>(data: T): Action => ({
  type: CategoryTypes.RECEIVE_CATEGORIES,
  payload: data,
});
const errorCategories = <T>(data: T): Action<{ type: CategoryTypes, error: T }> => ({
  type: CategoryTypes.ERROR_CATEGORIES,
  error: data,
})

export function* fetchCategories() {
  try {
    yield put(requestCategories());
    const data = yield call(async () => {
      return await api.Boards.fetch('/categories');
    });

    yield put(receivCategories(data));
  } catch (err) {
    yield put(errorCategories(err));
  }
}
