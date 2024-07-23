import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import React,{useEffect} from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const LineChart = ({ isDashboard = false, relevance, countrydata }) => {
    useEffect(() => {
        console.log(relevance, countrydata);
    }, [relevance, countrydata]);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const data = {
        labels: countrydata,
        datasets: [{
            axis: 'y',
            label: 'My First Dataset',
            data: relevance,
            fill: false,
            backgroundColor:
                'rgb(255, 255, 255)',
            borderColor:
                'rgb(255, 255, 255)'
            ,
            pointBackgroundColor: 'rgb(255, 255, 255)'
            ,
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            borderWidth: 1,
            lineTension: 0.1,
        }]
    };

    const options = {
        maintainAspectRatio: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };
    return (
        <div>
            <Line height={100} data={data} options={options} />
        </div>
    );
};

export default LineChart;