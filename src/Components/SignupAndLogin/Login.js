import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import NavigationBar from "../NavgationBar/NavigationBar";

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
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="signup-div">
          <form onSubmit={handleSubmit(onSubmit)}>
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

            <Button
              style={{
                borderRadius: 10,
                backgroundColor: "#7EDD6F",
              }}
              variant="contained"
              type="submit"
            >
              Login
            </Button>
          </form>
        </div>
      </Box>
    </>
  );
}

export default Login;
