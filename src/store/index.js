import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

import authorReducer from '../pages/author/authorReducer'
import bookReducer from '../pages/book/bookReducer'
import loginReducer from '../pages/login/loginReducer'
import userReducer from '../utils/userReducer'




const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    authors: authorReducer,
    author: authorReducer,
    authorForm: authorReducer,
    books: bookReducer,
    user: userReducer,
    login: loginReducer,
  }),
  applyMiddleware(sagaMiddleware),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

sagaMiddleware.run(rootSaga);

export default store;
