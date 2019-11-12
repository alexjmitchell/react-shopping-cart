import React from "react"
import Icon from "../lib/Icon"
import "../styles/header.css"
import Cart from "../components/Cart"
import { toggleCartShow } from "../Redux-Store/Vendors/T-shirts/Actions-Reducers"
import { useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()
  return (
    <>
      <div className="header-nav">
        <Icon icon="shopping-cart" id="shopping-cart" onClick={event => dispatch(toggleCartShow())} />
        <div>
          <Cart />
        </div>
      </div>
    </>
  )
}

export default Header
