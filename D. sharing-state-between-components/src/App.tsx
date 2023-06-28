import { useState } from "react";
import Navbar from "./components/navbar";
import Cart from "./components/cart";

function App() {
  const [cartItems, setCartItems] = useState([
    "product1",
    "product2",
    "product3",
  ]);

  return (
    <>
      <Navbar cartItemCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
    </>
  );
}

export default App;
