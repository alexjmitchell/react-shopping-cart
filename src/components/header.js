import React from "react"
import Icon from "../lib/Icon"
import "../styles/header.css"
import Cart from "../components/Cart"

const Header = () => {
  return (
    <>
      <div className="header-nav">
        <Icon icon="shopping-cart" id="shopping-cart" />
        <div>
          <Cart />
        </div>
      </div>
    </>
  )
}

export default Header
