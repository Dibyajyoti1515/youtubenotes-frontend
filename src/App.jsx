
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import Home from "./homePage.jsx";
import Signin from "./signinPage.jsx";
import Login from "./loginPage.jsx";
import MainPage from "./mainPage.jsx";
import ChromeExtension from "./chrome-extension.jsx";
import './App.css'
import Folder from "./folder.jsx";
import RedirectHandler from "./RedirectHandler.jsx"; 

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
          <Route path="/redirect" element={<RedirectHandler />} />
          <Route path="/chexe" element={<ChromeExtension />} />
        </Routes>
      </Router>
      <Analytics></Analytics>
    </>
  )
}

export default App
