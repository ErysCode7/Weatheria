import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetWeatherQuery } from "../../redux/services/weatherMapApi";
import {
  getLatitude,
  getLongtitude,
  query,
} from "../../redux/slices/locationSlice";
import Forecast from "../Forecast/Forecast";

const Main = () => {
  const dispatch = useDispatch();
  const queryData = useSelector(query);

  const { data: weather } = useGetWeatherQuery(queryData);

  useEffect(() => {
    dispatch(getLatitude(weather?.coord?.lat));
    dispatch(getLongtitude(weather?.coord?.lon));
  }, [weather]);

  const bg = useColorModeValue("#121212", "#121212");
  const color = useColorModeValue("#f2f2f2", "#f2f2f2");

  return (
    <>
      {weather && (
        <main className="mt-5">
          <Box bg={bg} color={color}>
            <div className="bg-[#21212] w-4/5 m-auto p-5">
              <Heading
                as="h2"
                className="font-bold"
                fontSize={{ base: "25px", md: "35px", lg: "40px" }}
              >
                Find out the current weather in each city in the world!
              </Heading>

              <img
                className="w-48"
                src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
                alt="/"
              />

              <Heading
                as="h1"
                className="font-bold mb-4"
                fontSize={{ base: "28px", md: "38px", lg: "48px" }}
              >
                {weather?.name}, {weather?.sys?.country}
              </Heading>

              <Text>
                The weather condition in {weather?.name},{" "}
                {weather?.sys?.country} is described as {""}
                {weather?.weather?.map((weather) => (
                  <span className="font-bold" key={weather?.description}>
                    {weather?.description}
                  </span>
                ))}
                <Text className="mb-8 text-justify">
                  <span className="font-semibold">
                    {Math.ceil(Number(weather?.main?.temp - 273))} °C and a
                    humidity of {weather?.main?.humidity}%.
                  </span>
                </Text>
              </Text>
            </div>
          </Box>
          <Forecast />
        </main>
      )}
    </>
  );
};

export default Main;
