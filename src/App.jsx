import { Route, Routes } from "react-router-dom"
import Login from "./Pages/Login.jsx"
import Signup from "./Components/Signup"
import SignupPage from "./Pages/SignupPage"
import "./styles/common.css"

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App