import React from 'react'
import style from "./Body.module.css"
import img from "../../assets/my.png"
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import gif from "../../assets/giphy1.gif"


function Body(props) {
    console.log(props);
    return (
        <section className={style.mainConatainerofsections}>

            <section href="about" id="about">
                <div className={style.aboutContainer}>
                    <div className={style.leftSideOfContainer}>
                        <div className={style.data}>
                            <h1 style={{ fontSize: "75px" }}><span >Hii</span>, I am ankur</h1><br />
                            <h4>i am a <u> Frontend developer</u>, and i love to do a coding and making a new thing's for people.</h4>
                        </div>
                        <div className={style.buttons}>
                            <a href="tel:+919923550435"><button>Call Mee</button></a>
                            <a href='file:///E:/unuseed%20image/ANKUR.pdf' target="_blank"><button>See Resume</button></a>
                        </div>
                    </div>
                    <div className={style.rightSideOfContainer}>
                        <img src={img} alt="img" />
                    </div>
                </div>
            </section>

            <section href="skill" className={style.skill} id="skill">
                <h1 className={style.heading}>Skill's</h1>
                <div className={style.skillContainer}>
                    <div className={style.card}>
                        <div className={style.skillLogo}>
                            <HtmlIcon style={{ fontSize: "55px" }} />
                        </div>
                        <div className={style.skillDescription}>
                            <h1>i have a good knowledge of html. <br /> and html5 as well.</h1>
                        </div>
                    </div>

                    <div className={style.card}>
                        <div className={style.skillLogo}>
                            <CssIcon style={{ fontSize: "55px" }} />
                        </div>
                        <div className={style.skillDescription}>
                            <h1>i have a good knowledge of css. <br /> and css3 as well.</h1>
                        </div>
                    </div>

                    <div className={style.card}>
                        <div className={style.skillLogo}>
                            <JavascriptIcon style={{ fontSize: "55px" }} />
                        </div>
                        <div className={style.skillDescription}>
                            <h1>i have a good knowledge of javascript. and i can solve some logical thing in javascript</h1>
                        </div>
                    </div>
                </div>

                <div className={style.skillContainer}>
                    <div className={style.card}>
                        <div className={style.skillLogo}>
                            <h1 style={{ fontSize: "25px", padding: "15px", color: "darkblue" }}> Bootstrap</h1>
                            {/* <HtmlIcon /> */}
                        </div>
                        <div className={style.skillDescription}>
                            <h1>i have a good knowledge of Bootstrap. <br /> and i am work with Bootstrap in my project..</h1>
                        </div>
                    </div>

                    <div className={style.card}>
                        <div className={style.skillLogo}>
                            <h1 style={{ fontSize: "25px", padding: "15px", color: "skyblue" }}> React</h1>
                        </div>
                        <div className={style.skillDescription}>
                            <h1>i have a intermediate knowledge of react. <br />and i am learning react now a days.</h1>
                        </div>
                    </div>
                </div>
            </section>


            <section href="projects" className={style.project} id="projects">
                <h1 className={style.heading}>Project's</h1>
                <div className={style.projectContainer}>
                    <div className={style.card}>
                        <div className={style.projectName}>
                            <h1 style={{ fontSize: "25px", padding: "15px" }}> stickyNote</h1>
                        </div>
                        <div className={style.projectDescription}>
                            <p>In this web app you can make a note. this note are temporary avilable if you refresh the page than the noty will we be disappear.</p>
                        </div>
                        <div className={style.projectLink}>
                            <a href="https://stickynotestickynote.netlify.app/" target="_blank">Visit</a>
                        </div>
                        <div className={style.note}>
                            <h1>Get code in my github account.</h1>
                        </div>
                    </div>

                    <div className={style.card}>
                        <div className={style.projectName}>
                            <h1 style={{ fontSize: "25px", padding: "15px" }}> WeatherApp</h1>
                        </div>
                        <div className={style.projectDescription}>
                            <p>In this web app you can search temprecther related thying of any country.</p>
                        </div>
                        <div className={style.projectLink}>
                            <a href="https://weatherdetaiils.netlify.app/" target="_blank">Visit</a>
                        </div>
                        <div className={style.note}>
                            <h1>Get code in my github account.</h1>
                        </div>
                    </div>
                </div>

                <div className={style.projectContainer}>

                    <div className={style.card}>
                        <div className={style.projectName}>
                            <h1 style={{ fontSize: "25px", padding: "15px" }}> stopWatch & timeZone</h1>
                        </div>
                        <div className={style.projectDescription}>
                            <p>This web app you can use it as stop watch or check timezone of some country.</p>
                        </div>
                        <div className={style.projectLink}>
                            <a href="https://stopwatchtimezone.netlify.app/" target="_blank">Visit</a>
                        </div>
                        <div className={style.note}>
                            <h1>Get code in my github account.</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section href="contact" className={style.contact} id="contact">
                <div className={style.contactContainer}>
                    <div className={style.headingContainer}>
                        <h1 className={style.heading}>Contact</h1>
                    </div>
                    <div className={style.containerSide}>
                        <div className={style.leftsideContact}>
                            <h1>Reach out to mee.</h1>
                            <p>Through this ways...</p>
                            <div className={style.contactMee}>
                                <h2>Mail Mee <ArrowForwardIcon sx={{color : "blue"}}/></h2>
                                <a href="mailto:akkichaturvedi2222@gmail.com" target="_blank"><MailIcon sx={{ mr: 3, cursor: "pointer" , color : "rgb(134, 74, 63)"}} /></a>
                            </div>
                            <div className={style.contactMee}>
                                <h2>DM on <u>WhatsApp</u> <ArrowForwardIcon sx={{color : "blue"}}/></h2>
                                <a href="https://wa.me/992350435" target="_blank"><WhatsAppIcon sx={{ mr: 3, cursor: "pointer" , color : "rgb(134, 74, 63)"}} /></a>
                            </div>
                            <div className={style.contactMee}>
                                <h2>DM on <u>instragram</u> <ArrowForwardIcon sx={{color : "blue"}}/></h2>
                                <a href="https://instagram.com/ankur__5?igshid=ZDdkNTZiNTM=" target="_blank"><InstagramIcon sx={{ mr: 3, cursor: "pointer" , color : "rgb(134, 74, 63)"}} /></a>
                            </div>
                            <div className={style.contactMee}>
                                <h2 style={{ textAlign: "center", color: "azure" }}> Just click on the icons.</h2>
                            </div>
                        </div>
                        <div className={style.rightsideContact}>
                            <img src={gif} alt="tech"/>
                        </div>
                    </div>
                </div>

            </section>
        </section>
    )
}

export default Body