import React from "react";
import { useSelector } from "react-redux";
import { useGetSixDayForecastQuery } from "../../redux/services/weatherBitApi";
import { latitude, longtitude } from "../../redux/slices/locationSlice";

const Forecast = () => {
  const lat = useSelector(latitude);
  const lon = useSelector(longtitude);
  const { data: weekForeCast } = useGetSixDayForecastQuery({ lat, lon });

  const DAYS = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];

  const dayInWeek = new Date().getDay();
  const forecastDays = DAYS.slice(dayInWeek, DAYS.length).concat(
    DAYS.slice(0, dayInWeek)
  );

  return (
    <>
      {weekForeCast && (
        <>
          {weekForeCast?.data?.slice(0, 7).map((forecast, index) => (
            <section>
              <h2 className="text-white text-2xl">{forecastDays[index]}</h2>
              <h3 className="text-white text-2xl">
                Minimun Temperature ranges: {forecast.app_min_temp} °C to{" "}
                {forecast.app_max_temp} °C
              </h3>
            </section>
          ))}
        </>
      )}
    </>
  );
};

export default Forecast;
