import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,

} from "@chakra-ui/react";
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { useGetWeatherQuery } from "../../redux/services/weatherMapApi";
import { query } from "../../redux/slices/locationSlice";
import { WeatherElement } from "../../utils/interfaces/weatherMap";

const CurrentWeather: NextPage = () => {
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

  if (
    weather?.weather[0]?.description === "clear sky" ||
    weather?.weather[0]?.description === "few clouds"
  ) {
    imageURL = `./images/clear-sky.png`;
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
    weather?.weather[0]?.description === "heavy rain" ||
    weather?.weather[0]?.description === "heavy intensity rain"
  ) {
    imageURL = `./images/rain-clouds.png`;
  } else if (weather?.weather[0]?.description === "thundercast clouds") {
    imageURL = `./images/thundercast-clouds.png`;
  } else if (weather?.weather[0]?.description === "winter") {
    imageURL = `./images/winter-clouds.png`;
  } else if (weather?.weather[0]?.description === "mist") {
    // imageURL = `./images/mist.png`;
    imageURL = `./images/winter-clouds.png`;
  } else {
    imageURL = `./images/clouds.png`;
  }

  return (
    <>
      <Stack marginBottom={5}>
        <Box
          overflow="hidden"
          bg={boxBackgroundColor}
          className="rounded w-full h-[420px] hover:border-sky-500 hover:border-[2px] md:hover:scale-[102%] transition-all duration-300 text-center"
        >
          <Image
            src={imageURL}
            alt={`Weather Icon`}
            className="w-full p-4 h-[250px] object-contain"
          />
          <Box py="6" px="4" className="lg:px-5">
            <Heading as="h3" size="xl" mb={2}>
              {weather?.name}, {weather?.sys?.country}
            </Heading>
            <Text className="text-sm md:text-[15px] md:leading-6">
              The weather condition in {weather?.name}, {weather?.sys?.country}{" "}
              is described as {""}
              {weather?.weather?.map((weather: WeatherElement) => (
                <span className="font-bold " key={weather?.id}>
                  {weather?.description}
                </span>
              ))}
              <Text className="pb-8">
                <span className="font-semibold">
                  {Math.ceil(Number(weather?.main?.temp - 273))}° C and humidity
                  of {weather?.main?.humidity}%.
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
