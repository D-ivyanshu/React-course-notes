import Counter from "./Counter";
import { useState } from "react";

function App() { 

  const [count, setCount] = useState(0);

  function inc() {
    setCount(count + 1);
  }

  function dec() {
    setCount(count - 1);
  }

  function mulBy2() {
    setCount(count * 2);
  }

  return (
    <>
      <Counter count = {count} onIncrement={inc} onDecrement={dec} onMulitply={mulBy2}></Counter>
    </>
  )
}

export default App
