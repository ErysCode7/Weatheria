import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const weatherBitHeaders = {
  "X-RapidAPI-Key": process.env.NEXT_PUBLIC_WEATHER_BIT_API_KEY,
  "X-RapidAPI-Host": process.env.NEXT_PUBLIC_WEATHER_BIT_HEADERS,
};

const createRequest = (url) => ({ url, headers: weatherBitHeaders });

//Define a service using a base URL and expected endpoints
export const weatherBitApi = createApi({
  reducerPath: "weatherBitApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_WEATHER_BIT_URL,
  }),
  endpoints: (builder) => ({
    getSixDayForecast: builder.query({
      query: ({ lat, lon }) => createRequest(`?lat=${lat}&lon=${lon}`),
    }),
  }),
});

export const { useGetSixDayForecastQuery } = weatherBitApi;
