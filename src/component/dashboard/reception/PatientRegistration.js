import { useForm } from "react-hook-form";
import { genderList, maritalStatusList, stateList, countryList, roleList, townCityList } from "../../master/MasterList";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";




import NavigationBar from "../../navgation/NavigationBar";
import "../../authenticate/signup.css";

function PatientRegistration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onsubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <NavigationBar/>
      <div className="common-backgroud">
        <form onSubmit={handleSubmit(onsubmit)}>
          <Stack spacing={4} direction="row">
            <div>
              <TextField
                id="patientName"
                label="Patient Name *"
                placeholder="Joe Doe"
                variant="standard"
                {...register("patientName", {
                  required: {
                    value: true,
                    message: "Patient Name is required",
                  },
                })}
                error={!!errors.patientName}
                helperText={errors?.patientName?.message}
              />
            </div>
            
            <div>
              DOB
            </div>

            <div>
              <TextField
                  id="sex"
                  select
                  label="Sex *"
                  variant="standard"
                  defaultValue=""
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
            </div>

            <div>
              <TextField
                  id="maritalStatus"
                  select
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
            </div>
          </Stack>    
          
          <Stack spacing={2} direction="row">
            <div>
              <TextField
                id="contactNo"
                select
                label="Contact No *"
                variant="standard"
                defaultValue=""
                {...register("contactNo", {
                  required: {
                    value: true,
                    message: "Contact No. is required",
                  },
                })}
                error={!!errors.contactNo}
                helperText={errors?.contactNo?.message}
              />
            </div>

            <div>
              <TextField
                id="emergContactNo"
                select
                label="Emrg. Contact No *"
                variant="standard"
                defaultValue=""
                {...register("emergContactNo", {
                  required: {
                    value: true,
                    message: "Emrg. Contact No. is required",
                  },
                })}
                error={!!errors.emergContactNo}
                helperText={errors?.emergContactNo?.message}
              />
            </div>

                
              </Stack>

              <Stack spacing={2} direction="row">
                <div className="sign-up-elements-div">
                  <TextField
                    className="signup-text-field"
                    id="First-Name-Id"
                    label="First Name *"
                    placeholder="Virat"
                    variant="standard"
                    {...register("firstName", {
                      required: {
                        value: true,
                        message: "First Name is required",
                      },
                    })}
                    error={!!errors.firstName}
                    helperText={errors?.firstName?.message}
                  />
                </div>

                <div className="sign-up-elements-div">
                  <TextField
                    className="signup-text-field"
                    id="Last-Name-Id"
                    label="Last Name"
                    placeholder="Kholi"
                    variant="standard"
                    {...register("lastName")}
                  />
                </div>
              </Stack>

              <Stack spacing={2} direction="row">
                <div className="sign-up-elements-div">
                  <TextField
                    className="signup-text-field"
                    id="Country-ID"
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
                </div>

                <div className="sign-up-elements-div">
                  <TextField
                    className="signup-text-field"
                    id="State-ID"
                    select
                    label="State"
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
                </div>
              </Stack>

              <Stack spacing={2} direction="row">
                <div className="sign-up-elements-div">
                  <TextField
                    className="signup-text-field"
                    id="Town-City-ID"
                    select
                    label="Town/City"
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
                </div>
                <div className="sign-up-elements-div">
                  <TextField
                    className="signup-text-field"
                    id="Pincode-Id"
                    label="Pincode"
                    placeholder="000123"
                    variant="standard"
                    {...register("pincode")}
                  />
                </div>
              </Stack>

              <div className="sign-up-elements-div">
                <TextField
                  className="signup-text-field"
                  id="Email-Id"
                  label="Email Id *"
                  placeholder="abc123@gmail.com"
                  variant="standard"
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
              </div>

              <Stack spacing={2} direction="row">
                <div className="sign-up-elements-div">
                  <TextField
                    className="signup-text-field"
                    id="Password-Id"
                    label="Password *"
                    type="password"
                    variant="standard"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "password is required",
                      },
                    })}
                    error={!!errors.password}
                    helperText={errors?.password?.message}
                  />
                </div>

                <div className="sign-up-elements-div">
                  <TextField
                    className="signup-text-field"
                    id="Confirm-Password-Id"
                    label="Comfirm Password *"
                    type="password"
                    variant="standard"
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
                </div>
              </Stack>

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
                  SIGN UP NOW
                </Button>
              </div>

              <div className="form-control">
              <Link className="signup-link" to="/login">
                {" "}
                Already a member?lets login!
              </Link>
            </div>
            </form>
          
        </div>
      
    </>
  );
}

export default PatientRegistration;
