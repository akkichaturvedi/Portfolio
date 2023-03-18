import React from 'react'
import style from "./Footer.module.css"
import FavoriteIcon from '@mui/icons-material/Favorite';

function Footer() {
    return (
       <div className={style.footer}>
        {/* <h3>Ankur chaturvedi</h3> */}
        <FavoriteIcon style={{color : "red"}}/>
        <h2>From my side</h2>
       </div>
    )
}

export default Footer