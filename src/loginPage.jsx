// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import loginPageimg from './assets/loginpageimg.jpg'


// export default function LoginPage() {
//   const navigate = useNavigate();
//   const [errMsg, seterrMsg] = useState("");
//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });
  
//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.name]: e.target.value});
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await axios.post("https://stream2notes-backend.onrender.com/ytnotes/login", formData);

//       // console.log(response.data.error);
//       navigate("/home",{state: response.data})
//     } catch (error) {
//       if(error.response.data.error != ""){
//         seterrMsg(error.response.data.error);
//       }
//       console.log(error);
//     }
//   };


//   return (
//     <>
//       <div className="signindiv">
//         <div className="signinphoto">
//           <img src={loginPageimg} alt="signinpage" />
//         </div>
//         <div>
//           <form onSubmit={handleSubmit} className="signinform">
//             <div>
//               <input type="email" name="email" placeholder=" Email" value={formData.email} onChange={handleChange} required />
//             </div>
//             <div>
//               <input type="password" name="password" placeholder=" Password" value={formData.password} onChange={handleChange} required />
//             </div>     
//             <div>
//               <button type="submit">Login</button>
//             </div>    
//             <div>
//               <p>{errMsg}</p>
//             </div> 
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }


// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./loginPage.css";

// import {
//   Button,
//   TextField,
//   Typography,
//   Paper,
//   Grid,
// } from "@mui/material";

// import {
//   IconButton,
//   InputAdornment,
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";

// // import loginPageimg from "./assets/loginpageimg.jpg";

// export default function LoginPage() {
//   const navigate = useNavigate();
//   const [errMsg, seterrMsg] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "https://stream2notes-backend.onrender.com/ytnotes/login",
//         formData
//       );
//       navigate("/home", { state: response.data });
//     } catch (error) {
//       if (error.response?.data?.error) {
//         seterrMsg(error.response.data.error);
//       }
//       console.error(error);
//     }
//   };

//   return (
//     <Grid container sx={{ minHeight: "100vh" }} direction="row" classname="loginpage">

//       {/* <Grid item xs={12} md={6}>
//         <Box
//           component="img"
//           src={loginPageimg}
//           alt="signinpage"
//           sx={{ width: "50%", height: "100%", objectFit: "cover" }}
//         />
//       </Grid>
//  */}

//       <Grid
//         item
//         xs={12}
//         md={6}
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//       >
//         <Paper elevation={6} sx={{ p: 4, width: "80%", maxWidth: 400 }}>
//           <Typography variant="h6" align="center" gutterBottom>
//             Logo in to continue to your dashboard.
//           </Typography>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               fullWidth
//               label="Email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               margin="normal"
//               variant="outlined"
//               sx={{  
                
//                 "& .MuiOutlinedInput-root": {
//                   "&.Mui-focused fieldset": {
//                     borderColor: "none", // Optional: border color on focus
//                   },
//                 },
//               }}
//               required
//             />
//             <TextField
//               fullWidth
//               label="Password"
//               name="password"
//               type={showPassword ? "text" : "password"}
//               value={formData.password}
//               onChange={handleChange}
//               margin="normal"
//               required
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       onClick={() => setShowPassword((prev) => !prev)}
//                       edge="end"
//                       aria-label="toggle password visibility"
//                       sx={{
//                         color: "#1976d2",
//                         "&:hover": {
//                           color: "#115293",
//                         },
//                         "&:focus": {
//                           outline: "none",
//                         },
//                         backgroundColor: "transparent",
//                       }}
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <Typography variant="body2">
//               Don&apos;t have an account?{" "}
//               <a href="/signin" style={{ color: "#1976d2", textDecoration: "none" }}>
//                 Sign up
//               </a>
//             </Typography>
//             {errMsg && (
//               <Typography color="error" variant="body2" mt={1}>
//                 {errMsg}
//               </Typography>
//             )}
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               fullWidth
//               sx={{ mt: 3 }}
//             >
//               Login
//             </Button>
//           </form>
//         </Paper>
//       </Grid>
//     </Grid>
//   );
// }


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google"; // Google Login import
import {
  Button,
  TextField,
  Typography,
  Paper,
  Grid,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function LoginPage() {
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://stream2notes-backend.onrender.com/ytnotes/login",
        formData
      );
      navigate("/home", { state: response.data });
    } catch (error) {
      if (error.response?.data?.error) {
        setErrMsg(error.response.data.error);
      }
      console.error(error);
    }
  };

  // Handle Google Login success
  const handleGoogleLogin = async (response) => {
    try {
      const { credential } = response;
      const googleData = await axios.post(
        "https://stream2notes-backend.onrender.com/auth/google",
        { token: credential }
      );
      navigate("/home", { state: googleData.data });
    } catch (error) {
      console.error("Google Login Error:", error);
      setErrMsg("Google login failed. Please try again.");
    }
  };

  return (
    <Grid container sx={{ minHeight: "100vh" }} direction="row" className="loginpage">
      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Paper elevation={6} sx={{ p: 4, width: "80%", maxWidth: 400 }}>
          <Typography variant="h6" align="center" gutterBottom>
            Login to continue to your dashboard.
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              margin="normal"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Typography variant="body2">
              Don't have an account?{" "}
              <a href="/signin" style={{ color: "#1976d2", textDecoration: "none" }}>
                Sign up
              </a>
            </Typography>
            {errMsg && (
              <Typography color="error" variant="body2" mt={1}>
                {errMsg}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3 }}
            >
              Login
            </Button>
            {/* Google Login Button */}
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => console.log("Google login failed")}
              useOneTap
              size="large"
              width="100%"
              shape="pill"
              text="Login with Google"
              theme="filled_blue"
              sx={{ mt: 2 }}
            />
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}

