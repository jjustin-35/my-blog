import { all } from 'redux-saga/effects';

import noteSaga from './note';

export default function* rootSaga() {
  yield all([noteSaga]);
}
