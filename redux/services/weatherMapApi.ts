import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const createRequest = (url: string) => ({ url });

//Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_WEATHER_URL,
  }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (search) =>
        createRequest(
          `/weather?q=${search}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
        ),
    }),
    getForecast: builder.query({
      query: (search) =>
        createRequest(
          `/forecast?q=${search}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
        ),
    }),
  }),
});

export const { useGetForecastQuery, useGetWeatherQuery } = weatherApi;
