import React, { useState } from "react";
import "./dashboard.scss";
import Chart from "react-apexcharts";
import CountUp from "react-countup";

const Dashboard = () => {
  const [options, setOptions] = useState({
    chart: {
      background: "rgb(80, 80, 172",
      foreColor: "#333",
      toolbar: { show: false },
    },
    xaxis: {
      categories: ["December", "January", "February", "March"],
      labels: { show: true, style: { colors: "lightgrey" } },
    },
    yaxis: { labels: { style: { colors: "lightgrey" } } },
    plotOptions: { bar: { horizontal: false } },
    fill: { colors: ["#430000"] },
    dataLabels: { enabled: false },
  });

  const [series, setSeries] = useState([
    { name: "Vaccinations", data: [54.565, 163.445, 212.355, 234.565] },
  ]);

  const totalVaccinations = 27880432;

  return (
    <div className="dashboard">
      <h1 className="dashboard__totalNumber">
        <CountUp end={totalVaccinations} duration={1.5} separator="," />{" "}
        vaccinations
      </h1>
      <div className="dashboard__graph">
        <Chart
          options={options}
          series={series}
          type="bar"
          height="250"
          width="100%"
        />
      </div>
    </div>
  );
};

export default Dashboard;
