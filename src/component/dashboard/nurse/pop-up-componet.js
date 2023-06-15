import { Button } from "@mui/material";
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'
import axios from "axios";
import { API_URL } from "../../../utils/constant";
import { useNavigate } from "react-router-dom";


export default function NusrsePop (props){

  const navigate = useNavigate();

    function ButtonItem ({status,clickFunction}){

        if(status=="Pending"){
            return(
                <Button sx={{backgroundColor:"#E57C23",color:"white", width:"100px"}} onClick={clickFunction} > {status} </Button>
            )
            
        }
        else if(status=="Done"){
            return(
              <div style={{ backgroundColor: "#54B435", color: "white", borderRadius: "5px", textAlign: "center", padding: "7px", width: "85px", fontFamily: "Roboto, Helvetica, Arial, sans-serif", fontWeight: "500", fontSize: "0.875rem" }}>
                {status.toUpperCase()}
              </div>
            )  
        }
        else if(status == "On Alert"){
            return(
                <Button sx={{backgroundColor:"#FC2947",color:"white", width:"100px"}} onClick={clickFunction}> {status}</Button>
            )
            
        }

    }
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
        
      };
      const handleYes = (data) => {

        axios
          .post(API_URL + `/patientTask/updateTask`, {
            _id: data,
          })
          .then((res) => {
            if (res.status === 201) {
              console.log("patient task completed successfully");
            } else {
              Promise.reject();
            }
          });

        setOpen(false)
        setTimeout(()=>{
          navigate(0)
        },2000)
      };
    return (
        <>
        
        {/* <Button sx={{backgroundColor:"#E57C23",color:"white"}} onClick={handleClickOpen}> {props.data.status} </Button> */}
        <ButtonItem status={props.data.status} clickFunction={handleClickOpen}/>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Are you sure, Has ${props.data.patientData[0].patientName} taken the medicine?`}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={()=>{
            handleYes(props.data._id)
          }} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
        </>
    )
}