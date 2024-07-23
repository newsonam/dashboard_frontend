import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import DownOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Line from "../../scenes/line";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import Contacts from "../../scenes/contacts";
import Pie from "../../scenes/pie";


const Dashboard = ({ data, countrydata, sectordata, topicdata, relevance, intensitydata ,likelihood}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const uniquecountries=new Set(countrydata).size;
    const uniquesector=new Set(sectordata).size;
   
  

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700], color: colors.grey[100], fontSize: "14px", fontWeight: "bold",
                            padding: "10px 20px"
                        }}

                    >
                        <DownOutlinedIcon sx={{ mr: "10px" }} />
                        Download Reports
                    </Button>
                </Box>
            </Box>
            {/* grid and charts */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12,1fr)"
                gridAutoRows="140px"
                gap="20px"

            >
                {/* row 1 */}
                <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StatBox
                        // title={uniquecountries}
                        subtitle="Total Countries"
                        progress="0.75"
                        increase={uniquecountries}
                        icon={
                            <EmailIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />



                </Box>

                <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StatBox
                        // title={regiondata}
                        subtitle="Total Relevance"
                        progress="0.5"
                        increase="4"
                        icon={
                            <PointOfSaleIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />



                </Box>

                <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StatBox
                        // title={sectordata}
                        subtitle="Total Sector"
                        progress="0.70"
                        increase={uniquesector}
                        icon={
                            <PersonAddIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />



                </Box>

                <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StatBox
                        // title={topicdata}
                        subtitle="Total Topics"
                        progress="0.60"
                        increase="6"
                        icon={
                            <TrafficIcon
                                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                            />
                        }
                    />



                </Box>
                {/* ROW 2 */}
                <Box
                    gridColumn="span 6"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}

                >
                    <Box
                        mt="6px"
                        p="0 30px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >

                    </Box>

                    <Box height="300px">
                        <Line relevance={relevance} countrydata={countrydata} />
                    </Box>
                </Box>
                {/* transactions */}
                <Box
                    gridColumn="span 6"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    overflow="auto"
                >

                    <Box height="300px">
                        <BarChart data={data} sectordata={sectordata} intensitydata={intensitydata} />
                    </Box>

                </Box>
                {/* ROW 3 */}
                <Box
                    gridColumn="span 6"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    height="700px"
                >

                    <Box height="700px" >
                    <Pie countrydata={countrydata} likelihood={likelihood} />
                    </Box>


                </Box>

                <Box
                    gridColumn="span 6"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    height="700px"
                >

                    <Box height="700px">
                        <Contacts data={data} />
                    </Box>


                </Box>

                {/*  */}

                {/* <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    p="30px"
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        sx={{mb:"15px"}}
                    >
                        G
                    </Typography>
                    <Box height="200px" mt="-20px">
                        <GeographyChart isDashboard="true" />
                    </Box>



                </Box> */}
                {/*  */}
            </Box>
        </Box>
    );
}
export default Dashboard;
