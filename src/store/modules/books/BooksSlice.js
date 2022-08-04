import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';


const adapter = createEntityAdapter({
  selectId: (item) => item.uid,
});

export const { selectAll, selectById } = adapter.getSelectors(
  (state) => state.sliceName
);

const sliceNameSlice = createSlice({
  name: 'sliceName',
  initialState: adapter.getInitialState(),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne,
  },
});

export const { addOne, addMany, updateOne } = sliceNameSlice.actions;
export default sliceNameSlice.reducer;
