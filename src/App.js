import React from "react";
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Home from "./pages/Home/Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </Router>
  )
}


export default App