import { Flex, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { useGetForecastQuery } from "../../redux/services/weatherMapApi";
import { query } from "../../redux/slices/locationSlice";
import { List } from "../../utils/interfaces/forecastMap";
import ErrorApi from "../ErrorApi/ErrorApi";
import HourlyForecastCard from "./components/HourlyForecastCard";

export type TypeDate = string[];

const HourlyForecast: NextPage = () => {
  const queryData = useSelector(query);
  const { data: forecast, isError } = useGetForecastQuery(queryData);

  let hours = forecast?.list?.slice(0, 7).map((hour: any) => {
    return hour.dt_txt.substring(10, 20);
  });

  const hour = hours?.map((hour: string): string => {
    return moment(hour, "HH:mm:ss").format("h:mm:ss A");
  });



  return (
    <>
      {forecast && (
        <>
          <Heading className="text-center lg:text-left" fontSize="20px">
            Hourly Forecast
          </Heading>
          <Flex gap="4" className="justify-center flex-wrap lg:flex-nowrap">
            {/* <ChartSample date={date} minTemp={minTemp} maxTemp={maxTemp} /> */}
            {forecast?.list
              ?.slice(0, 7)
              .map((forecast: List, index: number) => (
                <HourlyForecastCard
                  key={index}
                  forecast={forecast}
                  index={index}
                  hour={hour}
                />
              ))}
          </Flex>
        </>
      )}
    </>
  );
};

export default HourlyForecast;
