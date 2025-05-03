import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RedirectHandler = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");

        if (code) {
            axios.post("https://stream2notes-backend.onrender.com/ytnotes/google-auth", { code })
                .then((res) => {
                    console.log("Google login success:", res.data);
                    localStorage.setItem("user", JSON.stringify(res.data.user));
                    navigate("/home");
                })
                .catch((err) => {
                    console.error("Google login error:", err);
                    navigate("/login");
                });
        } else {
            navigate("/login");
        }
    }, []);

    return <div>Authenticating with Google...</div>;
};

export default RedirectHandler;
