import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-1000"
     style={{backgroundColor: color}}
     >

      <div className="fixed flex flex-wrap justify-center bottom-12
      inset-x-0 px-2 align-middle ">

        <div className="flex flex-wrap justify-center gap-3 shadow-lg
         bg-white px-3 py-2 rounded-3xl">

          <button 
          onClick={() => setColor("green")}
          className="outline-none px-4 rounded-full 
          shadow-lg text-white "
          style={{backgroundColor:"green"}}>Green
          </button>

          <button 
           onClick={() => setColor("orange")}
          className="outline-none px-4 rounded-full 
          shadow-lg text-white "
          style={{backgroundColor:"orange"}}>Orange
          </button>

          <button 
           onClick={() => setColor("red")}
          className="outline-none px-4 rounded-full 
          shadow-lg text-white "
          style={{backgroundColor:"red"}}>Red
          </button>

          <button 
           onClick={() => setColor("yellow")}
          className="outline-none px-4 rounded-full 
          shadow-lg text-white "
          style={{backgroundColor:"yellow"}}>yellow
          </button>

          <button 
           onClick={() => setColor("olive")}
          className="outline-none px-4 rounded-full 
          shadow-lg text-white "
          style={{backgroundColor:"olive"}}>olive
          </button>

          <button 
           onClick={() => setColor("purple")}
          className="outline-none px-4 rounded-full 
          shadow-lg text-white "
          style={{backgroundColor:"purple"}}>purple
          </button>

        </div>
      </div>

    </div>
  )
}

export default App
