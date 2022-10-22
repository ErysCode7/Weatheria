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

  const boxBackgroundColor = useColorModeValue("#ffffff", "#222222");

  //01d = clear sky
  //02n = few clouds
  //03d = scattered clouds
  //04n = overcast clouds || broken clouds
  //10n = light rain || moderate || heavy rain
  //11d = thundercast clouds
  //13d = winter
  //50n = mist

  let imageURL;

  if (weather?.weather[0]?.description === "clear sky") {
    imageURL = `./images/clear-sky.png`;
  } else if (weather?.weather[0]?.description === "few clouds") {
    imageURL = `./images/few-clouds.png`;
  } else if (weather?.weather[0]?.description === "scattered clouds") {
    imageURL = `./images/scattered-clouds.png`;
  } else if (
    weather?.weather[0]?.description === "overcast clouds" ||
    weather?.weather[0]?.description === "broken clouds"
  ) {
    imageURL = `./images/scattered-clouds.png`;
  } else if (
    weather?.weather[0]?.description === "light rain" ||
    weather?.weather[0]?.description === "moderate rain" ||
    weather?.weather[0]?.description === "heavy rain"
  ) {
    imageURL = `./images/rain-clouds.png`;
  } else if (weather?.weather[0]?.description === "thundercast clouds") {
    imageURL = `./images/thundercast-clouds.png`;
  } else if (weather?.weather[0]?.description === "winter") {
    imageURL = `./images/winter-clouds.png`;
  } else if (weather?.weather[0]?.description === "mist") {
    imageURL = `./images/mist.png`;
  } else {
    imageURL = `./images/clouds.png`;
  }

  console.log(weather);

  return (
    <>
      <Stack className="w-[85%] m-auto p-5">
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          bg={boxBackgroundColor}
        >
          <Image src={imageURL} alt={`Weather Icon`} className="w-full p-4" />
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
