import React from "react";

const ForecastCard = ({ forecastDays, index, forecast }) => {
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
    forecast?.weather?.description === "Heavy rain"
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

  console.log(forecast?.weather);

  return (
    <section>
      <h2 className="text-2xl">{forecastDays[index]}</h2>
      <h3 className="text-2xl">
        Minimun Temperature ranges: {forecast.app_min_temp} °C to{" "}
        {forecast.app_max_temp} °C
      </h3>
    </section>
  );
};

export default ForecastCard;
