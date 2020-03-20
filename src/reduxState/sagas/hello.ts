import actions from '../actions'
import { select, takeEvery, call } from 'redux-saga/effects';

import { selectName } from '../selectors'


export function* helloSaga() {
  yield takeEvery(actions.setName, showLog);
};

function* showLog(){
  
  const name = yield select(selectName);
  console.log(name)
}
