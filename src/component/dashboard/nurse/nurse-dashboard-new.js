import MaterialTable from "material-table";
import { Button, ThemeProvider, createTheme } from "@mui/material";
import tableIcons from "../../master/MaterialTableIcons";
import NusrsePop from "./pop-up-componet";
import { useState } from "react";

export default function NurseDashboardTest() {
  const defaultMaterialTheme = createTheme();
  const [data ,setData] = useState([]);

  

  const columns = [
    { title: "Patient Name", field: "patientName" },
    { title: "Ward/Room/Bed", field: "WRB[0].ward"},
    { title: "Type/Medicine", field: "typeAndMedicine" },
    { title: "Doctor Instruction", field: "doctorInstructions" },
    { title: "InTake time", field: "inTakeTime" },
    {
      title: "Status",
      field: "status",
      // render: (rowData) => <Button> {rowData.status}</Button>,
      render: (rowData) => {
        return(
            <>
        <NusrsePop data={rowData} />
        </>
        )
      },
    },
  ];
  return (
    <>
    <div style={{width:'100%',display:'flex', alignItems:'center',justifyContent:'center'}}>
    <div style={{width:'90%',alignItems:'center',justifyContent:'center',marginTop:"50px"}} >
    <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialTable
          icons={tableIcons}
          title={"NurseDashboard"}
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




// const data = [
//   {
//     patientName: "Thiru",
//     // WRB: "Ward 1/Room 1/Bed 2",
//     typeAndMedicine: "Tablet/Aptiom",
//     doctorInstructions: "Before lunch",
//     inTakeTime: "10.00 PM",
//     status: "Done",
//   },
//   {
//     patientName: "Sagar",
//     // WRB: "Ward 1/Room 1/Bed 2",
//     typeAndMedicine: "Tablet/Aptiom",
//     doctorInstructions: "Before lunch",
//     inTakeTime: "10.00 PM",
//     status: "Pending",
//   },
//   {
//     patientName: "Chiranjib",
//     // WRB: "Ward 1/Room 1/Bed 2",
//     typeAndMedicine: "Tablet/Aptiom",
//     doctorInstructions: "Before lunch",
//     inTakeTime: "10.00 PM",
//     status: "On Alert",
//   },
//   {
//     patientName: "Mahi",
//     // WRB: "Ward 1/Room 1/Bed 2",
//     typeAndMedicine: "Tablet/Aptiom",
//     doctorInstructions: "Before lunch",
//     inTakeTime: "10.00 PM",
//     status: "On Alert",
//   },
//   {
//     patientName: "Virat",
//     // WRB: "Ward 1/Room 1/Bed 2",
//     typeAndMedicine: "Tablet/Aptiom",
//     doctorInstructions: "Before lunch",
//     inTakeTime: "10.00 PM",
//     status: "Pending",
//   },
//   {
//     patientName: "Thiru",
//     WRB: [{ward:"ward 1",room:"room 2"}],
//     typeAndMedicine: "Tablet/Aptiom",
//     doctorInstructions: "Before lunch",
//     inTakeTime: "10.00 PM",
//     status: "Pending",
//   },
// ];