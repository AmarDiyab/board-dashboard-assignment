import Chart from 'react-google-charts';
import React from 'react'

const LineChart = () => {

  const data = [
    ["Year", "Guest", "User"],
    ["Week1", 200, 400],
    ["Week2", 1000, 1400],
    ["Week3", 600, 300],
    ["Week4", 1330, 1340],
  ];

  const options = {
    curveType: "function"
  }

  return (
    <div id="chart#1" className='my-4 border rounded-3xl bg-white py-5'>
      <h1 className='text-base ml-6'>Activities</h1>
      <div className='flex'>
        <h1 className='text-sm font-extralight ml-7'>May-June 2021</h1>
      </div>
      <Chart chartType="LineChart" width="100%" height="100%" data={data} options={options}/>
    </div>
  )
}

export default LineChart
