import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counterUp, setCounterUp] = useState(5);

  let [counterDown , setCounterDown] = useState(5);

  // let counter = 5

  const addValue = () => {
    // console.log('clicked ' , counter);
    // counter++;
    // let counter = counter + 1;
    let changeValue = (counterUp) => {
      if (counterUp < 20) {
        return (counterUp = counterUp + 1);
      } else {
        return counterUp;
      }
    };
    setCounterUp(changeValue(counterUp));
  };

  const removeValue = () => {
     let changeValue = (counterDown) => {
      if (counterDown > 0) {
        return (counterDown = counterDown - 1);
      } else {
        return counterDown;
      }
    };
    setCounterDown(changeValue(counterDown));
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>counter value : {counterUp}</h2>
      <button onClick={addValue}>Add value {counterUp}</button>
      <br />
      <button onClick={removeValue}>Remove value {counterDown}</button>
    </>
  );
}

export default App;
