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
import { Button } from "@mui/material";
 
export default function DoctorPatientTable(props){

    const [rows,setRows]= useState([]);
    const id = props.id;
    console.log(id)

    useEffect(() => {
        console.log("API_URL : " + API_URL);
    
        axios
          .post(API_URL + "/patientTask/patientTaskList",{
            patientID:id
          })
          .then((response) => {
            console.log(response.data);
            setRows(response.data.task);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);
      
    function StatusComp ({status}){
      if(status=="Pending"){
        return(
            <Button sx={{backgroundColor:"#E57C23",color:"white"}} > {status} </Button>         
        )       
    }
    else if(status=="Done"){
        return(
            <Button sx={{backgroundColor:"#54B435",color:"white"}}> {status}</Button>
        )   
    }
    else if(status == "On Alert"){
        return(
            <Button sx={{backgroundColor:"#FC2947",color:"white",width:"auto"}}> {status}</Button>
        )
        
    }
    }

    return (
        <div  style={{height:"500px"}} className="doctor-patient-table-outer-div">
        <div className="doctor-patient-inner-div">
          
          <TableContainer sx={{  }} component={Paper}>
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
                  <TableCell >Medicine Type</TableCell>
                  <TableCell >Medicine</TableCell>
                  <TableCell >Primary Nurse</TableCell>
                  <TableCell >Medicine Intake time</TableCell>
                  <TableCell >Instructions</TableCell>
                  <TableCell align="center">STATUS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ background: "#f1f1f1b6" }}>
                {rows.map((row) => (
                  <TableRow key={row._id}>

                    <TableCell>{row.medicineType}</TableCell>
                    <TableCell>{row.medicineName}</TableCell>
                    <TableCell>{row.primaryNurse}</TableCell>
                    <TableCell>
                      {/* {moment(row.inTakeTime).format("YYYY-MM-DD")} */}
                     {moment.parseZone(row.inTakeTime).local(true).format("YYYY-MM-DD hh:mm:A")}
                    </TableCell>
                    <TableCell >{row.doctorInstructions}</TableCell>

                    {/* {row.status === "COMPLETED" ? (
                      <TableCell sx={{ color: "white" }} align="center">
                        <p className="admitted-status-div">{row.status} </p>
                      </TableCell>
                    ) : (
                      <TableCell sx={{ color: "white" }} align="center">
                        <p className="discharged-status-div">{row.status} </p>
                      </TableCell>
                    )} */}
                    <TableCell align="center">
                      <StatusComp status={row.status}/>  
                    </TableCell>
                    
                    

                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    )
}