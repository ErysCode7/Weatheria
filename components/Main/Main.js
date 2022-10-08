import {
  CategoryScale,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import Chart from "chart.js/auto";
import React, { useEffect } from "react";
// import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { useGetWeatherQuery } from "../../redux/services/weatherMapApi";
import {
  getLatitude,
  getLongtitude,
  query,
} from "../../redux/slices/locationSlice";
import Forecast from "../Forecast/Forecast";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Main = () => {
  const dispatch = useDispatch();
  const queryData = useSelector(query);

  const { data: weather } = useGetWeatherQuery(queryData);

  useEffect(() => {
    dispatch(getLatitude(weather?.coord?.lat));
    dispatch(getLongtitude(weather?.coord?.lon));
  }, [weather]);

  // const temperature = [];
  // const timeFrame = [];

  // const temperatureData = forecast?.list?.slice(0, 7).map((temp) => {
  //   return Math.ceil(Number(temp?.main?.temp) - 273);
  // });

  // const timeFrameData = forecast?.list?.slice(0, 7).map((time) => {
  //   return time?.dt_txt;
  // });

  // const data = {
  //   labels: timeFrameData,
  //   datasets: [
  //     {
  //       label: "Average Temperature",
  //       data: temperatureData,
  //       fill: false,
  //       backgroundColor: "#0071bd",
  //       borderColor: "#0071bd",
  //     },
  //   ],
  // };

  // const options = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  // };

  // console.log(forecast);

  return (
    <>
      {weather && (
        <main className="mt-5">
          <div>
            <div className="bg-[#21212] w-4/5 m-auto p-5 text-white">
              <img
                className="w-48"
                src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
                alt="/"
              />
              <h1 className="text-5xl">{weather?.name}</h1>
              <h2>{weather?.sys?.country}</h2>
              <p>
                The weather condition in {weather?.name},{" "}
                {weather?.sys?.country} is described as {""}
                {weather?.weather?.map((weather) => (
                  <span className="font-bold" key={weather?.description}>
                    {weather?.description}
                  </span>
                ))}
                <p className="mb-8 text-justify">
                  <span className="font-semibold">
                    {Math.ceil(Number(weather?.main?.temp - 273))} °C and a
                    humidity of {weather?.main?.humidity}%.
                  </span>
                </p>
              </p>
            </div>
          </div>
          <Forecast />
          {/* <div className="md:w-4/5 m-auto">
            <Line
              data={data}
              datasetIdKey="id"
              className="bg-transparent"
            />
          </div> */}
        </main>
      )}
    </>
  );
};

export default Main;
