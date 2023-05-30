import NavigationBar from "../../navgation/NavigationBar";
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
  
    if(token===""){
      navigate("/")
    }
  
  return (
    <>
      <NavigationBar />
      <h1>NurseDashboard</h1>
    </>
  );
}

export default NurseDashboard;
