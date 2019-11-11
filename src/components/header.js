import React, { useState } from "react"
import Icon from "../lib/Icon"
import "../styles/header.css"

const Header = () => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => setModal().toggle()

  return (
    <div className="header-nav">
      <button value={modal} onClick={event => toggleModal()}>
        <Icon icon="shopping-cart" id="shopping-cart" />
        <div></div>
      </button>
    </div>
  )
}

export default Header
