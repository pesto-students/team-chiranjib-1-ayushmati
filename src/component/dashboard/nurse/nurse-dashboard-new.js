import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";
import tableIcons from "../../master/MaterialTableIcons";
import NusrsePop from "./pop-up-componet";
import { useEffect, useState } from "react";
import { API_URL } from "../../../utils/constant";
import axios from "axios";
import moment from "moment";
import "../../../css/common.css";
import "../../../css/patient-table.css";


export default function NurseDashboardTest() {
  const defaultMaterialTheme = createTheme();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post(API_URL + `/patientTask/nurseTaskList`)

      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const columns = [
    { title: "Patient Name", field: "patientData[0].patientName",
      cellStyle: {
        width: "500px"
      }
   },
    {
      title: "Ward/Room/Bed",
      field: "patientData[0].ward",
      sorting: false,
      cellStyle: {
        width: "500px"
      },

      render: (rowData) => {
        console.log(rowData);
        return (
          <>
            {rowData.patientData[0].ward} / {rowData.patientData[0].room} / {rowData.patientData[0].bed}
          </>
        );
      },
    },
    {
      title: "Medicine Type/Name",
      cellStyle: {
        width: "400px"
      },
      sorting: false,
      render: (rowData) => {
        return (
          <>
            {rowData.medicineType} / {rowData.medicineName}
          </>
        );
      },
    },
    { title: "Doctor Instruction", field: "doctorInstructions", sorting: false,
      cellStyle: {
        width: "1000px"
      }
  },
    { title: "InTake time", field: "inTakeTime", 
    cellStyle: {
      width: "300px"
    },
    render: (rowData) => {
      // let indianDate = new Date(Date.parse(rowData.inTakeTime));
      // indianDate = rowData.inTakeTime.toLocaleString();
      return(
      <>
        {moment.parseZone(rowData.inTakeTime).local(true).format("h:mm A")}
      </>
    )} },

    {
      title: "Status",
      field: "status",
      cellStyle: {
        width: "30px"
      },
      // render: (rowData) => <Button> {rowData.status}</Button>,
      render: (rowData) => {
        return (
          <>
            <NusrsePop data={rowData} />
          </>
        );
      },
    },
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
