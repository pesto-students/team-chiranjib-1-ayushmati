import MaterialTable from "material-table";
import { Button, ThemeProvider, createTheme } from "@mui/material";
import tableIcons from "../../master/MaterialTableIcons";

export default function NurseDashboardTest() {
  const defaultMaterialTheme = createTheme();
  const data = [
    {
      patientName: "Thiru",
      WRB: "Ward 1/Room 1/Bed 2",
      typeAndMedicine: "Tablet/Aptiom",
      doctorInstructions: "Before lunch",
      inTakeTime: "10.00 PM",
      status: "Done",
    },
    {
      patientName: "Sagar",
      WRB: "Ward 1/Room 1/Bed 2",
      typeAndMedicine: "Tablet/Aptiom",
      doctorInstructions: "Before lunch",
      inTakeTime: "10.00 PM",
      status: "Pending",
    },
    {
      patientName: "Chiranjib",
      WRB: "Ward 1/Room 1/Bed 2",
      typeAndMedicine: "Tablet/Aptiom",
      doctorInstructions: "Before lunch",
      inTakeTime: "10.00 PM",
      status: "On Alert",
    },
    {
      patientName: "Mahi",
      WRB: "Ward 1/Room 1/Bed 2",
      typeAndMedicine: "Tablet/Aptiom",
      doctorInstructions: "Before lunch",
      inTakeTime: "10.00 PM",
      status: "On Alert",
    },
    {
      patientName: "Virat",
      WRB: "Ward 1/Room 1/Bed 2",
      typeAndMedicine: "Tablet/Aptiom",
      doctorInstructions: "Before lunch",
      inTakeTime: "10.00 PM",
      status: "Pending",
    },
    {
      patientName: "Thiru",
      WRB: "Ward 1/Room 1/Bed 2",
      typeAndMedicine: "Tablet/Aptiom",
      doctorInstructions: "Before lunch",
      inTakeTime: "10.00 PM",
      status: "Pending",
    },
  ];

  const columns = [
    { title: "Patient Name", field: "patientName" },
    { title: "Ward/Room/Bed", field: "WRB" },
    { title: "Type/Medicine", field: "typeAndMedicine" },
    { title: "Doctor Instruction", field: "doctorInstructions" },
    { title: "InTake time", field: "inTakeTime" },
    {
      title: "Status",
      field: "status",
      // render: (rowData) => <Button> {rowData.status}</Button>,
      render: (rowData) => {
        if (rowData.status == "Pending") {
          return <Button sx={{backgroundColor:"#E57C23",color:"white"}}> {rowData.status}</Button>;
        } else if (rowData.status == "Done") {
          return <Button sx={{backgroundColor:"#54B435",color:"white"}}> {rowData.status}</Button>;
        } else if (rowData.status == "On Alert")
          return <Button sx={{backgroundColor:"#FC2947",color:"white"}}> {rowData.status}</Button>;
      },
    },
  ];
  return (
    <>
      <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialTable
          icons={tableIcons}
          title={"NurseDashboard"}
          columns={columns}
          data={data}
          options={{
            headerStyle: {
              backgroundColor: "#01579b",
              color: "#FFF",
            },
          }}
        />
      </ThemeProvider>
    </>
  );
}
