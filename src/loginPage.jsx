import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import loginPageimg from './assets/loginpageimg.jpg'


export default function LoginPage() {
  const navigate = useNavigate();
  const [errMsg, seterrMsg] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("https://stream2notes-backend.onrender.com/ytnotes/login", formData);

      // console.log(response.data.error);
      navigate("/home",{state: response.data})
    } catch (error) {
      if(error.response.data.error != ""){
        seterrMsg(error.response.data.error);
      }
      console.log(error);
    }
  };


  return (
    <>
      <div className="signindiv">
        <div className="signinphoto">
          <img src={loginPageimg} alt="signinpage" />
        </div>
        <div>
          <form onSubmit={handleSubmit} className="signinform">
            <div>
              <input type="email" name="email" placeholder=" Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <input type="password" name="password" placeholder=" Password" value={formData.password} onChange={handleChange} required />
            </div>     
            <div>
              <button type="submit">Login</button>
            </div>    
            <div>
              <p>{errMsg}</p>
            </div> 
          </form>
        </div>
      </div>
    </>
  );
}
