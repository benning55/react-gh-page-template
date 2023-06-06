import './App.css';
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "./firebase"

function App() {

  const [data, setData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid
        // ...
        console.log("uid", uid)
      } else {
        // User is signed out
        // ...
        console.log("user is logged out")
        navigate("/login")
      }

    })
    fetchTodos()
  }, [])

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login")
        console.log("Signed out successfully")
      })
      .catch((error) => {
        // An error happened.
      })
  }

  const fetchTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      )
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div className='App'>
      <Link to='/about'>About</Link>
      <br />
      <Link to='/login'>Log In</Link>
      <br />
      <Link to='/signup'>Sign Up</Link>
      <br />
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <h2>Github Pages</h2>
      <h3>Deploying React to Github</h3>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  )
}

export default App;
