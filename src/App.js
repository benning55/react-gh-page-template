import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetchTodos()
  }, [])

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
      <h2>Github Pages</h2>
      <h3>Deploying React to Github</h3>
      {data.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  )
}

export default App;
