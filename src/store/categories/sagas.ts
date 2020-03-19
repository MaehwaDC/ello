import { takeEvery } from 'redux-saga/effects';
import { CategoryTypes } from './types';
import * as api from 'api';

export function* wathcFetchCategories() {
  yield takeEvery(CategoryTypes.REQUSET_CATEGORIES, fetchCategories);
}

export function* fetchCategories() {
  yield api.Boards.fetch('/categories');
}
