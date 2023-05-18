import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import NavigationBar from "../NavgationBar/NavigationBar";
import {Link} from "react-router-dom";
import "./login.css"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <NavigationBar />
      <div className="loginouter">
          <div
            className="login-inner-div"
          >
            <form  className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <h1>LOGIN</h1>
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
              <div className="form-control-password">
              <Link className="signup-link" to="/signup"> forgot password?</Link> 
              </div>

              <div className="form-control">
              <Button
                sx={{
                  borderRadius: 8,
                  backgroundColor: "#7EDD6F",
                  paddingLeft:'60px',
                  paddingRight:'60px'
                }}
                variant="contained"
                type="submit"
              >
                Login
              </Button>
              
              </div>  
              <div className="form-control">
              <Link className="signup-link" to="/signup"> Not a member? Register here</Link> 
              </div>
                   
            </form>
          </div>
      </div>
    </>
  );
}

export default Login;
