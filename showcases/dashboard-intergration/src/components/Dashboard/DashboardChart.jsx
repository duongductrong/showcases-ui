import Chart from "chart.js/auto";
import { useEffect } from "react";
import Paperation from "../Paperation/Paperation";

function DashboardChart() {
  useEffect(() => {
    const options = {
      responsive: true,
      aspectRatio: 1.97658079625,
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

    const chart = new Chart(document.querySelector("#dashboard-chart"), {
      type: "line",
      data: {
        labels: labels,
        datasets: datasets,
      },
      options: options,
    });

    // chart.resize(500, 500);
    // window.addEventListener("resize", () => {
    //   const dashboardChart = document.querySelector(".dashboard-chart");
    //   const { clientWidth, clientHeight } = dashboardChart;

    //   chart.resize(clientWidth, clientHeight);
    // });
  }, []);

  return (
    <Paperation className="dashboard-chart">
      <canvas id="dashboard-chart"></canvas>
    </Paperation>
  );
}

export default DashboardChart;
