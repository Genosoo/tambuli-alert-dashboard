import ReactApexChart from 'react-apexcharts';

const DonutChart = () => {
  const chartData = {
    series: [44, 55, 13, 33,29],
    options: {
      chart: {
        type: 'donut',
      },
      labels: ['Apple', 'Banana', 'Cherry', 'Dates','fdafs'],
    },
  };

  return (
        <div className='chartBox'>
          <h4>Person (Count) per Organization</h4>
          <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="donut"
          height={350}
        
      />
        </div>
  );
};

export default DonutChart;
