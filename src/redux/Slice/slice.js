import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = { data: [], loading: false, error: null };

export const getPollutionData = createAsyncThunk(
  'pollutionData',
  async(url) => {
    const data = await fetch(url);
    const pollutionInfo = await data.json();
    return pollutionInfo;
  }
);

export const pollutionSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (Builder) => {
    Builder.addCase(getPollutionData.pending, (state) => {
      const newState = state;
      newState.loading = true;
      newState.error = null;
      newState.data = [];
      return newState;
    }).addCase(getPollutionData.fulfilled, (state, { payload }) => {
      const newState = state;
      newState.loading = false;
      const array = payload.list[0];
      const components = Object.entries(array.components);
      newState.data = components
      return newState;
    });
  },
});

export default pollutionSlice.reducer;
