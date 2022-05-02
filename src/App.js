import React, { Suspense } from "react"
import { Routes, Route } from "react-router-dom"

import LandingPage from "./components/LandingPage"

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div style={{ minHeight: "calc(100vh - 80px)" }}>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Suspense>
  )
}

export default App
