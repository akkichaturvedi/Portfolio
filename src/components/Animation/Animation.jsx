import React from 'react'
import getStyle from "./Animation.module.css"
import Tooltip from '@mui/material/Tooltip';
import CloseIcon from '@mui/icons-material/Close';


function Animation() {
    
    const closeAnimation = ()=>{
        document.getElementById("close").style.display = "none";
    }

    return (
        <div id='close'>
            <div className={getStyle.cut}>
                <CloseIcon onClick={closeAnimation}/>
            </div>
            <Tooltip arrow title="i am hovered">

                <div className={getStyle.page}>
                    <div>
                        <h1 className={getStyle.title}> नमस्ते sir<span style={{ color: "white", fontSize: "50px" }}>/</span>ma'am</h1>
                        <span style={{ textShadow: "3px 2px red" }}>A</span>
                        <span style={{ textShadow: "3px 2px red" }}>N</span>
                        <span style={{ textShadow: "3px 2px red" }}>K</span>
                        <span style={{ textShadow: "3px 2px red" }}>U</span>
                        <span style={{ textShadow: "3px 2px red" }}>R</span>
                    </div>
                </div>
            </Tooltip>
        </div>

    )
}

export default Animation