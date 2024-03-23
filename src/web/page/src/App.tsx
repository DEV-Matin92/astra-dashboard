import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home"

function App() {

  return (
    <>
      <Routes>
        
        <Route path="/" element={<HomePage />} />

        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

function NoMatch() {
  return (
    <div className="w-screen h-screen flex justify-around "> 404 </div>
  )
}

export default App
