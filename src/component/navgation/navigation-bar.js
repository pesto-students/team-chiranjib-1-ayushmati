import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileMenu from "./profile";
import Typography from '@mui/material/Typography';
import { IconButton } from "@mui/material";

import { NavLink } from "react-router-dom";

function NavigationBar() {
  const emailId = useSelector((state) => state.emailId);
  const role = useSelector((state) => state.role);
  const firstName = useSelector((state) => state.firstName);

  const token = localStorage.getItem('token');

  return (
    <AppBar
      position="static"
      sx={{ background: "#FFFFFF", height: "85px", justifyContent: "center" }}
    >
      <Toolbar>
        <img src={logo} alt="this is logo " />

        {/* <NavLink exact to="/" activeStyle={{ color:'#5754a8',fontSize:"5px" }}>
        <IconButton>
    <Typography>Home</Typography>
  </IconButton>
        </NavLink>
        <NavLink  to="/contactus" activeStyle={{ color:'#5754a8' }} >
            ContactUs
        </NavLink> */}

        {!token ? (
          <>
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
              component={Link}
              to={"/hospitalRegistration"}
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
          </>
        ) : (
          <></>
        )}
        {role === "Receptionist" ? (
          <>
          <Button
            component={Link}
            to={"/patientRegistration/"}
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
            to={"/receptionist/"}
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
            My dashboard
          </Button>
          </>
        ) : (
          <></>
        )}

        {role === "Doctor" ? (
          <Button
            component={Link}
            to={"/doctor"}
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

        {/* {role === "Nurse" ? (
          <Button
            component={Link}
            to={"/nurse"}
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
        )} */}

        {!token ? (
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
        ) : (
          <div style={{
            borderRadius:"50px 0px 0px 50px",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            backgroundColor: "#27a2ee",
          }}>

            <ProfileMenu/>

          </div>

          
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;