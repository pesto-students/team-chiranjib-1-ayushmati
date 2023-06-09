import NavigationBar from "../navgation/navigation-bar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";


const wrapper = (Component) => () => {
  axios.defaults.headers.common['x-access-token'] = JSON.parse(localStorage.getItem('token')) ;
  const [refresh,setRefresh] = useState(false);



  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  console.log(isAuthenticated)

    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    console.log("inside HOC")
  
    useEffect(() => {
      if (!token) {
        navigate("/");
      }
    }, [isAuthenticated]);
  
 
    
    return (
        <>
        <NavigationBar/>
        <Component/>
        </>
        

    )
}

export default wrapper;