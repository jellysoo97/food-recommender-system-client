import React, { Suspense } from "react"
import { Routes, Route } from "react-router-dom"

import NavBar from "./components/Common/NavBar"
import Footer from "./components/Common/Footer"

import LandingPage from "./components/LandingPage"
import Select from "./components/Select/Select"

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ minHeight: "calc(100vh - 80px)" }}>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/select" element={<Select />} />
        </Routes>
      </div>
      <Footer />
    </Suspense>
  )
}

export default App
