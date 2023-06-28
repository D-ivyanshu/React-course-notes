import Button from "./components/Button";
import { useState } from "react";

function App() {

  const [isVisible, setIsVisible] = useState(false);
  
  const handleClick = () => {
    setIsVisible(true)
  };  

  return (
    <>
      <Button></Button>
    </>
  )
}

export default App
