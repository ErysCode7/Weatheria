import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import capitalizeFirstLetter from "../../../helpers/capitalize";
import { List } from "../../../utils/interfaces/forecastMap";
import { TypeDate } from "../Forecast";

type Props = {
  forecast: List;
  index: number;
  forecastDays: TypeDate;
};

const ForecastCard: NextPage<Props> = ({ forecastDays, index, forecast }) => {
  const boxBackgroundColor = useColorModeValue("#ffffff", "#222222");

  let imageURL;

  if (
    // forecast?.weather[0]?.description === "clear Sky" ||
    forecast?.weather[0]?.description === "Clear Sky" ||
    // forecast?.weather[0]?.description === "few clouds" ||
    forecast?.weather[0]?.description === "Few clouds"
  ) {
    imageURL = `clear-sky.png`;
  } else if (
    forecast?.weather[0]?.description === "scattered clouds" ||
    forecast?.weather[0]?.description === "Scattered clouds"
  ) {
    imageURL = `scattered-clouds.png`;
  } else if (
    forecast?.weather[0]?.description === "overcast clouds" ||
    forecast?.weather[0]?.description === "Overcast clouds" ||
    forecast?.weather[0]?.description === "broken clouds" ||
    forecast?.weather[0]?.description === "Broken clouds"
  ) {
    imageURL = `scattered-clouds.png`;
  } else if (
    forecast?.weather[0]?.description === "light rain" ||
    forecast?.weather[0]?.description === "Light rain" ||
    forecast?.weather[0]?.description === "moderate rain" ||
    forecast?.weather[0]?.description === "Moderate rain" ||
    forecast?.weather[0]?.description === "heavy rain" ||
    forecast?.weather[0]?.description === "Heavy rain" ||
    forecast?.weather[0]?.description === "heavy intensity rain"
  ) {
    imageURL = `rain-clouds.png`;
  } else if (
    forecast?.weather[0]?.description === "Thunderstorm with rain" ||
    forecast?.weather[0]?.description === "Thunderstorm with heavy rain"
  ) {
    imageURL = `thundercast-clouds.png`;
  } else if (
    forecast?.weather[0]?.description === "thundercast clouds" ||
    forecast?.weather[0]?.description === "Thundercast clouds"
  ) {
    imageURL = `thundercast-clouds.png`;
  } else if (
    forecast?.weather[0]?.description === "winter" ||
    forecast?.weather[0]?.description === "Winter"
  ) {
    imageURL = `winter-clouds.png`;
  } else if (
    forecast?.weather[0]?.description === "mist" ||
    forecast?.weather[0]?.description === "Mist"
  ) {
    imageURL = `winter-clouds.png`;
  } else {
    imageURL = `clouds.png`;
  }

  const description = capitalizeFirstLetter(forecast?.weather[0]?.description);

  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      bg={boxBackgroundColor}
      className="md:hover:scale-[102%] transition-all duration-300 w-[120px] lg:w-full h-[250px] md:h-[250px] md:w-[200px] py-2 rounded hover:border-sky-500 hover:border-[2px] 2k:h-[420px]"
    >
      <Text className="text-center border-b border-[#999] w-4/5 m-auto pb-2 lg:w-full lg:text-xs xl:w-4/5 xl:text-base 2k:text-2xl 2k:pt-[10px] 2k:pb-[20px]">
        {forecastDays[index]}
      </Text>
      <div className="w-full p-4 h-[100px] 2k:h-[200px] object-contain relative mt-2">
        <Image
          src={`/images/${imageURL}`}
          alt={`Weather Icon`}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <Box className="w-full h-[150px] md:h-[100px] 2k:h-[200px] text-center">
        {/* <Text className="w-full pt-14">{forecast.app_min_temp} °</Text> */}
        <Text className="w-full pt-5 md:pt-10 2k:text-3xl 2k:mb-4">
          {Math.ceil(Number(forecast.main.temp - 273))}° C
        </Text>
        <Text className="font-bold text-sm 2k:text-xl">{description}</Text>
      </Box>
    </Box>
  );
};

export default ForecastCard;
