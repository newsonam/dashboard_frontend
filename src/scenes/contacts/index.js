import { Box , useTheme } from "@mui/material";
import { DataGrid ,GridToolbar} from "@mui/x-data-grid";
import { tokens } from "../../theme";

import Header from "../../components/Header";

const Contacts = ({data}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "_id", headerName: "Id" ,flex:1 },
        { field: "intensity", headerName: "Intensity" ,flex:1 },
        { field: "likelihood", headerName: "Likelihood"  },

        {
            field: "relevance",
            headerName: "Relevance",
            flex: 1,
            cellClassName: "name-column-cell"
        },
        {
            field: "topic",
            headerName: "Topics",
            flex: 1,
        },
        {
            field: "region",
            headerName: "Region",
            flex: 1,
        },
        {
            field: "country",
            headerName: "Country",
            flex: 1,
        },
        {
            field: "sector",
            headerName: "Sector",
            flex: 1,
        },
  
    ]
    return (
        <Box m="20px">
            <Header title="DETAILS" subtitle="Details for Future Reference" />
            <Box m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        border: "none",
                    },
                    "& .name-column-cell": {
                        color: "colors.greenAccent[300]",
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400]
                    },
                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: colors.blueAccent[700],
                        borderTop: "none",
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    }

                }}
            >
                <DataGrid
                    rows={data}
                    columns={columns}
                    slots={{Toolbar:GridToolbar}}
                    getRowId={(row) => row._id}
                />
            </Box>
        </Box>
    );
}
export default Contacts;