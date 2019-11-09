import React from "react"
import "../styles/App.css"
import { Provider } from "react-redux"
import store from "../Redux-Store/store"
import { useDataHook } from "../Redux-Store/Vendors/T-shirts/Actions-Reducers"
import DisplayProducts from "../components/DisplayProducts"

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
      <div className="container">
        <DisplayProducts goods={items} />
      </div>
  )
}

export default Wrap