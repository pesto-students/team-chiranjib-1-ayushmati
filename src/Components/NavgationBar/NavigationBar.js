import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "./logo.png";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <AppBar
      position="static"
      sx={{ background: "#FFFFFF", height: "85px", justifyContent: "center" }}
    >
      <Toolbar>
        <img src={logo} alt="this is logo " />

        <Button
          component={Link}
          to={"/"}
          sx={{
            color: "black",
            fontSize: "20px",
            margin: "4px",
            alignItems: "center",
            flexGrow: 1,
            font: "inherit",
            borderRadius: 6,
          }}
        >
          Home
        </Button>
        <Button
          sx={{
            color: "black",
            fontSize: "20px",
            margin: "4px",
            alignItems: "center",
            flexGrow: 1,
            font: "inherit",
            borderRadius: 6,
          }}
        >
          NEW HOSPITAL
        </Button>
        <Button
        component={Link}
        to={"/contactus"}
          sx={{
            color: "black",
            fontSize: "20px",
            margin: "4px",
            alignItems: "center",
            flexGrow: 1,
            font: "inherit",
            borderRadius: 6,
          }}
        >
          CONTACT US
        </Button>
        
        <Button
        component={Link}
        to={"/aboutus"}
          sx={{
            color: "black",
            fontSize: "20px",
            margin: "4px",
            alignItems: "center",
            flexGrow: 1,
            font: "inherit",
            borderRadius: 6,
          }}
        >
          ABOUT US
        </Button>

        <Button
        component={Link}
        to={"/patientRegistration"}
          sx={{
            color: "black",
            fontSize: "20px",
            margin: "4px",
            alignItems: "center",
            flexGrow: 1,
            font: "inherit",
            borderRadius: 6,
          }}
        >
          New Patient Registration
        </Button>

        <Button
        component={Link}
        to={"/receptionist"}
          sx={{
            color: "black",
            fontSize: "20px",
            margin: "4px",
            alignItems: "center",
            flexGrow: 1,
            font: "inherit",
            borderRadius: 6,
          }}
        >
        Patient List
        </Button>
          
        <Button
          component={Link}
          to={"/login"}
          variant="outlined"
          sx={{
            color: "black",
            fontSize: "20px",
            margin: "4px",
            alignItems: "center",
            flexGrow: 1,
            font: "inherit",
            borderRadius: 6,
          }}
        >
          LOGIN
        </Button>

        <Button
          component={Link}
          to={"/signup"}
          variant="contained"
          sx={{
            color: "white",
            fontSize: "20px",
            margin: "4px",
            alignItems: "center",
            flexGrow: 1,
            font: "inherit",
            borderRadius: 6,
          }}
        >
          SIGN UP
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
