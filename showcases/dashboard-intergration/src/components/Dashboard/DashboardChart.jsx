import Chart from "chart.js/auto";
import { useEffect, useState } from "react";
import Paperation from "../Paperation/Paperation";
import _ from "lodash";

function DashboardChart() {
  const [keyChart, setKeyChart] = useState(Math.random());

  useEffect(() => {
    const options = {
      responsive: true,
      interaction: {
        mode: "index",
        intersect: false,
      },

      plugins: {
        title: {
          display: true,
          text: "Your work summary",
          position: "top",
          align: "start",
          fontSize: 30,
          color: "#fff",
          font: {
            size: 16,
          },
        },
      },
      scales: {
        x: {
          id: "xAxis",
          display: true,
          ticks: {
            color: "#444444",
            major: {
              enabled: true,
            },
            textStrokeColor: "#fff",
          },
          grid: {
            borderColor: "transparent",
            color: "#2c2c2c",
          },
        },
        y: {
          display: true,
          grid: {
            display: false,
          },
          ticks: {
            callback: (value, index, ticks) => {
              return `$${value}`;
            },
          },
        },
      },
    };
    const labels = [
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
    ];
    const datasets = [
      {
        label: "Last 9 month",
        data: Array(labels.length)
          .fill(1)
          .map((el) => Math.random() * 100000),
        backgroundColor: "#008fbb",
        borderColor: "#008fbb",
        tension: 0.3,
      },
      {
        label: "Same period in",
        data: Array(labels.length)
          .fill(1)
          .map((el) => Math.random() * 200000),
        backgroundColor: "#303030",
        borderColor: "#303030",
        tension: 0.3,
        spanGaps: true,
        borderDash: [5],
      },
    ];

    function initializeChart() {
      return new Chart(document.querySelector("#dashboard-chart"), {
        type: "line",
        data: {
          labels: labels,
          datasets: datasets,
        },
        options: options,
      });
    }

    const onResizeChart = _.debounce(() => {
      setKeyChart(Math.random());
      initializeChart();
    }, 100);

    window.addEventListener("resize", onResizeChart);

    initializeChart();
  }, []);

  return (
    <Paperation className="dashboard-chart">
      <canvas key={keyChart} id="dashboard-chart"></canvas>
    </Paperation>
  );
}

export default DashboardChart;
