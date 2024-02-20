import {combineReducers} from '@reduxjs/toolkit';
import api from './api/root-api';
import {selectionReducer} from './slices/selected';

const rootReducers = combineReducers({
  [api.reducerPath]: api.reducer,
  selection: selectionReducer,
});

export default rootReducers;
