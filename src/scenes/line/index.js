import { useEffect } from 'react';
import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = ({ relevance, countrydata }) => {
    useEffect(() => {
        console.log(relevance, countrydata);
    }, [relevance, countrydata]);
    return (
        <Box m="10px">
            <Header title="Line Chart" subtitle="Country data and relevance Line Chart " />
            <Box>
                <LineChart relevance={relevance} countrydata={countrydata} />

            </Box>
        </Box>
    )
}

export default Line;