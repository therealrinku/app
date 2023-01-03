import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TripDataModel } from '../../types';
import { fetchRooms } from './service';

export interface TripStateModel {
 rooms:TripDataModel[]
 loading:boolean;
 loaded:boolean;
}

const initialState: TripStateModel = {
 rooms:[],
 loading:true,
 loaded:false
};

export const fetchAllRooms = createAsyncThunk(
  'trips/fetchRooms',
  async () => {
    const response = await fetchRooms();
    return response;
  }
);

export const roomSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllRooms.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchAllRooms.fulfilled, (state, action) => {
        state.loading = false
        state.rooms = action.payload;
        state.loaded=true
      })
      .addCase(fetchAllRooms.rejected, (state) => {
        state.loading = false
      });
  },
});

export default roomSlice.reducer;
