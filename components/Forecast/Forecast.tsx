import { Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { useGetSixDayForecastQuery } from "../../redux/services/weatherBitApi";
import { latitude, longtitude } from "../../redux/slices/locationSlice";
import { Datum } from "../../utils/interfaces/weatherBit";
import ErrorApi from "../ErrorApi/ErrorApi";
import ForecastCard from "./components/ForecastCard";

export type TypeDate = string[];

const Forecast: NextPage = () => {
  const lat = useSelector(latitude);
  const lon = useSelector(longtitude);
  const { data: weekForeCast, isError } = useGetSixDayForecastQuery({
    lat,
    lon,
  });

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
      {weekForeCast && (
        <Flex gap="4" className="justify-center flex-wrap lg:flex-nowrap">
          {/* <ChartSample date={date} minTemp={minTemp} maxTemp={maxTemp} /> */}
          {weekForeCast?.data
            ?.slice(0, 7)
            .map((forecast: Datum, index: number) => (
              <ForecastCard
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

export default Forecast;
