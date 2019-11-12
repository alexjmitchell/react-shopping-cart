import React from "react"
import "../styles/Cart.css"
import { useDataHook } from "../Redux-Store/Vendors/T-shirts/Actions-Reducers"
import CartCards from "./Cart-Cards"
import store from "../Redux-Store/store"
import { getState } from "redux"

const Cart = props => {
  const { cartItems } = useDataHook()
  return (
    <div
      id="cart-container"
      className={
        store.getState() === { cartShow: true } ? "cart-hide" : "cart-show"
      }
    >
      <h1>Shopping-Cart</h1>
      <CartCards cart={cartItems} />
    </div>
  )
}

export default Cart
