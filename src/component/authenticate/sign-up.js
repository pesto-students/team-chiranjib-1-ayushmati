import { useForm } from "react-hook-form";
import {
  stateList,
  countryList,
  roleList,
  townCityList,
} from "../master/master-list";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import axios from "axios";
import NavigationBar from "../navgation/navigation-bar";
import "./sign-up.css";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../utils/constant";
import "../../css/common.css";
import Alert from '@mui/material/Alert';

function Signup() {
  const [hospitalList, setHospitalList] = useState([]);
  const [wardList, setWardList] = useState([]);
  const [errorMessage,setErrorMessage] = useState('')
  
  const [isRegister,setIsRegister] = useState(false);
  const [isWardNameRequired, setIsWardNameRequired] = useState(false);


  const navigate = useNavigate();

  useEffect(() => {
    const getHospitalList = async () => {
      try {
        const response = await axios.get(
          API_URL+"/registration/listHospital"
        );
        console.log(response.data);

        setHospitalList(response.data);

      } catch (error) {
        console.error(error);
      }
    };

    getHospitalList();
  }, []);



  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onsubmit = async (data) => {
    console.log(data);
    const path = API_URL+"/authenticate/signup";
    
    const body = {
      emailID: data.emailId,
      password: data.password,
      hospitalName: data.hospital,
      docID_empID: data.userID,
      role: data.role,
      firstName: data.firstName,
      lastName: data.lastName,
      country: data.country,
      state: data.state,
      city: data.city,
      pincode: data.pincode,
      wardName: data.wardName
    };
    const obj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    try {
      const response = await fetch(path, obj);
      console.log(response);
      const res = await response.json();
      console.log(res.status);
      if (response.status===201){
        setIsRegister(true)

        setTimeout(() => {
          navigate("/login")
        }, 2000);
      }
      else if(response.status==409){
        setErrorMessage(res.error)

        setTimeout(() => {
          navigate(0)
        }, 3000);
      }
      else{
        setIsRegister(false)
      }

    } catch (error) {
      console.error(error);
    }
  };

  const loadWard = async (hospitalName) => {
    console.log('selected hospital ::: ' + hospitalName);
    try {
      const response = await axios.get(API_URL + `/wardsDetails/listWardByHospital/${hospitalName}`)
      console.log(response.data);
      setWardList(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const setWardRequired = async (role) => {
    if(role === 'Nurse') {
      setIsWardNameRequired(true);
    } else {
      setIsWardNameRequired(false);
    }
  }

  return (
    <>
      <NavigationBar />
      <div className="signup-outer-div">
        <div className="signup-inner-div">
            <form style={{width:"100%"}}  onSubmit={handleSubmit(onsubmit)}>
              <div className="form-control">
                <h1 className="page-heading">SIGN UP</h1>
              </div>
              <Stack spacing={2} direction="row">
               
                  <TextField
                    className="signup-text-field"
                    fullWidth
                    id="outlined-required"
                    label="Hospital Name *"
                    placeholder="Apollo Hospital"
                    variant="standard"
                    
                    select
                    {...register("hospital", {
                      required: {
                        value: true,
                        message: "Hospital Name is required",
                      },
                    })}
                  >

                    {hospitalList.length > 0 ? (
                      hospitalList.map((option) => (
                        <MenuItem key={option.hospitalName} value={option.hospitalName} onClick={() => loadWard(option.hospitalName)}>
                          {option.hospitalName}
                        </MenuItem>
                      ))
                    ) : (
                      <></>
                    )}

                  </TextField>

                  <TextField
                    className="signup-text-field"
                    id="outlined-select-currency"
                    select
                    fullWidth
                    label="Role *"
                    variant="standard"
                    defaultValue=""
                    {...register("role", {
                      required: {
                        value: true,
                        message: "Role is required",
                      },
                    })}
                    error={!!errors.role}
                    helperText={errors?.role?.message}
                  >
                    {roleList.map((option) => (
                      <MenuItem key={option.value} value={option.value} onClick={() => setWardRequired(option.value)} >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
              </Stack>


              <Stack spacing={2} direction="row">
                  <TextField
                    className="signup-text-field"
                    id="User-Number-Id"
                    label="Doctor lisence No/Employee Id*"
                    placeholder="APH123456"
                    variant="standard"
                    fullWidth
                    {...register("userID", {
                      required: {
                        value: true,
                        message: "User Number is required",
                      },
                    })}
                    error={!!errors.userID}
                    helperText={errors?.userID?.message}
                  />

                {isWardNameRequired &&       
                  <TextField
                    className="signup-text-field"
                    label="Ward Name *"
                    placeholder="General Ward"
                    variant="standard"
                    select
                    fullWidth
                    {...register("wardName", {
                      required: {
                        value: isWardNameRequired,
                        message: "Ward Name is required",
                      },
                    })}
                    error={!!errors.wardName}
                    helperText={errors?.wardName?.message}
                  >
                    {wardList.length > 0 ? (
                      wardList.map((option) => (
                        <MenuItem key={option.wardName} value={option.wardName}>
                          {option.wardName}
                        </MenuItem>
                      ))
                    ) : (
                      <></>
                    )}

                  </TextField>
                }

              </Stack>

              <Stack spacing={2} direction="row">
                  <TextField
                    className="signup-text-field"
                    id="First-Name-Id"
                    label="First Name *"
                    placeholder="Virat"
                    variant="standard"
                    fullWidth
                    {...register("firstName", {
                      required: {
                        value: true,
                        message: "First Name is required",
                      },
                    })}
                    error={!!errors.firstName}
                    helperText={errors?.firstName?.message}
                  />
                  <TextField
                    className="signup-text-field"
                    id="Last-Name-Id"
                    label="Last Name"
                    placeholder="Kholi"
                    variant="standard"
                    fullWidth
                    {...register("lastName")}
                  />
              </Stack>

              <Stack spacing={2} direction="row">
                  <TextField
                    className="signup-text-field"
                    id="Country-ID"
                    select
                    label="Country"
                    variant="standard"
                    defaultValue=""
                    fullWidth
                    {...register("country")}
                  >
                    {countryList.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    className="signup-text-field"
                    id="State-ID"
                    select
                    label="State"
                    variant="standard"
                    defaultValue=""
                    fullWidth
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
                    className="signup-text-field"
                    id="Town-City-ID"
                    select
                    label="Town/City"
                    variant="standard"
                    defaultValue=""
                    fullWidth
                    {...register("townCity")}
                  >
                    {townCityList.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    className="signup-text-field"
                    id="Pincode-Id"
                    label="Pincode"
                    placeholder="000123"
                    variant="standard"
                    fullWidth
                    {...register("pincode")}
                  />
              </Stack>
                <TextField
                  className="signup-text-field"
                  id="Email-Id"
                  label="Email Id *"
                  placeholder="abc123@gmail.com"
                  variant="standard"
                  fullWidth
                  {...register("emailId", {
                    required: {
                      value: true,
                      message: "Email ID is required",
                    },
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: "Enter valid email id",
                    },
                  })}
                  error={!!errors.emailId}
                  helperText={errors?.emailId?.message}
                />

              <Stack spacing={2} direction="row">

                  <TextField
                    className="signup-text-field"
                    id="Password-Id"
                    label="Password *"
                    type="password"
                    variant="standard"
                    fullWidth
                    {...register("password", {
                      required: {
                        value: true,
                        message: "password is required",
                      },
                    })}
                    error={!!errors.password}
                    helperText={errors?.password?.message}
                  />
                  <TextField
                    className="signup-text-field"
                    id="Confirm-Password-Id"
                    label="Comfirm Password *"
                    type="password"
                    variant="standard"
                    fullWidth
                    {...register("confirmPassword", {
                      required: {
                        value: true,
                        message: "password is required",
                      },
                      validate: (val) => {
                        if (watch("password") !== val) {
                          return "Password should match";
                        }
                      },
                    })}
                    error={!!errors.confirmPassword}
                    helperText={errors?.confirmPassword?.message}
                  />
              </Stack>

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
                  SIGN UP NOW
                </Button>
              </div>

              <div className="form-control">
                <Link className="signup-link" to="/login">
                  {" "}
                  Already a member?lets login!
                </Link>
              </div>
              {/* {isRegister && <div>User is registered successfully</div>} */}
              {isRegister && <Alert severity="success">User is registered successfully</Alert>}
              {/* {errorMessage && <div>EmailID Already exist,please login or use different emailID</div>} */}
              {errorMessage && <Alert severity="error">EmailID Already exist,please login or use different emailID</Alert>}
              
            </form>

            
        </div>
      </div>
    </>
  );
}

export default Signup;
