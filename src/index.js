import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { HashRouter, Routes, Route } from "react-router-dom"
import About from "./page/About"
import Login from "./page/Login"
import Signup from "./page/Signup"
import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
