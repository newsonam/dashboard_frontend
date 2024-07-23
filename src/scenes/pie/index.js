import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = ({countrydata,likelihood}) => {
    return (
        <Box m="20px" width="200vh" >
            <Header title="Pie Chart" subtitle="Simple Pie Chart " />
            <Box height="75vh">
                <PieChart countrydata={countrydata} likelihood={likelihood} />

            </Box>
        </Box>
    )
}

export default Pie;