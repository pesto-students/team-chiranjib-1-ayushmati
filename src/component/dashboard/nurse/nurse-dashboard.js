import NavigationBar from "../../navgation/navigation-bar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";


function NurseDashboard() {

    const navigate = useNavigate();

    const token = useSelector((state) => state.token);
  
    useEffect (()=>{
      if(token==="") {
        navigate("/login")
      }
    },[])
  
  
  return (
    <>
      <NavigationBar />
      <h1>NurseDashboard</h1>
    </>
  );
}

export default NurseDashboard;
