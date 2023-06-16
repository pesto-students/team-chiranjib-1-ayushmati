import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../utils/constant";
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
        alert("Ayushmati team will rech out to you shortly !");
        /*

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
        */
      };
    
      return (
        <>
        <NavigationBar />
        
        <div className="signup-outer-div">
          <div className="signup-inner-div">
            <form onSubmit={handleSubmit(onsubmit)}>
              <div className="form-control">
                <h1 className="page-heading">CONTACT US</h1>
              </div>

                <TextField
                  className="patient-reg-text-field"
                  id="message"
                  label="Full Name *"
                  variant="standard"
                  fullWidth
                  {...register("fullName", {
                    required: {
                      value: true,
                      message: "Full Name is required",
                    },
                  })}
                  value={watch("fullName") || ""}
                  error={!!errors.message}
                  helperText={errors?.fullName?.message}
                />

                <TextField
                  className="patient-reg-text-field"
                  id="message"
                  label="Message *"
                  variant="standard"
                  fullWidth
                  {...register("message", {
                    required: {
                      value: true,
                      message: "Message is required",
                    },
                  })}
                  value={watch("message") || ""}
                  error={!!errors.message}
                  helperText={errors?.message?.message}
                />
    
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
                  Submit
                </Button>
              </div>
  
              </form>
        </div>
        </div>

          </>
      );
    }


export default ContactUs;