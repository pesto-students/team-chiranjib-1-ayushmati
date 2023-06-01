import HomePage from "./component/home/home-page";
import Signup from "./component/authenticate/sign-up"
import Login from "./component/authenticate/login"
import NoRoute from "./component/no-route";
import AboutUs from "./component/aboutUs/about-us";
import ContactUs from "./component/contactUs/contact-us";
import ReceptionistDashboard from "./component/dashboard/reception/reception-dashboard";
import PatientRegistration from "./component/dashboard/reception/patient-registration";
import DoctorDashboard from "./component/dashboard/doctor/doctor-dashboard";
import NurseDashboard from "./component/dashboard/nurse/nurse-dashboard";
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
      
      {/* <Route path="/patientRegistration/*" element={<PatientRegistration />} />
       */}

      <Route path="/patientRegistration" element={<PatientRegistration />} />
      <Route path="/patientRegistration/:id" element={<PatientRegistration />} />
       


      <Route path="*" element = {<NoRoute/>}/>
    </Routes>
  </Router>
  </>
  )
}

export default App;
