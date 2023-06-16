import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_URL } from "../../../utils/constant";
import moment from "moment";
import TextField from "@mui/material/TextField";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import SearchBar from "material-ui-search-bar";


function NurseDashboard() {

  const [rows, setRows] = useState([]);

  
  return (
    <>
      <div className="doctor-patient-table-outer-div">
        <div className="doctor-patient-inner-div">
          
          <TableContainer sx={{ borderRadius: "30px" }} component={Paper}>
            <Table
              sx={{ minWidth: 400 }}
              size="small"
              aria-label="a dense table"
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
            >
              <TableHead>
                <TableRow sx={{ background: "#4545453e" }}>
                  <TableCell align="center">Patient Name</TableCell>
                  <TableCell align="center">Ward/Room/Bed</TableCell>
                  <TableCell align="center">Type/Medicine</TableCell>
                  <TableCell align="center">Doctor Instruction</TableCell>
                  <TableCell align="center">InTake time</TableCell>
                  <TableCell align="center">STATUS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ background: "#f1f1f1b6" }}>
                {rows.map((row) => (
                  <TableRow key={row._id}>

                    <TableCell align="center">{row.medicineType}</TableCell>
                    <TableCell align="center">{row.medicineName}</TableCell>
                    <TableCell align="center">{row.primaryNurse}</TableCell>
                    <TableCell align="center">
                      {moment(row.inTakeTime).format("YYYY-MM-DD")}
                    </TableCell>
                    <TableCell align="center">{row.doctorInstructions}</TableCell>

                    {row.status === "COMPLETED" ? (
                      <TableCell sx={{ color: "white" }} align="center">
                        <p className="admitted-status-div">{row.status} </p>
                      </TableCell>
                    ) : (
                      <TableCell sx={{ color: "white" }} align="center">
                        <p className="discharged-status-div">{row.status} </p>
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

export default NurseDashboard;
