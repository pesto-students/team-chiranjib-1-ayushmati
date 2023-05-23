import HomePage from "./Components/HomePage/HomePage";
import Signup from "./Components/SignupAndLogin/Signup"
import Login from "./Components/SignupAndLogin/Login"
import NoRoute from "./Components/NoRoute";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import ReceptionistDashboard from "./Components/UserDashboards/Receptionist/ReceptionistDashboard";
import PatientRegistration from "./Components/UserDashboards/Receptionist/PatientRegistration";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  return(
  <>
  <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path = "/aboutus" element={<AboutUs/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/receptionist" element={<ReceptionistDashboard/>}/>
      <Route path="/patientRegistration" element={<PatientRegistration/>}/>
      
      <Route path="*" element = {<NoRoute/>}/>
    </Routes>
  </Router>
  </>
  )
}

export default App;
