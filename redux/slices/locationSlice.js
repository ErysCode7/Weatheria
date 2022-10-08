import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  location: {
    lat: "",
    lon: "",
  },
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    getQueryData: (state, action) => {
      state.query = action.payload;
    },
    getLatitude: (state, action) => {
      state.location.lat = action.payload;
    },
    getLongtitude: (state, action) => {
      state.location.lon = action.payload;
    },
  },
});

export const { getQueryData, getLatitude, getLongtitude } =
  locationSlice.actions;

export const query = (state) => state.location.query;
export const latitude = (state) => state.location.location.lat;
export const longtitude = (state) => state.location.location.lon;

export default locationSlice.reducer;
