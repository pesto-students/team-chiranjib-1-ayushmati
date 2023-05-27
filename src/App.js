import HomePage from "./component/home/HomePage";
import Signup from "./component/authenticate/Signup"
import Login from "./component/authenticate/Login"
import NoRoute from "./component/NoRoute";
import AboutUs from "./component/aboutUs/AboutUs";
import ContactUs from "./component/contactUs/ContactUs";
import ReceptionistDashboard from "./component/dashboard/reception/ReceptionistDashboard";
import PatientRegistration from "./component/dashboard/reception/PatientRegistration";
import DoctorDashboard from "./component/dashboard/Doctor/DoctorDashboard";
import NurseDashboard from "./component/dashboard/Nurse/NurseDashboard";
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
      <Route path="/doctor" element={<DoctorDashboard/>}/>
      <Route path="/nurse" element={<NurseDashboard/>}/>
      <Route path="/patientRegistration" element={<PatientRegistration/>}/>
      
      
      <Route path="*" element = {<NoRoute/>}/>
    </Routes>
  </Router>
  </>
  )
}

export default App;
