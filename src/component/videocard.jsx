import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ id, youtubeLink, notePdfLink }) => {
    const navigate = useNavigate();
    const videoId = extractYouTubeID(youtubeLink);
    if (!videoId) return null;

    const [notes, setNotes] = useState([]);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this note?")) {
            try {
                console.log("VideoCard ID:", id);
                const userdata = await axios.delete(`https://stream2notes-backend.onrender.com/ytnotes/notes/${id}`);
                 
                // ✅ Ensure state updates correctly
                setNotes((prevNotes) => prevNotes.filter(note => note.id !== id));

                console.log("Note deleted successfully!");
                console.log(userdata);
                navigate("/home",{state: userdata.data});
            } catch (error) {
                console.error("Failed to delete note:", error);
            }
        }
    };
    console.log(notes);
    return (
        <div style={styles.card}>
            <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            
            <a href={notePdfLink} target="_blank" rel="noopener noreferrer" style={styles.link}>
                📄 View Notes
            </a>

            <button onClick={() => handleDelete(id)} style={styles.button}>Delete Notes</button>
        </div>
    );
};

// Function to extract YouTube Video ID
const extractYouTubeID = (url) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/))([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
};

const styles = {
    card: {
        width: "300px",
        background: "#fff",
        padding: "10px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        margin: "10px",
        textAlign: "center"
    },
    link: {
        display: "block",
        marginTop: "10px",
        textDecoration: "none",
        color: "#007BFF",
        fontWeight: "bold"
    },
    button:{
        height: "5vh",
        width: "auto",
        marginLeft: "1rem",
        border: "1px solid yellow",
        borderRadius: "0.5rem",
        backgroundColor: "#41435e",
        color: "#bebca1",
    }
};

export default VideoCard;

