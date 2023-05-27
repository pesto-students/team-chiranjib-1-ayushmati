import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import NavigationBar from "../navgation/NavigationBar";
import { Link } from "react-router-dom";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const path = "http://localhost:5000/authenticate/login";
    const body={
        emailID:data.userID,
        password:data.password,
    }
    const obj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    try{
        const response = await fetch(path, obj)
        const res = await response.json();
        console.log(res);
        sessionStorage.setItem('token', JSON.stringify(res.token));
        sessionStorage.setItem('role', JSON.stringify(res.user.role))

        if(res.user.role ==="Receptionist"){
          navigate("/receptionist")
        }
        else if(res.user.role ==="Doctor"){
          navigate("/doctor")
        }
        else if(res.user.role ==="Nurse"){
          navigate ("/nurse")
        }
  
      }
      catch(error){
        console.error(error)
      }

    
  };

  return (
    <>
      <NavigationBar />
      <div className="login-outer-div">
        <div className="login-inner-div">
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <h1 className="login-text">LOGIN</h1>
            </div>
            <div className="form-control">
              <TextField className="signup-text-field"
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

            <div className="form-control">
              <TextField className="signup-text-field"
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
            <div className="form-control-password">
              <Link className="signup-link" to="/signup">
                {" "}
                forgot password?
              </Link>
            </div>

            <div className="form-control">
              <Button
                sx={{
                  borderRadius: 8,
                  backgroundColor: "#7EDD6F",
                  paddingLeft: "60px",
                  paddingRight: "60px",
                }}
                variant="contained"
                type="submit"
              >
                Login
              </Button>
            </div>
            <div className="form-control">
              <Link className="signup-link" to="/signup">
                {" "}
                Not a member? Register here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
