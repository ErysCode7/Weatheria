import { Box, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { NextPage } from "next";
import { List } from "../../../utils/interfaces/forecastMap";

type Props = {
  forecast: List;
  index: number;
  hour: any;
};

const HourlyForecastCard: NextPage<Props> = ({ hour, index, forecast }) => {
  const boxBackgroundColor = useColorModeValue("#ffffff", "#222222");

  let imageURL;

  if (
    // forecast?.weather[0]?.description === "clear Sky" ||
    forecast?.weather[0]?.description === "Clear Sky" ||
    // forecast?.weather[0]?.description === "few clouds" ||
    forecast?.weather[0]?.description === "Few clouds"
  ) {
    imageURL = `./images/clear-sky.png`;
  } else if (
    forecast?.weather[0]?.description === "scattered clouds" ||
    forecast?.weather[0]?.description === "Scattered clouds"
  ) {
    imageURL = `./images/scattered-clouds.png`;
  } else if (
    forecast?.weather[0]?.description === "overcast clouds" ||
    forecast?.weather[0]?.description === "Overcast clouds" ||
    forecast?.weather[0]?.description === "broken clouds" ||
    forecast?.weather[0]?.description === "Broken clouds"
  ) {
    imageURL = `./images/scattered-clouds.png`;
  } else if (
    forecast?.weather[0]?.description === "light rain" ||
    forecast?.weather[0]?.description === "Light rain" ||
    forecast?.weather[0]?.description === "moderate rain" ||
    forecast?.weather[0]?.description === "Moderate rain" ||
    forecast?.weather[0]?.description === "heavy rain" ||
    forecast?.weather[0]?.description === "Heavy rain" ||
    forecast?.weather[0]?.description === "heavy intensity rain"
  ) {
    imageURL = `./images/rain-clouds.png`;
  } else if (
    forecast?.weather[0]?.description === "Thunderstorm with rain" ||
    forecast?.weather[0]?.description === "Thunderstorm with heavy rain"
  ) {
    imageURL = `./images/thundercast-clouds.png`;
  } else if (
    forecast?.weather[0]?.description === "thundercast clouds" ||
    forecast?.weather[0]?.description === "Thundercast clouds"
  ) {
    imageURL = `./images/thundercast-clouds.png`;
  } else if (
    forecast?.weather[0]?.description === "winter" ||
    forecast?.weather[0]?.description === "Winter"
  ) {
    imageURL = `./images/winter-clouds.png`;
  } else if (
    forecast?.weather[0]?.description === "mist" ||
    forecast?.weather[0]?.description === "Mist"
  ) {
    imageURL = `./images/winter-clouds.png`;
  } else {
    imageURL = `./images/clouds.png`;
  }

  const capitalizeFirstLetter = (string: string) =>  {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const description = capitalizeFirstLetter(forecast?.weather[0]?.description);

  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      bg={boxBackgroundColor}
      className="md:hover:scale-[102%] transition-all duration-300 w-[200px] lg:w-full h-[250px] md:h-[300px] py-2 rounded hover:border-sky-500 hover:border-[2px]"
    >
      <Text className="text-center border-b border-[#999] w-4/5 m-auto pb-2 lg:w-full lg:text-xs xl:w-4/5 xl:text-base">
        {hour[index].slice(0, 3) + hour[index].slice(6)}
      </Text>
      <Image
        src={imageURL}
        alt={`Weather Icon`}
        className="w-full p-4 h-32 object-contain"
      />
      <Box className="w-full h-[150px] md:h-[172px] text-center">
        {/* <Text className="w-full pt-14">{forecast.app_min_temp} °</Text> */}
        <Text className="w-full pt-5 md:pt-10">
          {Math.ceil(Number(forecast?.main?.temp - 273))}° C
        </Text>
        <Text>{description}</Text>
      </Box>
    </Box>
  );
};

export default HourlyForecastCard;
