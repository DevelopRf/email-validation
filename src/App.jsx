import { useState } from 'react'
import RegisterForm from './components/RegisterForm'
import "../src/global.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <RegisterForm />
  )
}

export default App
