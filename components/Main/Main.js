import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetWeatherQuery } from "../../redux/services/weatherMapApi";
import {
  getLatitude,
  getLongtitude,
  query,
} from "../../redux/slices/locationSlice";
import CurrentWeather from "../CurrentWeather/CurrentWeather";

const Main = () => {
  const dispatch = useDispatch();
  const queryData = useSelector(query);

  const { data: weather } = useGetWeatherQuery(queryData);

  useEffect(() => {
    dispatch(getLatitude(weather?.coord?.lat));
    dispatch(getLongtitude(weather?.coord?.lon));
  }, [weather]);

  return (
    <>
      {weather && (
        <main className="mt-5">
          <CurrentWeather />
          {/* <Forecast /> */}
        </main>
      )}
    </>
  );
};

export default Main;
