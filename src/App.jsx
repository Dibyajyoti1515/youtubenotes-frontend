
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./homePage.jsx";
import Signin from "./signinPage.jsx";
import Login from "./loginPage.jsx";
import MainPage from "./mainPage.jsx";
import './App.css'
import Folder from "./folder.jsx";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/folder" element={<Folder />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
