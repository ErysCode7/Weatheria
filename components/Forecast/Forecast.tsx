import { NextPage } from "next";
import { useSelector } from "react-redux";
import { useGetSixDayForecastQuery } from "../../redux/services/weatherBitApi";
import { latitude, longtitude } from "../../redux/slices/locationSlice";
import ErrorApi from "../ErrorApi/ErrorApi";
import ForecastCard from "./components/ForecastCard";

const Forecast: NextPage = () => {
  const lat = useSelector(latitude);
  const lon = useSelector(longtitude);
  const { data: weekForeCast, isError } = useGetSixDayForecastQuery({
    lat,
    lon,
  });

  const DAYS = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];

  const dayInWeek = new Date().getDay();
  const forecastDays = DAYS.slice(dayInWeek, DAYS.length).concat(
    DAYS.slice(0, dayInWeek)
  );

  //   const date = weekForeCast?.data?.slice(0, 7).map((forecast) => {
  //     return forecast?.datetime;
  //   });

  //   const minTemp = weekForeCast?.data?.slice(0, 7).map((forecast) => {
  //     return forecast?.app_min_temp;
  //   });

  //   const maxTemp = weekForeCast?.data?.slice(0, 7).map((forecast) => {
  //     return forecast?.app_max_temp;
  //   });

  if (isError) return <ErrorApi />;

  return (
    <>
      {weekForeCast && (
        <>
          {/* <ChartSample date={date} minTemp={minTemp} maxTemp={maxTemp} /> */}
          {weekForeCast?.data?.slice(0, 7).map((forecast, index: number) => (
            <ForecastCard
              forecast={forecast}
              index={index}
              forecastDays={forecastDays}
            />
          ))}
        </>
      )}
    </>
  );
};

export default Forecast;
