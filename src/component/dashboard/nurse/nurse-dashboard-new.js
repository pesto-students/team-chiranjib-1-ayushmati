import MaterialTable from "material-table";
import { Button, ThemeProvider, createTheme } from "@mui/material";
import tableIcons from "../../master/MaterialTableIcons";
import NusrsePop from "./pop-up-componet";
import { useEffect, useState } from "react";
import { API_URL } from "../../../utils/constant";
import axios from "axios";

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
    { title: "Patient Name", field: "patientData[0].patientName" },
    {
      title: "Ward/Room/Bed",
      field: "patientData[0].ward",
      render: (rowData) => {
        console.log(rowData);
        return (
          <>
            {rowData.patientData[0].ward}/{rowData.patientData[0].room}/{rowData.patientData[0].bed}
          </>
        );
      },
    },
    {
      title: "Medicine Type/Name",
      render: (rowData) => {
        return (
          <>
            {rowData.medicineName}/{rowData.medicineType}
          </>
        );
      },
    },
    { title: "Doctor Instruction", field: "doctorInstructions" },
    { title: "InTake time", field: "inTakeTime" },
    {
      title: "Status",
      field: "status",
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
