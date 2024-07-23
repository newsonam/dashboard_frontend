
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { Pie } from 'react-chartjs-2';




const PieChart = ({ isDashboard=false,countrydata, likelihood }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const chartData = {
        labels: countrydata,
        datasets: [
            {
                data: likelihood,
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40'
                ]
            }
        ]
    };
    return (

        <Pie width={300} data={chartData} />
    )
}

export default PieChart;