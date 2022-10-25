import { Box, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";

const ForecastCard = ({ forecastDays, index, forecast }) => {
  const boxBackgroundColor = useColorModeValue("#ffffff", "#222222");

  let imageURL;

  if (
    forecast?.weather?.description === "clear sky" ||
    forecast?.weather?.description === "Clear Sky"
  ) {
    imageURL = `./images/clear-sky.png`;
  } else if (
    (forecast?.weather?.description === "few clouds") |
    (forecast?.weather?.description === "Few clouds")
  ) {
    imageURL = `./images/few-clouds.png`;
  } else if (
    forecast?.weather?.description === "scattered clouds" ||
    forecast?.weather?.description === "Scattered clouds"
  ) {
    imageURL = `./images/scattered-clouds.png`;
  } else if (
    forecast?.weather?.description === "overcast clouds" ||
    forecast?.weather?.description === "Overcast clouds" ||
    forecast?.weather?.description === "broken clouds" ||
    forecast?.weather?.description === "Broken clouds"
  ) {
    imageURL = `./images/scattered-clouds.png`;
  } else if (
    forecast?.weather?.description === "light rain" ||
    forecast?.weather?.description === "Light rain" ||
    forecast?.weather?.description === "moderate rain" ||
    forecast?.weather?.description === "Moderate rain" ||
    forecast?.weather?.description === "heavy rain" ||
    forecast?.weather?.description === "Heavy rain" ||
    forecast?.weather.description === "heavy intensity rain"
  ) {
    imageURL = `./images/rain-clouds.png`;
  } else if (
    forecast?.weather?.description === "thundercast clouds" ||
    forecast?.weather?.description === "Thundercast clouds"
  ) {
    imageURL = `./images/thundercast-clouds.png`;
  } else if (
    forecast?.weather?.description === "winter" ||
    forecast?.weather?.description === "Winter"
  ) {
    imageURL = `./images/winter-clouds.png`;
  } else if (
    forecast?.weather?.description === "mist" ||
    forecast?.weather?.description === "Mist"
  ) {
    imageURL = `./images/winter-clouds.png`;
  } else {
    imageURL = `./images/clouds.png`;
  }

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={boxBackgroundColor}
      className="hover:scale-[102%] transition-all duration-300 w-[250px] sm:w-[300px] h-[300px] py-2 rounded"
    >
      <Text className="text-center border-b border-[#999] w-4/5 m-auto pb-2">
        {forecastDays[index]}
      </Text>
      <Image
        src={imageURL}
        alt={`Weather Icon`}
        className="w-full p-4 h-32 object-cover"
      />
      <Box p="6">
        <Heading as="h3" size="xl" mb={2}></Heading>
        <Text>
          Temperature ranges: {forecast.app_min_temp} °C to{" "}
          {forecast.app_max_temp} °C
        </Text>
      </Box>
    </Box>
  );
};

export default ForecastCard;
