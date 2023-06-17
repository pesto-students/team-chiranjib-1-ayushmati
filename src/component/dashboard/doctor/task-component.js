import axios from "axios";
import { API_URL } from "../../../utils/constant";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./patient-task.css";
import Typography from "@mui/material/Typography";
import moment from "moment";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Controller, useForm } from "react-hook-form";
import {
  bloodGrpList,
  medicineTypeList,
  medicineList,
} from "../../master/master-list";
import Autocomplete from "@mui/material/Autocomplete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DoctorPatientTable from "./doctor-patient-table";
import { useSelector } from "react-redux";
import TableViewSharpIcon from "@mui/icons-material/TableViewSharp";
import "./task-component.css";
import AddIcon from '@mui/icons-material/Add';

export default function TaskComponent(props) {
  const [primaryNurseList, setPrimaryNurseList] = useState([]);
  const id = props.id;
  const isDischarged = props.isDischarged;
  
  const currentDate = moment().format('YYYY-MM-DDTHH:mm');

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
    watch: watch2,
    setValue: setValue2,
    control: control2,
    reset: reset2,
  } = useForm();

  const doctorName = useSelector((state) => state.firstName);

  const onTaskSubmit = (data) => {
    const tempPrimaryNurse = primaryNurseList.filter((list) => {
      return list._id == watch2("primaryNurse");
    });

    data.primaryNurse = tempPrimaryNurse[0].firstName;
    data.primaryNurseID = tempPrimaryNurse[0]._id;
    data.doctorInstructions =
      "By " + doctorName + " - " + data.doctorInstructions;

    try {
      data.patientID = id;
      axios
        .post(API_URL + `/patientTask/createPatientTask`, {
          newTask: data,
        })
        .then((res) => {
          if (res.status === 201) {
            console.log("patient task created successfully");
          } else {
            Promise.reject();
          }
        });
    } catch (err) {
      console.error(err);
    }

    reset2({});
  };

  const hospitalName = useSelector((state) => state.hospitalName);

  useEffect(() => {
    const getPrimaryNurseList = async () => {
      try {
        const response = await axios.get(
          API_URL + `/user/listActiveNurse/${hospitalName}`
        );
        setPrimaryNurseList(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getPrimaryNurseList();
  }, []);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="patientdata-inner-div">
      <form onSubmit={handleSubmit2(onTaskSubmit)}>
        <div className="patient-prescription-header">
        <div className="logo-Heading">
        <AddIcon sx={{ fontSize: 40 }} />
        <h2>New Prescription </h2>
        
        </div>
         
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TableViewSharpIcon onClick={handleClickOpen} />
            <p className="signup-link">Check previous prescriptions</p>
          </div>
        </div>
        <div>
          <Stack spacing={2} direction="row">
            <TextField
              className="patient-reg-text-field"
              fullWidth
              id="Medicine-type"
              select
              label="Medicine type *"
              variant="standard"
              {...register2("medicineType", {
                required: {
                  value: true,
                  message: " Medicine Type is required",
                },
              })}
              error={!!errors2.medicineType}
              helperText={errors2?.medicineType?.message}
              value={watch2("medicineType") || ""}
            >
              {medicineTypeList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <Autocomplete
              fullWidth
              id="medicine"
              freeSolo
              options={medicineList.map((option) => option.value)}
              value={watch2("medicine") || ""}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Medicine*"
                  variant="standard"
                  {...register2("medicine", {
                    required: {
                      value: true,
                      message: " Medicine is required",
                    },
                  })}
                  error={!!errors2.medicine}
                  helperText={errors2?.medicine?.message}
                />
              )}
            />
          </Stack>
          <Stack spacing={2} direction="row">
            <TextField
              fullWidth
              id="primary Nurse"
              label="Primary Nurse *"
              placeholder="Joe Doe"
              variant="standard"
              select
              {...register2("primaryNurse", {
                required: {
                  value: true,
                  message: "Primary Nurse is required",
                },
              })}
              value={watch2("primaryNurse") || ""}
              error={!!errors2.primaryNurse}
              helperText={errors2?.primaryNurse?.message}
            >
              {primaryNurseList.length > 0
                ? primaryNurseList.map((option) => (
                    <MenuItem key={option._id} value={option._id}>
                      {option.firstName}
                    </MenuItem>
                  ))
                : []}
            </TextField>
            <TextField
              fullWidth
              className="patient-reg-text-field"
              id="medicineComment"
              variant="standard"
              label="Doctor Instructions"
              placeholder="Before/After breakfast"
              {...register2("doctorInstructions")}
              value={watch2("doctorInstructions") || ""}
            />
            <TextField
              id="MedIntakeTime"
              InputLabelProps={{ shrink: true }}
              type="datetime-local"
              fullWidth
              variant="standard"
              label="Medicine Intake time *"
              className="patient-reg-text-field"
              {...register2("inTakeTime", {
                required: {
                  value: true,
                  message: " Medicine Intake time is required",
                },
              })}
              InputProps={{
                inputProps: {
                  min: currentDate,
                },
              }}
              value={watch2("inTakeTime") || ""}
              error={!!errors2.inTakeTime}
              helperText={errors2?.inTakeTime?.message}
            />
          </Stack>
        </div>
        
        {!isDischarged ? (              
            
        <div className="signup-btn">
          <Button
            sx={{
              borderRadius: 20,
              backgroundColor: "#54B435",
              justifyContent: "center",
              paddingLeft: "60px",
              paddingRight: "60px",
            }}
            variant="contained"
            type="submit"
          >
            ADD Prescription
          </Button>
        </div>
        ):<div style={{height: "20px"}}></div>}


        <Dialog
          open={open}
          maxWidth
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogActions>
            <DoctorPatientTable id={id} />
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}
