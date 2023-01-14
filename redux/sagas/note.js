import { call, put, takeEvery } from 'redux-saga/effects';

import { fetchNoteApi } from '../../helpers/fetchNotes';
import { noteActions } from '../slices/noteSlice';

const { getNote, postNote, putNote, deleteNote } = noteActions;

function* fetchNote(action) {
  const data = yield call(fetchNoteApi, action.payload);
  if (!data || data.error_code) {
    yield put({ type: `${action.type}Fail` });
  } else {
    yield put({ type: `${action.type}Succ`, payload: data });
  }
}

export default function* noteSaga() {
  yield takeEvery(getNote, fetchNote);
  yield takeEvery(postNote, fetchNote);
  yield takeEvery(putNote, fetchNote);
  yield takeEvery(deleteNote, fetchNote);
}
