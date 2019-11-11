import React from "react"
import "../styles/App.css"
import { Provider } from "react-redux"
import store from "../Redux-Store/store"
import { useDataHook } from "../Redux-Store/Vendors/T-shirts/Actions-Reducers"
import DisplayProducts from "../components/DisplayProducts"
import SizeButtons from "../components/size-button-filters"
import Header from "../components/header"

function Wrap() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const App = () => {
  const items = useDataHook()

  return (
    <>
      <Header />
      <div className="container">
        <SizeButtons goods={items} />
        <DisplayProducts goods={items} />
      </div>
    </>
  )
}

export default Wrap
