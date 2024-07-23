import { useState, useEffect } from 'react';
import Header from "./Header";
import 'chart.js/auto';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);




const BarChart = ({ sectordata,intensitydata }) => {

  useEffect(() => {
    if (sectordata || intensitydata ) {
      console.log(sectordata);
      console.log(intensitydata);
    }
  }, [sectordata,intensitydata]);


  const bardata = {

    labels: sectordata,
    datasets: [
      {
        label: "Intensity",
        data: intensitydata,
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "white",
        borderWidth: 2,
        lineTension: 20
      }
    ]
  };

  return (
    <div className="chart-container">
      <Header title="Bar Chart" subtitle="sector data and intensity data bar Chart " />
      <Bar
        data={bardata}
        height={100}
        options={
          
          {
          plugins: {
            title: {
              display: true,
              text: "Sector with its intensity"
            },
            legend: {
              display: false
            }
            
          },
          scales: {
            y: {
              beginAtZero: false,
              ticks: {
                callback: function(value) {
                  return value; // Custom function to format tick labels if needed
                },
                stepSize: 20 // Adjust step size to control gaps between ticks
              },
            }
          }

        }}
      />
    </div>



  );
}


export default BarChart;