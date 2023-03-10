import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TripDataModel } from '../../types';
import { findTabs } from '../../utils';
import { fetchRooms } from './service';

export interface TripStateModel {
 rooms:TripDataModel[]
 loading:boolean;
 loaded:boolean;
 tabs:Array<string>
}

const initialState: TripStateModel = {
 rooms:[],
 loading:true,
 loaded:false,
 tabs:[]
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
        state.tabs=findTabs(action.payload)
      })
      .addCase(fetchAllRooms.rejected, (state) => {
        state.loading = false
      });
  },
});

export default roomSlice.reducer;
