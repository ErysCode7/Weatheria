import { configureStore } from "@reduxjs/toolkit";
import { weatherBitApi } from "../services/weatherBitApi";
import { weatherApi } from "../services/weatherMapApi";
import locationSlice from "../slices/locationSlice";

export const store = configureStore({
  reducer: {
    location: locationSlice,
    [weatherApi.reducerPath]: weatherApi.reducer,
    [weatherBitApi.reducerPath]: weatherBitApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
