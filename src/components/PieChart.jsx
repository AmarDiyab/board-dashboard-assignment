import React from 'react'
import Chart from 'react-google-charts'

const PieChart = () => {

    const pieData = [
        ["Clothes", "Percentage"],
        ["Basic Tees", 55],
        ["Custom Short Pants", 31],
        ["Super Hoodies", 14]
    ]

    return (
        <div className='h-full w-fit my-16' >
            <Chart chartType="PieChart" data={pieData} width={"100%"} ></Chart>
        </div>
    )
}

export default PieChart