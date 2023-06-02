import NavigationBar from "../navgation/navigation-bar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";


const wrapper = (Component) => () => {


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
  
    //   if(!token){
    //   navigate("/")
    // }

    
    return (
        <>
        <NavigationBar/>
        <Component/>
        </>
        

    )
}

export default wrapper;