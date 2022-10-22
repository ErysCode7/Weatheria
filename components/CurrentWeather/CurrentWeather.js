import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useGetWeatherQuery } from "../../redux/services/weatherMapApi";
import { query } from "../../redux/slices/locationSlice";

const CurrentWeather = () => {
  const queryData = useSelector(query);
  const { data: weather } = useGetWeatherQuery(queryData);

  const boxBackgroundColor = useColorModeValue("#ffffff", "#222");

  console.log(weather);

  return (
    <>
      <Stack className=" w-4/5 m-auto p-5">
        <Heading as="h1" size="2xl" pb={3} noOfLines={1}>
          Today's Overview
        </Heading>
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          bg={boxBackgroundColor}
        >
          <Image
            // src={`/images/sun.png`}
            src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
            alt=""
            className="w-full"
          />
          <Box p="6">
            <Heading as="h3" size="xl" mb={2}>
              {weather?.name}, {weather?.sys?.country}
            </Heading>
            <Text>
              The weather condition in {weather?.name}, {weather?.sys?.country}{" "}
              is described as {""}
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
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default CurrentWeather;
