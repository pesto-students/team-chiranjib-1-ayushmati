import { Button } from "@mui/material";
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'

export default function NusrsePop (props){

    function ButtonItem ({status,clickFunction}){

        if(status=="Pending"){
            return(
                <Button sx={{backgroundColor:"#E57C23",color:"white"}} onClick={clickFunction} > {status} </Button>
            )
            
        }
        else if(status=="Done"){
            return(
                <Button sx={{backgroundColor:"#54B435",color:"white"}}> {status}</Button>
            )   
        }
        else if(status == "On Alert"){
            return(
                <Button sx={{backgroundColor:"#FC2947",color:"white"}} onClick={clickFunction}> {status}</Button>
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
          {`Are you sure, Has ${props.data.patientName} taken the medicine?`}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleClose} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
        </>
    )
}