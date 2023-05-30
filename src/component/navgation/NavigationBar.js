import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavigationBar() {
  const emailId = useSelector((state) => state.emailId);
  const role = useSelector((state) => state.role);
  const token = useSelector((state) => state.token);
  const firstName = useSelector((state) => state.firstName);

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

        {token === ""? (
          <>
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
          </>
        ) : (
          <></>
        )}
        {role === "Receptionist" ? (
          <Button
            component={Link}
            to={"/patientRegistration/0"}
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
        ) : (
          <></>
        )}

        {role === "doctor" || role === "nurse" ? (
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
        ) : (
          <></>
        )}

        {token === "" ? (
          <>
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
          </>
        ) : (<div style={{flexGrow:1,display:"flex",flexDirection:"column",alignItems:"end",backgroundColor: '#DAF1FF'}}>
          <p style={{ color: "black",padding:'1px',margin:'2px' }}> Hi {firstName}!</p>
          <p style={{ color: "black", padding:'1px',margin:'2px'}}> {role}</p>
        </div>
          
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
