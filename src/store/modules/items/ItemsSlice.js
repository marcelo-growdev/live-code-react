import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const adapter = createEntityAdapter({
  selectId: (item) => item.uid,
});

export const { selectAll, selectById } = adapter.getSelectors(
  (state) => state.items
);

const itemsSlice = createSlice({
  name: 'items',
  initialState: adapter.getInitialState(),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne,
    clear: adapter.removeAll,
  },
});

export const { addOne, addMany, updateOne, clear } = itemsSlice.actions;
export default itemsSlice.reducer;
