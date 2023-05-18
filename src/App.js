import HomePage from "./Components/HomePage/HomePage";
import Signup from "./Components/SignupAndLogin/Signup"
import Login from "./Components/SignupAndLogin/Login"
import NoRoute from "./Components/NoRoute";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import ReceptionistDashboard from "./Components/UserDashboards/Receptionist/ReceptionistDashboard";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  return(
  <>
  <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path = "/aboutus" element={<AboutUs/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/receptionistDashboard" element={<ReceptionistDashboard/>}/>
      <Route path="*" element = {<NoRoute/>}/>
    </Routes>
  </Router>
  </>
  )
}

export default App;
