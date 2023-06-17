import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../utils/constant";
import moment from "moment";
import "./reception-dashboard.css";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";
import tableIcons from "../../master/MaterialTableIcons";
import { useSelector } from "react-redux";

export default function ReceptionistDashboardTest() {
  const defaultMaterialTheme = createTheme();
  const [data, setData] = useState([]);
  const hospitalName = useSelector((state) => state.hospitalName);

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
            <div style={{ backgroundColor: "#54B435", color: "white", borderRadius: "5px", textAlign: "center", padding: "7px", width: "90px", fontFamily: "Roboto, Helvetica, Arial, sans-serif", fontWeight: "500", fontSize: "0.875rem" }}>
              {row.status.toUpperCase()}
            </div>  
        ) : (
          <div style={{ backgroundColor: "#E57C23", color: "white", borderRadius: "5px", textAlign: "center", padding: "7px", width: "90px", fontFamily: "Roboto, Helvetica, Arial, sans-serif", fontWeight: "500", fontSize: "0.875rem" }}>
            {row.status.toUpperCase()}
          </div>
        )
        }
        </>
      )
    }
  ];
   
  return (
      <>
      <div className="dashboard-backgroud">
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "top",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "90%",
              alignItems: "top",
              justifyContent: "center",
              marginTop:"30px"
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
        </div>
      </>
    );
  
}
