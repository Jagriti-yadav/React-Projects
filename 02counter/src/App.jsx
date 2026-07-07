import { useState } from "react";
import "./App.css";

function App() {
  let [counter,setCounter] = useState(12);

  const addValue = () => {
    setCounter(counter+1);
    console.log("random value is : ", counter);
  };

  const removeValue=()=>{
    if(counter>=1){
      setCounter(counter-1);
    }
    
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>count value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Subtract value</button>
    </>
  );
}

export default App;
