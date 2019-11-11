import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Axios from "axios"

// Action Names/Variables -----------------------------//

const DISPLAY_PRODUCTS = "DISPLAY_PRODUCTS"
const SIZES = "SIZES"

// Reducer ----------------------------------------//

const initialState = {
  products: [],
  selectedShirtSize: "M"
}

export default function tshirtReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_PRODUCTS:
      return { ...state, products: action.payload }
    case SIZES:
      return { ...state, selectedShirtSize: state }
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

// function getShirtSize(size) {
//   return action => {
//     action({
//       type:SIZES,
//       payload: initialState.size
//     })
//   }
// }

// function updateShirtSize(size) {
//   return action =>
// }
// Custom Hook -----------------------------------//

export function useDataHook() {
  const dispatch = useDispatch()
  const items = useSelector(appState => appState.tshirtReducer.products)
  const shirtSize = useSelector(appState => appState.tshirtReducer.selectedShirtSize)

  useEffect(() => {
    const fetch = () => dispatch(getProductData())
    fetch()
    // const getSize = () => dispatch(getShirtSize())
    // getSize()
  }, [dispatch])

  return { items, shirtSize }
}
