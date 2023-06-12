import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../utils/constant";
import { stateList, countryList, townCityList } from "../master/master-list";
import NavigationBar from "../navgation/navigation-bar";

function HospitalRegistration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();

  const onsubmit = async (data) => {
    console.log(data);



    
    const newHospitalData = { newHospital: data };
    try {
        axios
          .post(API_URL + `/registration/createHospital`, {
            newHospital: newHospitalData.newHospital,
          })
          .then((res) => {
            if (res.status === 201) {
              console.log("Hospital Registered Successfully");
              navigate("/");
            } else if(res.status === 409){
              console.log("Hospital Already Exists");
              
            }  else {
               console.log('else called....');
              Promise.reject();
            }
          });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <NavigationBar />
      

      <div className="signup-div">
        <form onSubmit={handleSubmit(onsubmit)}>
          <Stack spacing={2} direction="row">
            <TextField
              id="hospitalName"
              label="Hospital Name *"
              placeholder="Apollo Hospital"
              variant="standard"
              {...register("hospitalName", {
                required: {
                  value: true,
                  message: "Hospital Name is required",
                },
              })}
              error={!!errors.hospital}
              helperText={errors?.hospital?.message}
            />
          
            <TextField
              id="hospitalRegnNo"
              label="Hospital Registration No *"
              placeholder="HOSP-123456"
              variant="standard"
              {...register("hospitalRegnNo", {
                required: {
                  value: true,
                  message: "Hospital Name is required",
                },
              })}
              error={!!errors.hospital}
              helperText={errors?.hospital?.message}
            />
          </Stack>

          <Stack spacing={2} direction="row">
                <TextField
                  className="patient-reg-text-field"
                  id="contactNo"
                  label="Contact No *"
                  variant="standard"
                  fullWidth
                  {...register("contactNo", {
                    required: {
                      value: true,
                      message: "Contact No. is required",
                    },
                  })}
                  value={watch("contactNo") || ""}
                  error={!!errors.contactNo}
                  helperText={errors?.contactNo?.message}
                />

                <TextField
                  className="patient-reg-text-field"
                  id="faxNo"
                  label="Fax "
                  variant="standard"
                  placeholder="456-7890. 123-456-7890"
                  fullWidth
                  {...register("faxNo")}
                  value={watch("faxNo") || ""}
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
                  {...register("country")}
                  value={watch("country") || ""}
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
                  {...register("state")}
                  value={watch("state") || ""}
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
                  {...register("city")}
                  value={watch("city") || ""}
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
                  value={watch("pincode") || ""}
                />
              </Stack>

              <TextField
                id="address"
                label="Address"
                placeholder="Address"
                variant="standard"
                fullWidth
                {...register("address")}
                value={watch("address") || ""}
              />

          <Button
            style={{
              borderRadius: 10,
              backgroundColor: "#7EDD6F",
            }}
            variant="contained"
            type="submit"
          >
           Register Now
          </Button>
        </form>
      </div>
      </>
  );
}

export default HospitalRegistration;

