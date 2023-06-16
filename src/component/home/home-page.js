import "./home-page.css";
import nurseImage from "../../images/nurse.png";
import Button from "@mui/material/Button";
import NavigationBar from "../navgation/navigation-bar";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <NavigationBar />
      <div className="homediv">
        <div className="innerdiv1">
          <div style={{ fontSize:"6vh", color: "#3A4563"}}  >
            The Best Online Solution for Nursing And Patient Care.
          </div>
          <div  className="text2">
            <ul style={{ fontSize:"3vh",color: "#3A4563" }} >
              <li>
                Identifying patients' care requirements, focus on their needs
                and act on them.
              </li>
              <li>
                Nurturing a compassionate environment by providing psychological
                support.
              </li>
              <li>Resolving or reporting on patients' needs or problems.</li>
            </ul>
            <Button
              component={Link}
              size="large"
              to={"/contactus"}
              variant="contained"
              sx={{
                borderRadius: 8,
              }}
            >
              schedule a call
            </Button>
          </div>
        </div>

        <div className="innerdiv2">
          <img id="nurseImage" src={nurseImage} alt="This is nurse"></img>
        </div>
      </div>
    </>
  );
}

export default HomePage;
