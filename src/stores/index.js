import { createStore, applyMiddleware } from 'redux';
import createSagaMiddeware from 'redux-saga';
import rootSaga from './saga/index';
import rootReducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddeware();

const store = createStore(
  rootReducers,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  ),
);

sagaMiddleware.run(rootSaga);

export default store;