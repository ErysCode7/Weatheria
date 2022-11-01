import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetWeatherQuery } from "../../redux/services/weatherMapApi";
import {
  getLatitude,
  getLongtitude,
  query,
} from "../../redux/slices/locationSlice";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Forecast from "../Forecast/Forecast";
import HourlyForecast from "../HourlyForecast/HourlyForecast";

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
        <main className="mt-3 pt-2 pb-10 xl:flex w-[90%] m-auto gap-3 justify-between">
          <CurrentWeather />
          <Flex direction="column" gap={2} className="w-full lg:flex-[1]">
            <Forecast />
            <HourlyForecast />
          </Flex>
        </main>
      )}
    </>
  );
};

export default Main;
