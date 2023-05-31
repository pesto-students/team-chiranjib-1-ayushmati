import NavigationBar from "../../navgation/NavigationBar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function DoctorDashboard() {
  const navigate = useNavigate();

  const token = useSelector((state) => state.token);

  useEffect(() => {
    if (token === "") {
      navigate("/login");
    }
  }, []);


  return (
    <>
      <NavigationBar />
      <h1>DoctorDashboard</h1>
    </>
  );
}

export default DoctorDashboard;
