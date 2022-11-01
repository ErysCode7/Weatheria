import { Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { useGetForecastQuery } from "../../redux/services/weatherMapApi";
import { latitude, longtitude, query } from "../../redux/slices/locationSlice";
import { List } from "../../utils/interfaces/forecastMap";
import ErrorApi from "../ErrorApi/ErrorApi";
import HourlyForecastCard from "./components/HourlyForecastCard";



export type TypeDate = string[];

const HourlyForecast: NextPage = () => {
const queryData = useSelector(query);
  const { data: forecast, isError } = useGetForecastQuery(queryData);

  const DAYS: TypeDate = [
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

  if (isError) return <ErrorApi />;

  return (
    <>
      {forecast && (
        <Flex gap="4" className="justify-center flex-wrap lg:flex-nowrap">
          {/* <ChartSample date={date} minTemp={minTemp} maxTemp={maxTemp} /> */}
          {forecast?.list
            ?.slice(0, 7)
            .map((forecast: Forecast, index: number) => (
              <HourlyForecastCard
                key={index}
                forecast={forecast}
                index={index}
                forecastDays={forecastDays}
              />
            ))}
        </Flex>
      )}
    </>
  );
};

export default HourlyForecast;
