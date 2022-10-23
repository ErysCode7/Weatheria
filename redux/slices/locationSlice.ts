import { createSlice } from "@reduxjs/toolkit";

type TypeLocation = {
  query: string;
  location: {
    lat: string;
    lon: string;
  };
};

type TypeQuery = {
  location: {
    query: string;
  };
};

type TypeLatitude = {
  location: {
    location: {
      lat: string;
    };
  };
};

type TypeLongtitude = {
  location: {
    location: {
      lon: string;
    };
  };
};

const initialState: TypeLocation = {
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

export const query = (state: TypeQuery) => state.location.query;
export const latitude = (state: TypeLatitude) => state.location.location.lat;
export const longtitude = (state: TypeLongtitude) =>
  state.location.location.lon;

export default locationSlice.reducer;
