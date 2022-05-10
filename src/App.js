import React, { Suspense } from "react"
import { Routes, Route } from "react-router-dom"

import NavBar from "./components/Common/NavBar"
import Footer from "./components/Common/Footer"

import LandingPage from "./components/LandingPage"
import SignupPage from "./components/SignupPage"

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ minHeight: "calc(100vh - 80px)" }}>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
      <Footer />
    </Suspense>
  )
}

export default App