import { useState } from "react"; 

function App() {

  //Exercise1.  change the name from john to divyanshu on handle Click 

  const [game, setGame] = useState({
    id : 1, 
    player: {
      name : "john",
    },
  });

  const handleClick1 = () => {
    setGame({...game, player : {...game.player, name : "divyanshu"}});
  }


  //Exercise2.  add some more topicing (cheese) on the pizza when the add toping button is clicked 
  
  const [pizza, setPizza] = useState({
    name : 'Spicy Pizza',
    toppings : ['Mushroom']
  });

  const handleClick2 = () => {
    setPizza({...pizza, toppings : [...pizza.toppings, 'cheese']});
  }


  return (
    <>
    <div className="exercise 1">
      <h1>Exercise 1 </h1>
      <h1>{game.player.name}</h1>
      <button onClick={handleClick1}>Click to change name</button>
    </div>


    <div className="exercise 2">
      <h1>Exercise 2 </h1>
      <h2>{pizza.name}</h2>
      <h2>Ingredients : {pizza.toppings.map(item => <li key={item}>{item}</li>)}</h2>
      <button onClick={handleClick2}>Click to add more Ingredients</button>
    </div>

    </>
  );
}

export default App;
