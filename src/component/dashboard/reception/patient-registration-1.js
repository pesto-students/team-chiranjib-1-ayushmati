import { useForm } from "react-hook-form";
import {
  genderList,
  maritalStatusList,
  stateList,
  countryList,
  townCityList,
  bloodGrpList,
} from "../../master/master-list";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../utils/constant";
import "./patient-registration.css";
import { useEffect } from "react";
import { useState } from "react";



function PatienRegistrationTest() {
    const [primaryDoctorList, setPrimaryDoctorList] = useState([]);
    const [diseaseList, setDiseaseList] = useState([]);

    useEffect(()=>{
        const getPrimaryDoctorList = async () => {
            try {
              const response = await axios.get(API_URL+"/user/listActiveDoctor"); 
               setPrimaryDoctorList(response.data);
               console.log(response.data)
            } catch (error) {
              console.error(error);
            }
          };
          getPrimaryDoctorList();
      
          const getDiseaseList = async () => {
            try {
              const response = await axios.get(API_URL+"/disease/listDisease");
              setDiseaseList(response.data);
            // diseaseList = {...response.data}
            } catch (error) {
              console.error(error);
            }
          };
          getDiseaseList();
  
    },[])

  const onsubmit = (data) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  return (
    <>
      <div className="patient-reg-outer-div">
        <div className="patient-reg-inner-div">
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="patient-reg-details-div">
              <h2>Personal Details</h2>
              <Stack spacing={2} direction="row">
                <TextField
                  className="patient-reg-text-field"
                  id="patientName"
                  label="Patient Name *"
                  placeholder="Joe Doe"
                  variant="standard"
                  fullWidth
                  {...register("patientName", {
                    required: {
                      value: true,
                      message: "Patient Name is required",
                    },
                  })}
                  error={!!errors.patientName}
                  helperText={errors?.patientName?.message}
                />

                <TextField
                  id="dateOfBirth"
                  InputLabelProps={{ shrink: true }}
                  type="date"
                  fullWidth
                  variant="standard"
                  label="Date Of Birth *"
                  className="patient-reg-text-field"
                  {...register("dateOfBirth", {
                    required: {
                      value: true,
                      message: "Date Of Birth is required",
                    },
                  })}
                  error={!!errors.dateOfBirth}
                  helperText={errors?.dateOfBirth?.message}
                />
              </Stack>
              <Stack direction="row" spacing={2}>
                <TextField
                  id="sex"
                  select
                  label="Sex *"
                  variant="standard"
                  className="patient-reg-text-field"
                  defaultValue=""
                  fullWidth
                  {...register("sex", {
                    required: {
                      value: true,
                      message: "Gender is required",
                    },
                  })}
                  error={!!errors.sex}
                  helperText={errors?.sex?.message}
                >
                  {genderList.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  id="maritalStatus"
                  className="patient-reg-text-field"
                  select
                  fullWidth
                  label="Marital Status *"
                  variant="standard"
                  defaultValue=""
                  {...register("maritalStatus", {
                    required: {
                      value: true,
                      message: "Marital Status is required",
                    },
                  })}
                  error={!!errors.maritalStatus}
                  helperText={errors?.maritalStatus?.message}
                >
                  {maritalStatusList.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>

              <Stack spacing={2} direction="row">
                <TextField
                  className="patient-reg-text-field"
                  id="contactNo"
                  label="Contact No *"
                  variant="standard"
                  defaultValue=""
                  fullWidth
                  {...register("contactNo", {
                    required: {
                      value: true,
                      message: "Contact No. is required",
                    },
                  })}
                  error={!!errors.contactNo}
                  helperText={errors?.contactNo?.message}
                />

                <TextField
                  className="patient-reg-text-field"
                  id="emergContactNo"
                  label="Emrg. Contact No *"
                  variant="standard"
                  placeholder="9012348651"
                  fullWidth
                  defaultValue=""
                  {...register("emergContactNo")}
                />
              </Stack>
              <Stack spacing={2} direction="row">
                <TextField
                  className="patient-reg-text-field"
                  fullWidth
                  id="country"
                  select
                  label="Country"
                  variant="standard"
                  defaultValue=""
                  {...register("country")}
                >
                  {countryList.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  id="state"
                  className="patient-reg-text-field"
                  select
                  label="State"
                  fullWidth
                  variant="standard"
                  defaultValue=""
                  {...register("state")}
                >
                  {stateList.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>
              <Stack spacing={2} direction="row">
                <TextField
                  className="patient-reg-text-field"
                  id="city"
                  select
                  label="Town/City"
                  fullWidth
                  variant="standard"
                  defaultValue=""
                  {...register("townCity")}
                >
                  {townCityList.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="pincode"
                  label="Pincode"
                  placeholder="000123"
                  variant="standard"
                  fullWidth
                  {...register("pincode")}
                />
              </Stack>

              <TextField
                id="address"
                label="Address"
                placeholder="Joe Doe"
                variant="standard"
                fullWidth
                {...register("address")}
              />
            </div>
            <div className="patient-reg-details-div">
              <h2>Clinical Details</h2>
              <Stack spacing={2} direction="row">
                <TextField
                  fullWidth
                  id="primaryDoctor"
                  label="Primary Doctor *"
                  placeholder="Joe Doe"
                  variant="standard"
                  defaultValue=""
                  select
                  {...register("primaryDoctor", {
                    required: {
                      value: true,
                      message: "primary Doctor is required",
                    },
                  })}
                  error={!!errors.primaryDoctor}
                  helperText={errors?.primaryDoctor?.message}
                >
                  {primaryDoctorList.map((option) => (
                    <MenuItem key={option._id} value={option.firstName}>
                    {option.firstName}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  fullWidth
                  className="patient-reg-text-field"
                  id="weight"
                  variant="standard"
                  label="Weight"
                  placeholder="50kg"
                  {...register("weight")}
                />

                <TextField
                  fullWidth
                  className="patient-reg-text-field"
                  id="height"
                  label="Height"
                  variant="standard"
                  defaultValue=""
                  placeholder="50cm"
                  {...register("height")}
                />

                <TextField
                  className="patient-reg-text-field"
                  fullWidth
                  id="bloodGrp"
                  select
                  label="Blood Grp *"
                  variant="standard"
                  defaultValue=""
                  {...register("bloodGroup", {
                    required: {
                      value: true,
                      message: " Blood Group is required",
                    },
                  })}
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
                  defaultValue=""
                  {...register("symtoms")}
                />

                <TextField
                  className="patient-reg-text-field"
                  id="disease"
                  fullWidth
                  label="Disease *"
                  variant="standard"
                  defaultValue=""
                  select
                  {...register("disease", {
                    required: {
                      value: true,
                      message: "disease is required",
                    },
                  })}
                  error={!!errors.disease}
                  helperText={errors?.disease?.message}
                >
                  {diseaseList.map((option) => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                      >
                        {option.value}
                      </MenuItem>
                    ))}
                </TextField>
              </Stack>

              <Stack spacing={3} direction="row">
                <TextField
                  className="patient-reg-text-field"
                  id="ward"
                  fullWidth
                  select
                  label="Ward *"
                  variant="standard"
                  defaultValue=""
                  {...register("ward")}
                />

                <TextField
                  id="room"
                  fullWidth
                  select
                  label="Room *"
                  variant="standard"
                  defaultValue=""
                  {...register("room")}
                />

                <TextField
                  id="bed"
                  select
                  fullWidth
                  label="Bed *"
                  variant="standard"
                  defaultValue=""
                  {...register("bed")}
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
                />
              </Stack>
            </div>

            <div className="signup-btn">
              <Button
                sx={{
                  borderRadius: 20,
                  backgroundColor: "#7EDD6F",
                  justifyContent: "center",
                  paddingLeft: "60px",
                  paddingRight: "60px",
                }}
                variant="contained"
                type="submit"
              >
                Register Now
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PatienRegistrationTest;
