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
        <main className="mt-5 pt-5 pb-10 lg:flex w-[90%] m-auto gap-3 justify-between">
          <CurrentWeather />
          <Flex direction="column" gap={5}>
            {/* <Forecast /> */}
            <HourlyForecast />
          </Flex>
        </main>
      )}
    </>
  );
};

export default Main;
