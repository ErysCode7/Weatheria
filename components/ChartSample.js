import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ChartSample({ date, maxTemp, minTemp }) {
  const theme = localStorage.getItem(`chakra-ui-color-mode`);
  const [color, setColor] = useState("");

  useEffect(() => {
    if (theme === "dark") {
      setColor("blue");
    } else if (theme === "light") {
      setColor("red");
    }
  }, [theme]);

  const [dataSample, setDataSample] = useState({
    options: {
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false,
        },
        foreColor: "#ffffff",
      },

      xaxis: {
        categories: date,
      },

      yaxis: {
        categories: "",
      },

      noData: {
        text: "Metrics Unavailable",
        align: "center",
        verticalAlign: "middle",
        style: {
          color: "#FFFFFF",
          fontSize: "15px",
          fontWeight: 500,
        },
      },

      title: {
        style: {
          fontSize: "15px",
          color: color,
        },
        text: `Average Temperature`,
      },
      tooltip: {
        marker: {
          show: false,
        },
        x: {
          format: "dd MMM yyyy",
        },
      },

      responsive: [
        {
          breakpoint: 1000,
          options: {
            xaxis: {
              categories: date.slice(0, 3),
            },
          },
          series: [
            {
              name: "Max Temperature",
              data: maxTemp.slice(0, 3),
            },
            {
              name: "Minimun Temperature",
              data: minTemp.slice(0, 3),
            },
          ],
        },
      ],
    },

    series: [
      {
        name: "Max Temperature",
        data: maxTemp,
      },
      {
        name: "Minimun Temperature",
        data: minTemp,
      },
    ],
  });

  return (
    <div className="w-4/5 m-auto border p-2 mt-10 rounded">
      <Chart
        options={dataSample.options}
        series={dataSample.series}
        type="bar"
        height={300}
      />
    </div>
  );
}
