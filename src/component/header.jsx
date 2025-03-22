import { useNavigate } from "react-router-dom";

import './header.css'

export default function Header(){
    const navigate = useNavigate();
    return(
        <>
        <header>
            <div className="header-style">
                <h3>Welcome! to Note Maker</h3>
                <button onClick={() => {navigate("/login")}}>Login</button>
                <button>Pricing</button>
            </div>
        </header>
        </>
    );
}