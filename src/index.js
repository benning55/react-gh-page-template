import React from "react"
import ReactDOM from "react-dom"
import { createRoot } from "react-dom/client"
import App from "./App"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import About from "./page/About"
import Login from "./page/Login"
import Signup from "./page/Signup"
import reportWebVitals from "./reportWebVitals"
import {AuthProvider}  from "react-oidc-context"
import Oidc from "./page/Oicd"


const tenancy = "http://localhost:8080/"
const clientId = "odoo"

const oidcConfig = {
  authority: `${tenancy}/realms/test`,
  client_id: clientId,
  client_secret: "*****************",
  response_type: "code",
  redirect_uri: "http://localhost:3000/",
  scope: "profile",
  loadUserInfo: true,
  metadata: {
    issuer: `${tenancy}/`,
    authorization_endpoint: `${tenancy}/realms/test/protocol/openid-connect/auth`,
    token_endpoint: `${tenancy}/realms/test/protocol/openid-connect/token`,
    userinfo_endpoint: `${tenancy}/realms/test/protocol/openid-connect/userinfo`,
  },
}


const root = createRoot(document.getElementById("root"))
root.render(
  <AuthProvider {...oidcConfig}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/oidc' element={<Oidc />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
