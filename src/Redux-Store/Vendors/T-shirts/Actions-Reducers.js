import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Axios from "axios"

// Action Names/Variables -----------------------------//

const DISPLAY_PRODUCTS = "DISPLAY_PRODUCTS"

// Reducer ----------------------------------------//

const initialState = {
  products: []
}

export default function tshirtReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_PRODUCTS:
      return { ...state, products: action.payload }
    default:
      return state
  }
}

// Action Creators ------------------------//

function getProductData() {
  return action => {
    Axios.get("/products").then(response => {
      action({
        type: DISPLAY_PRODUCTS,
        payload: response.data
      })
    })
  }
}

// Custom Hook -----------------------------------//

export function useDataHook() {
  const dispatch = useDispatch()
  const items = useSelector(appState => appState.tshirtReducer.products)

  useEffect(() => {
    const fetch = () => dispatch(getProductData())
    fetch()
  }, [dispatch])

  return items
}
