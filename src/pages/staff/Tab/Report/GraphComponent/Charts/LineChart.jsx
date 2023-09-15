// src/ColumnChart.js
import ReactApexChart from 'react-apexcharts';

const ColumnChart = () => {
  const chartData = {
    series: [
      {
        name: 'Sales',
        data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
      },
    ],
    options: {
      chart: {
        type: 'bar', // Set the chart type to 'bar' for a column chart.
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
    },
  };

  return (
    <div className="chartBox">
      <h4>Person (Count) per Organization</h4>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ColumnChart;
