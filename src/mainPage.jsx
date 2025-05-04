// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./mainPage.css"
import Header from "./component/header.jsx";
import img1 from "./assets/img1.webp";
import img2 from "./assets/img2.webp";
import LandingPage_Graphics1 from "./assets/LandingPage_Graphics__2__uJ_6DtgzD.mp4"
import LandingPage_Graphics2 from "./assets/LandingPage_Graphics__1__i3iGwLmeZ.mp4"
import askifyYoutube from "./assets/askifyYoutube.mp4"
import img3 from "./assets/LandingPage_Graphics__3__qka_7CjbS4.png";
import img4 from "./assets/LandingPage_Graphics__5__H_vxtQae1.webp"
// import googlelogin from "./assets/Google-Logo.png"
import GoogleAuth from "./GoogleAuth.jsx";

export default function Mainpage(){
    const navigate = useNavigate();
    
    // http://localhost:8080
    //https://stream2notes-backend.onrender.com

    useEffect(() => {
        axios.get('https://stream2notes-backend.onrender.com/ytnotes/auto-login', { 
            withCredentials: true 
        })
        .then(response => {
            const googleData = response.data;
            // console.log("Auto-login response:", googleData);
            navigate("/home", { state: googleData }); 
        })
        .catch(() => {
          console.log("Auto-login failed.");
        });
    }, []);
      
      

    return(
        <>  
            <br />
            <Header/>
            <div className="info">
                <div className="info-data">
                    <br /><br /><br /><br />
                    <h1>Take Screenshot and</h1>
                    <h1>Notes from Youtube</h1> <br />
                    <h2>- Lighting Fast Screenshot and Timestamp</h2>
                    <h2>- One click Export to PDF</h2>
                    <h2>- Works on <b>All Websites</b></h2> <br /><br />
                    <h2><b>It&apos;s Free</b></h2>
                    {/* <button className="signin" onClick={handleLogin}>  */}
                        <GoogleAuth/>
                    {/* </button> */}
                    <h2><b>join us </b></h2>
                </div>
                <div className="info-photo">
                    <div>
                        <img src={img1} alt="img" />
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <div className="screenshot">
                <div>
                    <h1>Do More With Screenshot</h1>
                </div>
                <div className="screenshotinfo">
                    <div className="screenshot-photo">
                        <img src={img2} alt="screenshot-photo" />
                    </div>
                    <div className="screenshot-text">
                        <h2><span className="text-purpale">Write</span> and <span className="text-orange">Draw</span> on Screenshot</h2>
                        <h2><span className="text-purpale">Crop</span> and <span className="text-orange">Tilt</span> in anyway</h2>
                        <h2>Convert to <span className="text-purpale">Text</span></h2>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <div className="screenshot">
                <div>
                    <h1>Obstruction Free Editor</h1>
                </div>
                <div className="screenshotinfo">
                    <div className="screenshot-text">
                        <h2><span className="text-purpale">Take</span> note without <span className="text-orange">Changing Tab</span></h2>
                        <h2><span className="text-purpale">Transparent</span> Editor with one click <span className="text-orange">Minimize</span></h2>
                        <h2><span className="text-purpale">Drag</span> and <span className="text-orange">Move</span> freely</h2>
                    </div>
                    <div className="screenshot-photo">
                        <video className= "video-container" src={LandingPage_Graphics1} type="video/mp4" controls autoPlay muted loop></video>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <div className="screenshot">
                <div>
                    <h1>Smart Features</h1>
                </div>
                <div className="screenshotinfo">
                    <div className="screenshot-photo">
                    <video className= "video-container" src={LandingPage_Graphics2} type="video/mp4" controls autoPlay muted loop></video>
                    </div>
                    <div className="screenshot-text">
                        <h2><span className="text-purpale">Auto Notes</span> and Full Video <span className="text-orange">Transcript</span></h2>
                        <h2>Speak and Write in <span className="text-purpale">50+ languages</span></h2>
                        <h2> <span className="text-purpale">Auto Screenshot</span> and <span className="text-orange">Audio Notes</span></h2>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <div className="screenshot">
                <div>
                    <h1>Advanced Editor</h1>
                </div>
                <div className="screenshotinfo">
                    <div className="screenshot-text">
                        <h2><span className="text-purpale">Full Markdown</span> Support</h2>
                        <h2><span className="text-purpale">Copy-Paste</span> <span className="text-orange">Screenshots</span> directly to Docs, Notion, One-Note</h2>
                        <h2><span className="text-purpale">Advanced features</span> like Latex, Code Highlighter, Embed (youtube, vimeo) and <span className="text-orange">Shortcuts</span></h2>
                    </div>
                    <div className="screenshot-photo">
                        <video className= "video-container" src={askifyYoutube} type="video/mp4" controls autoPlay muted loop></video>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <div className="screenshot">
                <div>
                    <h1>Export, Share and Sync</h1>
                </div>
                <div className="screenshotinfo">
                    <div className="screenshot-photo">
                        <img src={img3} alt="screenshot-photo" />
                    </div>
                    <div className="screenshot-text">
                        <h2>Export to <span className="text-purpale">PDF</span> and <span className="text-orange">Markdown</span></h2>
                        <h2><span className="text-purpale">Share</span> Notes on <span className="text-orange">Social Media</span> and <span className="text-orange">Friends</span></h2>
                        <h2><span className="text-purpale">Sync</span>with Obsidian, Notion, Evernote and Readwise</h2>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <div className="screenshot">
                <div>
                    <h1>Community</h1>
                </div>
                <div className="screenshotinfo">
                    <div className="screenshot-photo">
                        <img src={img4} alt="screenshot-photo" />
                    </div>
                    <div className="screenshot-text">
                        <h2><b>Community Notes:</b> Get Ready Made Notes</h2> 
                        <h2><b>Earn Money:</b> Share digital and handwritten notes and earn money on every download</h2> 
                        <h2><b>Publish:</b> Publish your notes as website and blog</h2>
                    </div>
                </div>
            </div>
            <br /><br /><br />
        </>
    );
}