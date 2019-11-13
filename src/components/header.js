import React from "react"
import Icon from "../lib/Icon"
import "../styles/header.css"
import Cart from "../components/Cart"
import { useDataHook } from "../Redux-Store/Vendors/T-shirts/Actions-Reducers"

const Header = () => {
  const toggle = useDataHook()
  return (
    <>
      <div className="header-nav">
        <Icon
          icon="shopping-cart"
          id="shopping-cart"
          onClick={event => toggle()}
        />
        <div>
          <Cart />
        </div>
      </div>
    </>
  )
}

export default Header
