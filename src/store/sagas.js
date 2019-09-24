import { delay } from 'redux-saga';
import { takeLatest, put, call, select } from 'redux-saga/effects';
import ApiService from '../utils/ApiService';
import PopUp from '../utils/popUp';

function* getUser(action) {
  try {

    const resp = yield call(ApiService.loginUser, action.payload[0], action.payload[1])

    yield put({ type: 'SET_TOKEN', payload: resp.data.access_token });
  } catch (err) {
    // yield put({ type: 'FAILURE_TODO_LIST' });
  }
}

function* getAuthors(action) {
  try {
    const resp = yield call(ApiService.ListaAuthors, action.payload.token)
    yield put({ type: 'GET_AUTHORS', payload: resp.data })
  } catch (err) {

  }
}

function* getAuthor(action) {
  try {
    const resp = yield call(ApiService.ListaAuthor, action.payload.id, action.payload.token)
    yield put({ type: 'GET_AUTHOR', payload: resp.data })
  } catch (err) {

  }
}

function* createAuthor(action) {
  try {
    yield call(ApiService.CriaAuthor, action.payload.name, action.payload.token)
    PopUp.exibeMensagem('success', "Author was created with success");
    yield put({ type: 'CLEAN_NAME' })
  } catch (err) {

  }
}

function* attAuthor(action) {
  try {
   
    yield call(ApiService.UpdateAuthor, action.payload.name, action.payload.id, action.payload.token)
    PopUp.exibeMensagem('success', "Author was updated with success");
    yield put({ type: 'CLEAN_NAME' })

    getAuthors(action)
    // const resp = yield call(ApiService.ListaAuthors, action.payload.token)
    // yield put({ type: 'GET_AUTHORS', payload: resp.data })
  } catch (err) {

  }
}

function* deleteAuthor(action) {
  try {
    yield call(ApiService.DeleteAuthor, action.payload.id,  action.payload.token)
    PopUp.exibeMensagem('success', "Author was deleted with success");
    
    
    // const resp = yield call(ApiService.ListaAuthors, action.payload.token)
    // yield put({ type: 'GET_AUTHORS', payload: resp.data })
  } catch (err) {

  }
}

function* getBooks(action) {
  try {

    const resp = yield call(ApiService.ListaBooks, action.payload.token)
    
    yield put({ type: 'GET_BOOKS', payload: resp.data });
  } catch (err) {
    // yield put({ type: 'FAILURE_TODO_LIST' });
  }
}

export default function* root() {
  yield [
    takeLatest('SAGA_LOGIN_USER', getUser),
    takeLatest('SAGE_GET_AUTHORS', getAuthors),
    takeLatest('SAGA_GET_AUTHOR', getAuthor),
    takeLatest('SAGA_CREATE_AUTHOR', createAuthor),
    takeLatest('SAGA_ATT_AUTHOR', attAuthor),
    takeLatest('SAGA_DELETE_AUTHOR', deleteAuthor),
    takeLatest('SAGA_GET_BOOKS', getBooks),

  ];
}
