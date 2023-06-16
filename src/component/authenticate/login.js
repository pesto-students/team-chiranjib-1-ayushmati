import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import NavigationBar from "../navgation/navigation-bar";
import { Link } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userStateUpdate } from "../../action";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../utils/constant";
import Loader from "../master/loader";
import "../../css/common.css";
import nurseImage from "../../images/nurse.png";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const role = useSelector((state) => state.role);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    const path = API_URL + "/authenticate/login";
    const body = {
      emailID: data.userID,
      password: data.password,
    };
    const obj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    try {
      const response = await fetch(path, obj);
      console.log(response.status);
      const res = await response.json();
      console.log(res);

      if (response.status === 200) {
        localStorage.setItem("token", JSON.stringify(res.token));
        //localStorage.setItem("hospitalName", res.user.hospitalName);
        // // console.log(response.user.hospitalName);
        // console.log(res.user.hospitalName);

        dispatch(userStateUpdate({ token: res.token, user: res.user }));

        setLoading(false);

        if (res.user.role === "Receptionist") {
          navigate("/receptionist");
        } else if (res.user.role === "Doctor") {
          navigate("/doctor");
        } else if (res.user.role === "Nurse") {
          navigate("/nurse");
        } else {
          console.log("didnt enter other if");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavigationBar />
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <div className="common-backgroud">
          <>
            <div style={{paddingRight:'50px'}}>
              <img  src={nurseImage} style={{transform:'scaleX(-1)',height:'100vh'}}alt="This is nurse"></img>
            </div>
          </>
          <div className="form-background" style={{width:"40%"}}>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="page-heading" style={{display:"flex",justifyContent:"center"}}>LOGIN</h1>
                <TextField
                  className="signup-text-field"
                  id="User-Number-Id"
                  label="Email ID *"
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
                <TextField
                  className="signup-text-field"
                  id="Password-Id"
                  fullWidth
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
                    backgroundColor: "#54B435",
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
      )}
    </>
  );
}

export default Login;
