import { useForm } from "react-hook-form";
import { stateList, countryList, roleList, townCityList } from "./OptionList";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import NavigationBar from "../NavgationBar/NavigationBar";

function Signup() {
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
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="signup-div">
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="form-control">
              <TextField
                id="outlined-required"
                label="Hospital Name *"
                placeholder="Apollo Hospital"
                variant="standard"
                {...register("hospital", {
                  required: {
                    value: true,
                    message: "Hospital Name is required",
                  },
                })}
                error={!!errors.hospital}
                helperText={errors?.hospital?.message}
              />
            </div>

            <Stack spacing={2} direction="row">
              <div className="form-control">
                <TextField
                  id="outlined-select-currency"
                  select
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
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className="form-control">
                <TextField
                  id="User-Number-Id"
                  label="Doctor lisence No/Employee Id*"
                  placeholder="APH123456"
                  variant="standard"
                  {...register("userID", {
                    required: {
                      value: true,
                      message: "User Number is required",
                    },
                  })}
                  error={!!errors.userID}
                  helperText={errors?.userID?.message}
                />
              </div>
            </Stack>

            <Stack spacing={2} direction="row">
              <div className="form-control">
                <TextField
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

              <div className="form-control">
                <TextField
                  id="Last-Name-Id"
                  label="Last Name"
                  placeholder="Kholi"
                  variant="standard"
                  {...register("lastName")}
                />
              </div>
            </Stack>

            <Stack spacing={2} direction="row">
              <div className="form-control">
                <TextField
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

              <div className="form-control">
                <TextField
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

            <div className="form-control">
              <TextField
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

            <div className="form-control">
              <TextField
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
              <div className="form-control">
                <TextField
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

              <div className="form-control">
                <TextField
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

            <Button
              style={{
                borderRadius: 10,
                backgroundColor: "#7EDD6F",
              }}
              variant="contained"
              type="submit"
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Box>
    </>
  );
}

export default Signup;
