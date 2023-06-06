import React, { useState } from "react"
import { signInWithGoogle, signInWithEmailPassword } from "../firebase"
import { NavLink, useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onLogin = async (e) => {
    e.preventDefault()
    try {
      let result = await signInWithEmailPassword(email, password)
      console.log(result)
      navigate("/")
    } catch (e) {
      console.log("*******")
      console.log(e)
      alert(e)
    }
  }

  return (
    <>
      <main>
        <section>
          <div>
            <p> FocusApp </p>

            <form>
              <div>
                <label htmlFor='email-address'>Email address</label>
                <input
                  id='email-address'
                  name='email'
                  type='email'
                  required
                  placeholder='Email address'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor='password'>Password</label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  required
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <button onClick={onLogin}>Login</button>
                <button
                  className='bg-red-500 hover:bg-red-600 w-full py-2 text-white'
                  onClick={() => {
                    signInWithGoogle()
                  }}
                >
                  Sign in with Google
                </button>
              </div>
            </form>

            <p className='text-sm text-white text-center'>
              No account yet? <NavLink to='/signup'>Sign up</NavLink>
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default Login
