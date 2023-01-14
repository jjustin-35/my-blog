import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import noteReducer from '../slices/noteSlice';
import toastReducer from '../slices/toastSlice';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    noteReducer,
    toastReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
