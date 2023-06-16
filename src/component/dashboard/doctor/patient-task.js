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
import { useForm } from "react-hook-form";
import {
  bloodGrpList,
  medicineTypeList,
  medicineList,
} from "../../master/master-list";
import Autocomplete from "@mui/material/Autocomplete";
import TaskComponent from "./task-component";
import DoctorPatientTable from "./doctor-patient-table";
import Loader from "../../master/loader";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { BorderBottom } from "@mui/icons-material";
import PeopleSharpIcon from "@mui/icons-material/PeopleSharp";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AccessibleIcon from "@mui/icons-material/Accessible";
import { capitalize } from "@material-ui/core";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

export default function PatientTask() {
  const [patientData, setPatientData] = useState();
  const [primaryDoctorList, setPrimaryDoctorList] = useState([]);
  const [diseaseList, setDiseaseList] = useState([]);
  const hospitalName = useSelector((state) => state.hospitalName);

  // const [medicineList, setmedicineList] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const getPatientData = async () => {
      const response = await axios.get(
        API_URL + `/patientRegistration/getPatient/${id}`
      );
      console.log(response);
      setValue("primaryDoctor", response.data.primaryDoctor);
      setValue("weight", response.data.weight);
      setValue("height", response.data.height);
      setValue("bloodGrp", response.data.bloodGrp);
      setValue("symtoms", response.data.symtoms);
      setValue("disease", response.data.disease);
      setValue("ward", response.data.ward);
      setValue("room", response.data.room);
      setValue("bed", response.data.bed);
      setValue(
        "admissionDate",
        moment(response.data.admissionDate).format("YYYY-MM-DD")
      );
      setPatientData(response.data);
    };
    getPatientData();
  }, []);

  useEffect(() => {
    const getPrimaryDoctorList = async () => {
      try {
        const response = await axios.get(
          API_URL + `/user/listActiveDoctor/${hospitalName}`
        );
        setPrimaryDoctorList(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getPrimaryDoctorList();

    const getDiseaseList = async () => {
      try {
        const response = await axios.get(API_URL + "/disease/listDisease");
        setDiseaseList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getDiseaseList();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const onsubmit = async (data) => {
    console.log(data);
    const newPatientdata = { newPatient: data };
    console.log(newPatientdata.newPatient);
    console.log(id);

    try {
      axios
        .put(API_URL + `/patientRegistration/updatePatient/${id}`, {
          newPatient: data,
        })
        .then((res) => {
          console.log("patient details updated successfully");
        });
    } catch (err) {
      console.error(err);
    }
  };
  // const [open,setOpen] = useState(false)

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <>
      {patientData ? (
        <>
          <div className="patientdata-background-div">
            <div className="patientdata-inner-div">
              <div className="logo-header-Profile">
                <PeopleSharpIcon sx={{ fontSize: 40 }} />
                <h2> Patient Profile </h2>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <div style={{ width: "50%" }}>
                  <div className="logo-sub-heading">
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "0",
                      }}
                    >
                      <InsertEmoticonIcon sx={{ fontSize: 40 }}/>
                      {capitalize(patientData.patientName)}
                    </Typography>
                  </div>
                  <div>
                    <Typography sx={{ display: "flex" }}>
                      <AssignmentIndIcon/>
                      {patientData.mrn}
                    </Typography>
                  </div>

                  <div className="logo-sub-heading">
                  <Typography sx={{ display: "flex", justifyContent: "center",
                        alignItems: "left",
                        marginBottom: "0" }}>
                          <PhoneIphoneIcon/>
                      {patientData.contactNo}
                    </Typography>
                   </div>
                </div>

                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <div>
                    {patientData.ward} / {patientData.room} / {patientData.bed}
                  </div>
                  <div>
                    {patientData.sex} / {patientData.maritalStatus}
                  </div>
                  <div></div>
                </div>
              </div>
              <div
                style={{ borderBottom: "1px solid rgba(0, 0, 0, 0.2)" }}
              ></div>

              <form onSubmit={handleSubmit(onsubmit)}>
                <div className="patient-reg-details-div">
                  <div className="logo-header-Profile">
                    <LocalHospitalIcon sx={{ fontSize: 40 }} />
                    <h2>Clinical Details</h2>
                  </div>

                  <Stack spacing={2} direction="row">
                    <TextField
                      fullWidth
                      id="primaryDoctor"
                      label="Primary Doctor *"
                      placeholder="Joe Doe"
                      variant="standard"
                      select
                      {...register("primaryDoctor", {
                        required: {
                          value: true,
                          message: "primary Doctor is required",
                        },
                      })}
                      value={watch("primaryDoctor") || ""}
                      error={!!errors.primaryDoctor}
                      helperText={errors?.primaryDoctor?.message}
                    >
                      {primaryDoctorList.length > 0
                        ? primaryDoctorList.map((option) => (
                            <MenuItem key={option._id} value={option.firstName}>
                              {option.firstName}
                            </MenuItem>
                          ))
                        : []}
                    </TextField>

                    <TextField
                      fullWidth
                      className="patient-reg-text-field"
                      id="weight"
                      variant="standard"
                      label="Weight"
                      placeholder="50kg"
                      {...register("weight")}
                      value={watch("weight") || ""}
                    />

                    <TextField
                      fullWidth
                      className="patient-reg-text-field"
                      id="height"
                      label="Height"
                      variant="standard"
                      placeholder="50cm"
                      {...register("height")}
                      value={watch("height") || ""}
                    />

                    <TextField
                      className="patient-reg-text-field"
                      fullWidth
                      id="bloodGrp"
                      select
                      label="Blood Grp *"
                      variant="standard"
                      {...register("bloodGrp", {
                        required: {
                          value: true,
                          message: " Blood Group is required",
                        },
                      })}
                      value={watch("bloodGrp") || ""}
                      error={!!errors.bloodGroup}
                      helperText={errors?.bloodGroup?.message}
                    >
                      {bloodGrpList.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Stack>

                  <Stack spacing={2} direction="row">
                    <TextField
                      className="patient-reg-text-field"
                      fullWidth
                      id="symtoms"
                      label="Symtoms *"
                      variant="standard"
                      {...register("symtoms")}
                      value={watch("symtoms") || ""}
                    />

                    <TextField
                      className="patient-reg-text-field"
                      id="disease"
                      fullWidth
                      label="Disease *"
                      variant="standard"
                      select
                      {...register("disease", {
                        required: {
                          value: true,
                          message: "disease is required",
                        },
                      })}
                      value={watch("disease") || ""}
                      error={!!errors.disease}
                      helperText={errors?.disease?.message}
                    >
                      {diseaseList.length > 0
                        ? diseaseList.map((option) => (
                            <MenuItem
                              key={option.diseaseName}
                              value={option.diseaseName}
                            >
                              {option.diseaseName}
                            </MenuItem>
                          ))
                        : []}
                    </TextField>
                  </Stack>

                  <Stack spacing={3} direction="row">
                    <TextField
                      className="patient-reg-text-field"
                      disabled
                      id="ward"
                      fullWidth
                      label="Ward *"
                      variant="standard"
                      {...register("ward")}
                      value={watch("ward") || ""}
                    />

                    <TextField
                      id="room"
                      fullWidth
                      disabled
                      label="Room *"
                      variant="standard"
                      {...register("room")}
                      value={watch("room") || ""}
                    />

                    <TextField
                      id="bed"
                      disabled
                      fullWidth
                      label="Bed *"
                      variant="standard"
                      {...register("bed")}
                      value={watch("bed") || ""}
                    />
                  </Stack>

                  <Stack spacing={2} direction="row">
                    <TextField
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      id="admissionDate"
                      type="date"
                      variant="standard"
                      label="Admission Date *"
                      {...register("admissionDate")}
                      value={watch("admissionDate") || ""}
                    />
                  </Stack>
                </div>

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
                    UPDATE NOW
                  </Button>
                </div>
              </form>
            </div>
            <TaskComponent id={id} />
          </div>
        </>
      ) : (
        <>
          <Loader />
        </>
      )}
    </>
  );
}
