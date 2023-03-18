import * as React from "react";
import style from "./Navbar.module.css"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Tooltip from '@mui/material/Tooltip';

const Navbar = () => {

  function scrollTo(elem) {
    document.getElementById(elem).scrollIntoView(false);
  }

  const showAimation = ()=>{
    document.getElementById("close").style.display = "block";
  }

  return (
    <>
      <div className={style.navBar} >
        <div className="logo">
          <Tooltip title="Click Me" arrow placement="top" leaveDelay={200}>
            <h1 className={style.logo} onClick={showAimation}>
              ankur</h1>
          </Tooltip>
        </div>
        <div className={style.lists}>
          <ul>
            <a onClick={() => { scrollTo("about") }}><li>About</li></a>
            <a onClick={() => { scrollTo("skill") }}><li>Skills</li></a>
            <a onClick={() => { scrollTo("projects") }}><li>Projects</li></a>
            <a onClick={() => { scrollTo("contact") }}><li>Contact</li></a>
          </ul>
        </div>
        <div className={style.links} >
          <Tooltip title="WhatsApp" arrow placement="top" leaveDelay={100}>
            <a href="https://wa.me/992350435" target="_blank"><WhatsAppIcon sx={{ mr: 3, cursor: "pointer" }} /></a>
          </Tooltip>

          <Tooltip title="github" arrow placement="top" leaveDelay={100}>
            <a href="https://github.com/akkichaturvedi" target="_blank"><GitHubIcon sx={{ mr: 3, cursor: "pointer" }} /></a>
          </Tooltip>

          <Tooltip title="instragram" arrow placement="top" leaveDelay={100}>
            <a href="https://instagram.com/ankur__5?igshid=ZDdkNTZiNTM=" target="_blank"><InstagramIcon sx={{ mr: 3, cursor: "pointer" }} /></a>
          </Tooltip>

        </div>
      </div>
    </>
  )
}

export default Navbar;