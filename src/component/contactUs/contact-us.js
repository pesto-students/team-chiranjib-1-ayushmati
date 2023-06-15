import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../utils/constant";
import { stateList, countryList, townCityList } from "../master/master-list";
import NavigationBar from "../navgation/navigation-bar";


function ContactUs(){
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
                  id="fullName"
                  label="Full Name *"
                  placeholder="Full Name"
                  variant="standard"
                  {...register("fullName", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                  error={!!errors.fullName}
                  helperText={errors?.fullName?.message}
                />
              </Stack>

              <Stack spacing={2} direction="row">
                <TextField
                  id="message"
                  label="Message *"
                  placeholder="Message"
                  variant="standard"
                  {...register("message", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                  error={!!errors.message}
                  helperText={errors?.message?.message}
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


export default ContactUs;