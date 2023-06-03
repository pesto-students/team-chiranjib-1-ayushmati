import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import PatientList from "./patient-list";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_URL } from "../../../utils/constant";
import moment from "moment";
import "./reception-dashboard.css";

export default function ReceptionistDashboardTest() {
  const [rows, setRow] = useState([]);
  useEffect(() => {
    console.log("API_URL : " + API_URL);

    axios
      .get(API_URL + "/patientRegistration/listPatient")

      .then((response) => {
        console.log(response.data);
        setRow(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="reception-table-outer-div">
        <div className="reception-table-inner-div">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">MRN</TableCell>
                  <TableCell align="center">Patient Name</TableCell>
                  <TableCell align="center">Ward</TableCell>
                  <TableCell align="center">Room No</TableCell>
                  <TableCell align="center">Bed</TableCell>
                  <TableCell align="center">Admission Date</TableCell>
                  <TableCell align="center">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell
                      align="center"
                      numeric
                      component="a"
                      href={`/patientRegistration/${row._id}`}
                    >
                      {row.mrn}{" "}
                    </TableCell>
                    <TableCell align="center">{row.patientName}</TableCell>
                    <TableCell align="center">{row.ward}</TableCell>
                    <TableCell align="center">{row.room}</TableCell>
                    <TableCell align="center">{row.bed}</TableCell>
                    <TableCell align="center">
                      {moment(row.admissionDate).format("YYYY-MM-DD")}
                    </TableCell>
                    {/* <TableCell align="center">{row.status} </TableCell> */}
                    {row.status === 'ADMITTED'? (
                      <TableCell sx={{color:"white"}}className="admitted-status-div" align="center">
                        <p>{row.status} </p>
                      </TableCell>
                    ) : (
                      <TableCell sx={{color:"Black"}}className="discharged-status-div" align="center">
                        {row.status}{" "}
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}
