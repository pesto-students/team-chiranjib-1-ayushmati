import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSelector } from "react-redux";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch } from "react-redux";
import { userLogOut } from "../../action";
import { useNavigate } from "react-router-dom";


export default function ProfileMenu() {
  const role = useSelector((state) => state.role);
  const firstName = useSelector((state) => state.firstName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () =>{
    setAnchorEl(null);
    dispatch(userLogOut());
    navigate("/")
    
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <div style={{display:"flex",  flexDirection:"row",justifyContent:"center"}}>
        <div style={{display:"flex", flexDirection:"column",paddingRight:'2%'}}>
          <p style={{ color: "white", padding: "1px", margin: "2px" }}>
            {" "}
            Hi,{firstName}!
          </p>
          <p style={{ color: "white", padding: "1px", margin: "2px" ,fontSize:"10px"}}>
            {" "}
            {role}
          </p>
        </div>
        <ArrowDropDownIcon sx={{color:"white"}}/>

        </div>
        
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleLogOut} style={{ float: "right"}} >Logout</MenuItem>
      </Menu>
    </div>
  );
}
