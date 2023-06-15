import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../utils/constant";
import moment from "moment";
import "./reception-dashboard.css";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";
import tableIcons from "../../master/MaterialTableIcons";
import { Button } from "@mui/material";

export default function ReceptionistDashboardTest() {
  const defaultMaterialTheme = createTheme();
  const [data, setData] = useState([]);
  const hospitalName = localStorage.getItem('hospitalName');

  useEffect(() => {
    axios
      .get(API_URL + `/patientRegistration/listPatient/${hospitalName}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  const columns = [
    { title: "MRN", field: "mrn",
      cellStyle: {
        width: "400px"
      },
      render: rowData => (
          <a href={`/patientRegistration/${rowData._id}`} rel="noopener noreferrer">
            {rowData.mrn}
          </a>
      )
    },
    { title: "Patient Name", field: "patientName",
      cellStyle: {
        width: "500px"
      }
    },
    { title: "Primary Doctor", field: "primaryDoctor",
      cellStyle: {
        width: "500px"
      }
    },
    { title: "Ward", field: "ward",
      cellStyle: {
        width: "300px"
      }
    },
    { title: "Room", field: "room",
      cellStyle: {
        width: "100px"
      }
    },
    { title: "Bed", field: "bed",
      cellStyle: {
        width: "100px"
      }
    },
    { title: "Admission Date", field: "admissionDate",
      cellStyle: {
        width: "400px"
      },
      render: (rowData) => {
        return(
        <>
          {moment(rowData.admissionDate).format("YYYY-MM-DD")}
        </>
      )}
    },
    { title: "Status", field: "status",
      cellStyle: {
        width: "100px"
      },
      render: row => (
        <>
        {(row.status === "ADMITTED") ? (
          <div style={{backgroundColor:"#54B435", color:"white", borderRadius:"5px", textAlign:"center", padding:"7px", width:"100px"}}> {row.status}</div>
        ) : (
          <Button sx={{backgroundColor:"#E57C23",color:"white", borderRadius:"5px", textAlign:"center", padding:"7px", width:"100px"}}  > {row.status} </Button>
          )}
        </>
      )
    }
  ];
   
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "90%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <ThemeProvider theme={defaultMaterialTheme}>
            <MaterialTable
              icons={tableIcons}
              title={""}
              columns={columns}
              data={data}
              options={{
                headerStyle: {
                  backgroundColor: "#27a2ee",
                  color: "#FFF",
                },
              }}
            />
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}
