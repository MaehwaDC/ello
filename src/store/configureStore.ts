import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';

export default function configStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const createStoreWithMiddleware = compose(
    applyMiddleware(sagaMiddleware)(createStore),
  );

  const store = createStoreWithMiddleware(rootReducer, initialState);

  return store;
}
