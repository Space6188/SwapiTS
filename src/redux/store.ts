import {configureStore} from '@reduxjs/toolkit';
import api from './api/root-api';
import rootReducers from './root-reducers';

const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(api.middleware),
});

export default store;
