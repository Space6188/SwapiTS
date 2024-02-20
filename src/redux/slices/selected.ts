import {createSlice} from '@reduxjs/toolkit';
import {IGenders} from '../../utils/types';
const initialState = {
  selected: [] as string[],
  male: 0,
  female: 0,
  'n/a': 0,
};
const selectionSlice = createSlice({
  name: 'selection',
  initialState,
  reducers: {
    like: (
      store,
      {
        payload,
      }: {payload: {name: string; isSelected: boolean; gender: IGenders}},
    ) => {
      if (payload.isSelected) {
        store.selected = store.selected.filter(name => name != payload.name);
        store[payload.gender] -= 1;
      } else {
        store.selected.push(payload.name);
        store[payload.gender] += 1;
      }
    },
    clear: () => initialState,
  },
});

export const {actions: selectionActions, reducer: selectionReducer} =
  selectionSlice;
