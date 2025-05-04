import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const GoogleAuth = () => {
  const clientId = "153474603880-paih02ut61cvufjrf0mpja514ta4cj78.apps.googleusercontent.com";
  const navigate = useNavigate();  // Initialize useNavigate

  const handleLoginSuccess = async (credentialResponse) => {
    // console.log("Google Login Response:", credentialResponse);  

    try {
      // console.log("Sending token to backend:", credentialResponse.credential);  

      const response = await axios.post('https://stream2notes-backend.onrender.com/ytnotes/google', {
        token: credentialResponse.credential,
      }, { withCredentials: true });
      

      // console.log("Backend response:", response);
      // console.log("Backend response data:", response.data);

      const googleData = response.data;  
      // console.log("Google Data:", googleData);
      // console.log("User ID:", googleData.user.id);
      

      navigate("/home", { state: googleData }); 

    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
