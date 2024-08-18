import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
export default function LineChart() {
  return (
    <Line
    options={{
      legend: {display: false}
    }}
      datasetIdKey="id"
      data={{
        labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"],
        datasets: [
          {
            id: 1,
            label: "",
            data: [120, 110, 115, 140, 160, 190, 150, 132, 160, 166, 170, 190],
          },
          // {
          //   id: 2,
          //   label: '',
          //   data: [3, 2, 1],
          // },
        ],
      }}
    />
  );
}
