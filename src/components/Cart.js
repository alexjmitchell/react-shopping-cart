import React from "react"
import "../styles/Cart.css"
import { useDataHook } from "../Redux-Store/Vendors/T-shirts/Actions-Reducers"
import CartCards from "./Cart-Cards"


const Cart = props => {
  const { cartItems, cart } = useDataHook()
  
  return (
    <div id="cart-container" className={cart ? "cart-show" : ""}>
      {console.log("CartShow =======-->><>>", cart)}
      <h1>Shopping-Cart</h1>
      <CartCards cart={cartItems} />
    </div>
  )
}

export default Cart
