import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
import './signinPage.css'

import signinpageimg from './assets/signinpageimg.jpeg'

export default function SigninPage() { // Use PascalCase
    const navigate = useNavigate();

    const [existingUsernames, setexistingUsernames] = useState(null);
    const [existingEmails, setexistingEmails] = useState(null);
    const [usernameMsg, setusernameMsg] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        name: "",
        age: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await axios.get("https://stream2notes-backend.onrender.com/ytnotes/users"); 
                const response2 = await axios.get("https://stream2notes-backend.onrender.com/ytnotes/emails");
                console.log(response1,response2);
                setexistingEmails(response2.data.emails);
                setexistingUsernames(response1.data.usernames);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleChangeuser = (e) => {
        const trimmedValue = e.target.value.trim(); // Trim spaces
        const usernameRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/; // Must contain letters & numbers
        const nonAlphanumericRegex = /[^A-Za-z\d]/g; // Detects non-alphanumeric characters
        let errorMsg = "";

        const invalidChars = trimmedValue.match(nonAlphanumericRegex); 
        if (invalidChars) {
            errorMsg = `Invalid characters: ${invalidChars.join(", ")} are not allowed.`;
        } else if (!usernameRegex.test(trimmedValue)) {
            errorMsg = "Username must contain at least one letter and one number.";
        } else if (Array.isArray(existingUsernames) && existingUsernames.includes(trimmedValue)) {
            errorMsg = `${trimmedValue} is not available`;
        } else {
            errorMsg = ""; // Clear error message
        }

        setusernameMsg(errorMsg);

        const updatedFormData = { ...formData, username: trimmedValue };
        setFormData(updatedFormData);
    
        // Check if all fields are filled & no error messages
        setIsButtonDisabled(!updatedFormData.username || !updatedFormData.password || errorMsg !== "");
    };
    
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const trimmedValue = formData.email.trim(); 
        if(Array.isArray(existingEmails) && existingEmails.includes(trimmedValue)){
            navigate("/login")
        } else {
            try {
              const response = await axios.post("https://stream2notes-backend.onrender.com/ytnotes/signin", formData);
              navigate("/home",{state: response.data})
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <>
        <div className="signindiv">
            <div className="signinphoto">
                <img src={signinpageimg} alt="signinpage" />
            </div>
            <div>
                <form onSubmit={handleSubmit} className="signinform">
                    <div className="signinform-Username">
                        <input type="text" name="username" placeholder=" Username" value={formData.username} onChange={handleChangeuser} required />
                        <p>{usernameMsg}</p>
                    </div>
                    <div>
                        <input type="email" name="email" placeholder=" Email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <input type="password" name="password" placeholder=" Password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div>
                        <input type="text" name="name" placeholder=" Full Name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <input type="number" name="age" placeholder=" Age" value={formData.age} onChange={handleChange} required />
                    </div>
                    <div>
                        <button type="submit" disabled={isButtonDisabled}>Sign In</button>
                    </div>
                </form>
            </div>
        </div>
        </>
  );
}
