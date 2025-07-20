import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username : "saurabh",
    age : 22,
  }

  return (
    <>
      <h1 className='bg-yellow-500 text-black rounded-2xl p-4'>Tailwind Test</h1>
      <Card username = "chai aur code" btntext = "click me" />
      <Card username= "Saurabh Tomer" btntext = "visit me"/>
      </>
  )
}

export default App
