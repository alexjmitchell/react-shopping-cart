import React from 'react'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../Redux-Store/store'



export default props => {
  return (
    <Provider store={store}>
      <div>
        <p>Stuff</p>
      </div>
    </Provider>
  )
}