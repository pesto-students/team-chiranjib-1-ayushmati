import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import NavigationBar from "../../NavgationBar/NavigationBar";

import PatientList from './PatientList';

import "../../../css/common.css";
import { padding } from "@mui/system";
import { left } from "@popperjs/core";

function createData(
  MRN,
  patientName,
  age,
  ward,
  room,
  bed,
  admissionDate,
  status
) {
  return { MRN, patientName, age, ward, room, bed, admissionDate, status };
}

const rows = [
  createData(
    "MRN-1010220",
    "Virat Kholi",
    28,
    "General Ward",
    "Room 1",
    "B1",
    "12/04/2023",
    "Admitted"
  )
  
];




export default function ReceptionistDashboard() {
  return (

    /*
    <>
      <NavigationBar />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>MRN</TableCell>
              <TableCell align="right">Patient Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Ward</TableCell>
              <TableCell align="right">Room No</TableCell>
              <TableCell align="right">Bed</TableCell>
              <TableCell align="right">Admission Date</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.MRN}
                </TableCell>
                <TableCell align="right">{row.patientName}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.ward}</TableCell>
                <TableCell align="right">{row.room}</TableCell>
                <TableCell align="right">{row.bed}</TableCell>
                <TableCell align="right">{row.admissionDate}</TableCell>
                <TableCell align="right">{row.status} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  */

    
    <>
      <NavigationBar />
      <div className="common-backgroud">

        <PatientList />
      </div>
      
      
    </>

  );
}
