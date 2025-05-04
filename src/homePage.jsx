import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import './homePage.css'
import house from './assets/house-solid.svg'
import faqlogo from './assets/question-solid.svg'
import trash from './assets/trash-solid.svg'
import VideoCard from "./component/videocard.jsx";
import filelogo from "./assets/file-regular.svg"
import { useState } from "react";
import axios from "axios";

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const userData = location.state || {}; 
    console.log(userData);
    const userdataVideo = userData.notes;
    const user_id = userData.user.id
    const [sidebarOpen, setSidebarOpen] = useState(false);
    
    const [formData, setFormData] = useState({
        user_id: user_id,
        youtube_link: "",
        note_pdf_link: "https://www.iitk.ac.in/esc101/share/downloads/javanotes5.pdf"
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await axios.post("https://stream2notes-backend.onrender.com/ytnotes/notes", formData);
          setFormData({...formData, youtube_link: ""});
          navigate("/home",{state: response.data})
        } catch (error) {
          console.log(error);
        }
    };

    console.log(userdataVideo);
    return (
        <>
        {/* Toggle Sidebar Button (Only for mobile screens) */}
        <div className="homePage">
            <div className={`sidebar-homepage ${sidebarOpen ? "active" : ""}`}>
            <button className="close-sidebar-btn" onClick={() => setSidebarOpen(false)}>❌</button>
                <div className="companylogo">
                    <br /><br /><br /><br /><br /><br />
                    <hr />
                </div>
                <div className="sidebar-elements">
                    <img src={house} alt="Homelogo" />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home</span>
                </div>
                <div className="sidebar-elements">
                    <img src={faqlogo} alt="faqlogo" />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FAQ</span>
                </div>
                <div className="sidebar-elements sidebar-user-img">
                    <img src={userData.user.picture} alt="User image" />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{userData.user.name}</span>
                </div>
                <div className="companylogo">
                    <hr />
                </div>
                <div className="Smart-Collection">
                    <span id="Smartcol">Smart Collection</span>
                    <div className="sidebar-elements ">
                        <img src={trash} alt="User image" />
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Recently deleted</span>
                    </div>
                    <div className="sidebar-elements" onClick={() => navigate("/folder")}>
                        <img src={filelogo} alt="file image" />
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your Folder</span>
                    </div>
                </div>
                <div className="companylogo">
                    <br />
                    <hr />
                </div>
                <div>
                    <h3>Welcome! <br /><span className="text-purpale fontsize">{userData.user.email}</span></h3>
                    <h3>To Note Maker</h3>
                </div>
            </div>
            <div className="maincontain-homepage">
                <div className="addytvideo">
                    <button className="toggle-sidebar-btn" onClick={() => setSidebarOpen(true)}>
                        ☰
                    </button>
                    <form onSubmit={handleSubmit}>
                        <input type="text" 
                        placeholder=" Add youtube, tweets or articals..."
                        name="youtube_link"
                        value={formData.youtube_link} onChange={handleChange} required
                        />
                        <button type="submit">Add+</button>
                        <button className="Pricing-homepage">Pricing</button>
                        <button className="What-homepage" >What&apos;s New</button>
                    </form>
                </div>
                <br /><br /><br /><br />
                <div><h2>Your Youtube Videos</h2></div>
                <br />
                <hr />
                <div className="videos-notes">
                    {userdataVideo?.map((iteam)=>(
                        <VideoCard key={iteam.id} id={iteam.id} youtubeLink={iteam.youtube_link} notePdfLink={iteam.note_pdf_link}></VideoCard>
                    ))}
                </div>
                <br /><br />
                <hr />
                <br />
                <div><h2>Your <b>Notes</b></h2></div>
            </div>
        </div>
        </>
    );
};

export default Home;
