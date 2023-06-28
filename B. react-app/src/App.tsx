import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react"; 

function App() {
   
  const [alertVisible, setAlertVisibility] = useState(false);

  // let items = [
  //   "delhi",
  //   "mumbai",
  //   "chennai",
  //   "kolkata",
  //   "hyderabad",
  //   "bangalore",
  // ];

  // const handleSelectItem = (item : string) => {
  //   console.log(item);
  // }


  const fun = () => {
    setAlertVisibility(true);
  }

  return (
    <div>
      {/* <ListGroup items = {items} heading = "Cities" onSelectItem={handleSelectItem} /> */}
      {alertVisible && <Alert onClose={()=> setAlertVisibility(false)}>Hi, From Alert</Alert>}
      <Button onClick={fun}>
          Label for Button
      </Button>
    </div>
  );
}

export default App;



